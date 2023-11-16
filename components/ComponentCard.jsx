import { getData } from "@/libs/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ComponentCard({ component }) {
  console.log(component);
  // const componentData = await getData(`components/${component.id}`);
  return (
    <Link
      href={`/components/${component.slug}`}
      className="shadow-md rounded-md overflow-hidden hover:bg-slate-100 duration-300 transition-all p-4 border border-slate-200"
    >
      <Image
        width={1920}
        height={1192}
        className="w-full h-40 object-cover"
        src={component.imageUrl}
        alt="thumbnail"
      />
      <h2 className="mt-2">{component.title}</h2>
      <p className="text-sm pt-1">{0} Components</p>
    </Link>
  );
}
