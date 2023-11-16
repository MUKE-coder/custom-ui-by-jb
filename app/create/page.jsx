import CreateForm from "@/components/CreateForm";
import { getData } from "@/libs/getData";
import React from "react";

export default async function page() {
  const categories = await getData("categories");
  const components = await getData("components");
  return <CreateForm categories={categories} components={components} />;
}
