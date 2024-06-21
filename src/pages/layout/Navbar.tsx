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
import { Github, Pen } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileNavbar from "./MobileNavbar";
import { productLinks, routeLinks } from "@/data/data";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <NavigationMenu className="relative mx-auto flex">
        <NavigationMenuList className="flex items-center">
          <div className="lg:mr-42 flex items-center md:mr-20 xl:mr-80">
            <NavigationMenuItem>
              <Link href="/" className="hidden text-xl font-bold md:flex">
                Neobrutalism
              </Link>
              <div className="mr-28">
                <Pen className="flex h-6 w-6 md:hidden" />
              </div>
            </NavigationMenuItem>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {routeLinks.map((route, index) =>
              index !== 2 ? (
                <NavigationMenuItem key={route.label}>
                  <ReusableLink href={route.href} label={route.label} />
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={route.label}>
                  <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
                    {route.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {productLinks.map((product) => (
                        <ListItem
                          key={product.title}
                          title={product.title}
                          href={product.href}
                        >
                          {product.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ),
            )}
          </div>

          <div className="lg:ml-42 flex items-center md:ml-20 xl:ml-80">
            <div className="hidden items-center space-x-2 md:flex">
              <Link
                href="https://github.com/Riyadh-Muradi/neobrutalism"
                target="_blank"
                className={`bg-white hover:bg-main ${buttonVariants({ variant: "default" })}`}
              >
                <Github className="h-6 w-6" />
                Github
              </Link>
            </div>

            {/* Mobile Navbar */}
            <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent block select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-black hover:bg-main",
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
  ),
);
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
