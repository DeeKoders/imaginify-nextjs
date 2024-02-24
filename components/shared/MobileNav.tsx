"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header border bg-black ">
      <Link
        href={"/"}
        className="w-full flex items-center justify-between md:py-2 "
      >
        <Image
          src={"/assets/images/logo-text.svg"}
          alt="Logo"
          width={180}
          height={28}
        />

        <nav className="flex gap-2">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />

            <Sheet>
              <SheetTrigger>
                <Image
                  src={"assets/icons/menu.svg"}
                  alt="Menu"
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
              </SheetTrigger>
              <SheetContent className="sheet-content sm:w-64">
                <Image
                  src={"assets/images/logo-text.svg"}
                  alt="Menu"
                  width={152}
                  height={23}
                  className="cursor-pointer"
                />

                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={`${isActive && "gradient-text"} p-18 whitespace-nowrap text-dark-700`}
                      >
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </SheetContent>
            </Sheet>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </Link>
    </header>
  );
};

export default MobileNav;
