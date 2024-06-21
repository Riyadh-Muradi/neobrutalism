"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Github, LogOut, Pen } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import MobileNavbar from "./MobileNavbar";
import { components } from "@/data/data";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList className="container flex w-[90vw] items-center justify-between">
        {/* Title on the left */}
        <div className="flex items-center">
          <NavigationMenuItem className="font-bold">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 hidden text-xl font-bold md:flex"
            >
              Neobrutalism
            </a>
            <Pen className="mr-2 mt-[2.5px] flex md:hidden" />
          </NavigationMenuItem>
        </div>

        {/* Navigation links in the center */}
        <div className="flex items-center">
          <NavigationMenuItem>
            <ReusableLink href="https://ui.shadcn.com/docs" label="1" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ReusableLink href="https://ui.shadcn.com/docs" label="2" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
              3
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ReusableLink href="https://ui.shadcn.com/docs" label="4" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ReusableLink href="https://ui.shadcn.com/docs" label="5" />
          </NavigationMenuItem>
        </div>

        {/* GitHub link and ThemeToggle on the right */}
        <div className="flex items-center">
          <div className="hidden items-center space-x-2 md:flex">
            <a
              rel="noreferrer noopener"
              href="https://github.com/Riyadh-Muradi/neobrutalism"
              target="_blank"
              className={`border ${buttonVariants({ variant: "default" })}`}
            >
              <Github className="mr-2 h-5 w-5" />
              Github
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile menu */}
          <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "hover:bg-accent block select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-black hover:dark:border-white",
          className,
        )}
        {...props}
      >
        <div className="text-base font-heading leading-none">{title}</div>
        <p className="text-muted-foreground line-clamp-2 text-sm font-base leading-snug">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

interface ReusableLinkProps {
  href: string;
  label: string;
}

const ReusableLink: React.FC<ReusableLinkProps> = React.memo(
  ({ href, label }) => (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <span className="m750:max-w-[80px] m750:text-xs">{label}</span>
      </NavigationMenuLink>
    </Link>
  ),
);

ReusableLink.displayName = "ReusableLink";

export default Navbar;
