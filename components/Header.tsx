"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ModeToggle";
import { AuthStatus } from "@/components/AuthStatus";

const navigation = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Produits",
    href: "#",
    children: [
      {
        title: "Carte Unik©",
        href: "/unik-card",
        description: "La carte de paiement révolutionnaire avec programme de fidélité intégré",
      },
      {
        title: "YaniCoin",
        href: "/yani-coin",
        description: "Notre crypto-monnaie native pour des transactions rapides et sécurisées",
      },
      {
        title: "Programme de fidélité",
        href: "/loyalty",
        description: "Gagnez des points et des récompenses chez nos partenaires",
      },
    ],
  },
  {
    name: "Entreprises",
    href: "#",
    children: [
      {
        title: "Solutions B2B",
        href: "/business",
        description: "Intégrez YaniPay dans votre entreprise",
      },
      {
        title: "API & Développeurs",
        href: "/developers",
        description: "Documentation et outils pour développeurs",
      },
      {
        title: "Partenariats",
        href: "/partnerships",
        description: "Rejoignez notre réseau de partenaires",
      },
    ],
  },
  {
    name: "Support",
    href: "/support",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="font-bold text-xl">YaniPay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent",
                            pathname === item.href && "text-primary"
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.children.map((child) => (
                              <li key={child.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {child.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {child.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent",
                            pathname === item.href && "text-primary"
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <AuthStatus />
            
            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-left font-medium"
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === item.name ? null : item.name
                              )
                            }
                          >
                            {item.name}
                          </Button>
                          {openDropdown === item.name && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.href}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "block px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                            pathname === item.href && "text-primary"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}