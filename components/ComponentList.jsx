import Link from "next/link";
import React from "react";
import Banner from "./Banner";
import CategoriesList from "./CategoriesList";

export default function ComponentList() {
  return (
    <div className="lg:px-16 px-8">
      <Banner />
      {/* Component Categories */}
      <CategoriesList />
    </div>
  );
}
