import Link from "next/link";
import React from "react";
import Banner from "./Banner";
import CategoriesList from "./CategoriesList";
import { getData } from "@/libs/getData";

export default async function ComponentList() {
  const categories = await getData("categories");
  return (
    <div className="lg:px-16 px-8">
      <Banner />
      {/* Component Categories */}
      <CategoriesList categories={categories} />
    </div>
  );
}
