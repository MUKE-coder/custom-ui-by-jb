import React from "react";
import ThemeLink from "./ThemeLink";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center max-w-4xl mx-auto pt-28">
      <h2 className="text-7xl font-bold text-center">
        Build your next idea even faster.
      </h2>
      <p className="py-8 text-xl">
        Beautifully designed, expertly crafted components and templates, built
        by the makers of Tailwind CSS. The perfect starting point for your next
        project.
      </p>
      <div className="flex items-center space-x-4">
        <ThemeLink href="#" title="Browse Components" />
        <ThemeLink filled={false} href="#" title="Explore Templates" />
      </div>
    </div>
  );
}
