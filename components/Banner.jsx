import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="py-8 max-w-3xl">
      <h3 className="text-purple-800 font-semibold text-xl py-4">Components</h3>
      <h2 className="text-4xl font-bold mb-5">
        Beautifully crafted UI components, ready for your next project.
      </h2>
      <p className="mb-6">
        Over 500+ professionally designed, fully responsive, expertly crafted
        component examples you can drop into your Tailwind projects and
        customize to your heart’s content.
      </p>
      <Link className="text-purple-800 font-semibold " href="#">
        Browse all components →
      </Link>
    </div>
  );
}
