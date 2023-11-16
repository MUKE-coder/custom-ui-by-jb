import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ComponentCard() {
  return (
    <Link
      href="/components/layouts"
      className="shadow-md rounded-md overflow-hidden hover:bg-slate-100 duration-300 transition-all p-4 border border-slate-200"
    >
      <Image
        width={1920}
        height={1192}
        className="w-full h-40 object-cover"
        src="/thumbnail.webp"
      />
      <h2>Hero Sections</h2>
      <p className="text-sm pt-1">12 Components</p>
    </Link>
  );
}
