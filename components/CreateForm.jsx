"use client";
import CategoryForm from "@/components/CategoryForm";
import ComponentForm from "@/components/ComponentForm";
import VariationForm from "@/components/VariationForm";
import { Book, File, LayoutDashboard, Paperclip, Pencil } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function CreateForm({ categories, components }) {
  const [displayedForm, setDisplayedForm] = useState("category");
  console.log(displayedForm);

  const tabs = [
    {
      title: "Create Category",
      form: "category",
      icon: Pencil,
    },
    {
      title: "Create Component",
      form: "component",
      icon: LayoutDashboard,
    },
    {
      title: "Create Component Variation",
      form: "variation",
      icon: Paperclip,
    },
  ];
  function changeDisplayForm(form) {
    setDisplayedForm(form);
  }
  return (
    <section className="bg-white dark:bg-gray-900 rounded-md shadow-lg">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
        <h2 className="text-slate-900 text-2xl mb-3">Create a Component</h2>
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <li key={i} className="mr-2">
                  <button
                    onClick={() => changeDisplayForm(tab.form)}
                    className={
                      displayedForm === tab.form
                        ? "inline-flex items-center justify-center p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active dark:text-purple-500 dark:border-purple-500 group"
                        : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    }
                  >
                    <Icon className="mr-2 w-4 h-4text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" />
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {displayedForm === "category" ? (
          <CategoryForm />
        ) : displayedForm === "component" ? (
          <ComponentForm categories={categories} />
        ) : (
          <VariationForm components={components} />
        )}
      </div>
    </section>
  );
}
