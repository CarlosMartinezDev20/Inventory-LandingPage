import { useState, useEffect } from "react";

import { Github } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { GITHUB_URL } from "@/consts";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    label: "Características",
    href: "#features",
  },
  { 
    label: "Descargar", 
    href: "#download" 
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <section
      className={cn(
        "bg-background/80 absolute left-1/2 z-50 w-[min(92%,720px)] -translate-x-1/2 rounded-full border border-border/50 backdrop-blur-xl shadow-lg transition-all duration-300",
        "top-4 sm:top-6 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between px-5 py-3 sm:px-7 sm:py-3.5">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Inventia
          </span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) => (
              <NavigationMenuItem key={link.label} className="">
                <a
                  href={link.href}
                  className={cn(
                    "relative bg-transparent px-3 py-1.5 text-sm font-medium rounded-full transition-all hover:bg-muted/50",
                    pathname === link.href && "text-muted-foreground",
                  )}
                >
                  {link.label}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <ThemeToggle />
          <a
            href={GITHUB_URL}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-full"
          >
            <Github className="size-4 sm:size-[18px]" />
            <span className="sr-only">GitHub</span>
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-muted-foreground hover:text-foreground relative flex size-9 items-center justify-center lg:hidden hover:bg-muted/50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "bg-background/95 backdrop-blur-xl fixed inset-x-0 top-[calc(100%+1rem)] mx-auto w-[92%] max-w-[720px] flex flex-col rounded-3xl border border-border/50 p-6 shadow-2xl transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0 pointer-events-none",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y">
          {ITEMS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-foreground hover:text-primary py-4 text-base font-medium transition-all first:pt-0 last:pb-0 hover:translate-x-1",
                pathname === link.href && "text-primary font-semibold",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};
