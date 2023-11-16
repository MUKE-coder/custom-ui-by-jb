"use client";
import React, { useState } from "react";
import DisplayCategory from "./DisplayCategory";

export default function CategoriesList() {
  const tabs = [
    {
      title: "Application UI",
      type: "application",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam corporis non porro nihil dolor beatae dolorem veniam eligendi! Illo, consequatur quasi nam debitis aspernatur vero! Doloribus autem accusantium ullam voluptatibus.",
    },
    {
      title: "Marketing",
      type: "marketing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam corporis non porro nihil dolor beatae dolorem veniam eligendi! Illo, consequatur quasi nam debitis aspernatur vero! Doloribus autem accusantium ullam voluptatibus.",
    },
    {
      title: "Ecommerce",
      type: "ecommerce",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam corporis non porro nihil dolor beatae dolorem veniam eligendi! Illo, consequatur quasi nam debitis aspernatur vero! Doloribus autem accusantium ullam voluptatibus.",
    },
  ];

  const [displayedCategory, setDisplayedCategory] = useState("application");
  return (
    <section className="bg-white dark:bg-gray-900 rounded-md shadow">
      <div className="py-8 px-4 mx-auto  lg:py-8">
        <div className="border-t border-gray-200 dark:border-gray-700 mb-6">
          <ul className="grid grid-cols-3 -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-between">
            {tabs.map((tab, i) => {
              return (
                <li key={i} className="mr-2">
                  <button
                    onClick={() => setDisplayedCategory(tab.type)}
                    className={
                      displayedCategory === tab.type
                        ? "inline-flex flex-col items-center justify-center px-4 pb-4 pt-8 text-purple-600 border-t-2 border-purple-600  active dark:text-purple-500 dark:border-purple-500 group font-bold "
                        : "inline-flex flex-col items-center justify-center text-slate-900 pb-4 px-4 pt-8 border-t-2 border-transparent  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group font-bold"
                    }
                  >
                    {tab.title}
                    <p className="font-normal pt-3 text-slate-600 text-left">
                      {tab.description}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {displayedCategory === "application" ? (
          <DisplayCategory
            title="Application"
            desc="This is the application Category"
          />
        ) : displayedCategory === "marketing" ? (
          <DisplayCategory
            title="Marketing"
            desc="This is the marketing Category"
          />
        ) : (
          <DisplayCategory
            title="Eccomerce"
            desc="This is the ecommerce Category"
          />
        )}
      </div>
    </section>
  );
}
