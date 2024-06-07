"use client";
import React from "react";
import Link from "next/link";
import { VscCode } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <VscCode className="h-8 w-8" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium" prefetch={false}>
            Work
          </Link>
          <Link href="#" className="text-sm font-medium" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="text-sm font-medium" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}
