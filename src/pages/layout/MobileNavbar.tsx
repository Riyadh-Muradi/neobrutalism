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
          <SheetTitle className="flex h-12 items-center justify-center border-2 border-black bg-white text-xl font-bold text-black hover:bg-main">
            neobrutalism
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col items-center justify-center gap-2">
          {routeList.map(({ href, label }) => (
            <a
              rel="noreferrer noopener"
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`bg-white hover:bg-main ${buttonVariants({ variant: "default" })}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-center space-x-4">
          <a
            rel="noreferrer noopener"
            href="https://github.com/Riyadh-Muradi/neobrutalism"
            target="_blank"
            className={`bg-white hover:bg-main ${buttonVariants({ variant: "default" })}`}
          >
            <Github className="mr-2 h-6 w-6" />
            Github
          </a>
        </div>
      </SheetContent>
    </Sheet>
  </span>
);

export default MobileNavbar;
