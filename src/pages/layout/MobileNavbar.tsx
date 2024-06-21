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
import { routeLinks } from "@/data/data";
import Link from "next/link";

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
          <SheetTitle className="flex h-12 items-center justify-center border-2 border-black bg-white text-xl font-bold text-black shadow-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:bg-main hover:shadow-none">
            <Link href="/">Neobrutalism</Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col items-center justify-center gap-2">
          {routeLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`bg-white hover:bg-main ${buttonVariants({ variant: "default" })}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center space-x-4">
          <Link
            href="https://github.com/Riyadh-Muradi/neobrutalism"
            target="_blank"
            className={`bg-white hover:bg-main ${buttonVariants({ variant: "default" })}`}
          >
            <Github className="mr-2 h-6 w-6" />
            Github
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  </span>
);

export default MobileNavbar;
