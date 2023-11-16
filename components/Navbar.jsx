import Link from "next/link";
import React from "react";
import ThemeLink from "./ThemeLink";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 ">
      <Link href="/" className="text-3xl font-bold text-slate-950">
        Custom <span>UI</span>
      </Link>
      <div className="flex items-center space-x-3 font-semibold">
        <Link href="#components">Components</Link>
        <Link href="#templates">Templates</Link>
      </div>
      <div className="flex items-center space-x-3">
        <Link href="#signIn">Sign In</Link>
        <ThemeLink href="#" title="Get All Access" />
      </div>
    </div>
  );
}
