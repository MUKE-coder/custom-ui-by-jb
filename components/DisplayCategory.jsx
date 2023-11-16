import Image from "next/image";
import React from "react";
import ComponentCard from "./ComponentCard";

export default function DisplayCategory({ components = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card */}
      {components.map((component, i) => {
        return <ComponentCard key={i} component={component} />;
      })}
    </div>
  );
}
