import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { routeList } from "@/data/data";

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, setIsOpen }) => (
  <span className="ml-28 flex items-center md:hidden">
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu
          className="flex h-6 w-6 md:hidden"
          onClick={() => setIsOpen(true)}
        />
        <span className="sr-only">Menu Icon</span>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">Shadcn/React</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col items-center justify-center gap-2">
          {routeList.map(({ href, label }) => (
            <a
              rel="noreferrer noopener"
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={buttonVariants({ variant: "default" })}
            >
              {label}
            </a>
          ))}
          <a
            rel="noreferrer noopener"
            href="https://github.com/Riyadh-Muradi/neobrutalism"
            target="_blank"
            className={`w-[110px] border ${buttonVariants({ variant: "default" })}`}
          >
            <Github className="mr-2 h-6 w-6" />
            Github
          </a>
        </nav>
        <ThemeToggle />
      </SheetContent>
    </Sheet>
  </span>
);

export default MobileNavbar;
