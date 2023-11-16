import ComponentDetail from "@/components/ComponentDetail";
import { getData } from "@/libs/getData";
import React from "react";

export default async function page({ params: { slug } }) {
  const component = (await getData(`components/${slug}`)) ?? [];
  return (
    <div>
      <div className="max-w-6xl  mx-auto m-4">
        <h2 className="text-2xl font-bold mb-3 ">
          Tailwind CSS Blogs Components
        </h2>
        <p>
          Tailwind CSS Blog UI Components, Pages, Examples and Templates by
          TailGrids - All essential components and elements you need for blog
          such as - blog grids, blog details, author profile and everything you
          need to create blog site UI. Blog elements are essential for any
          website, TailGrids provides a wide range of UI components for the blog
          to choose from crafted for Tailwind CSS. Such as - multiple blog grid
          & card styles, multiple blog details page styles with blog newsletter
          subscription forms and more.
        </p>
      </div>

      {component?.variations.map((variation, i) => {
        return <ComponentDetail key={i} variation={variation} />;
      })}
    </div>
  );
}
