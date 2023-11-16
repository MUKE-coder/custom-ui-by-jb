import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ThemeLink({ href, title, filled = true }) {
  return (
    <>
      {filled ? (
        <Link
          href={href}
          className="bg-slate-950 hover:bg-slate-800 text-slate-50 rounded-md py-2.5 px-4 transition-all duration-300 flex items-center space-x-3"
        >
          {title}
          <ArrowRight className="w-5 h-5" />
        </Link>
      ) : (
        <Link
          href={href}
          className="bg-slate-50 hover:bg-slate-100 text-slate-950 rounded-md py-2.5 px-4 transition-all duration-300 flex items-center space-x-3 border border-slate-300"
        >
          {title}
          <ArrowRight className="w-5 h-5" />
        </Link>
      )}
    </>
  );
}
