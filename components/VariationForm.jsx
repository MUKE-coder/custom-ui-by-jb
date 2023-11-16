"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import { makePostRequest } from "@/libs/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SelectInput from "./FormInputs/SelectInput";
import ImageInput from "./FormInputs/ImageInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function VariationForm({ components }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [codeString, setCodeString] = useState("");
  //Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];
  function redirect() {
    router.push("/dashboard/inventory/categories");
  }
  async function onSubmit(data) {
    console.log(data);
    makePostRequest(setLoading, "api/variations", data, "Variation", reset);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Variation Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Component"
            name="componentId"
            register={register}
            errors={errors}
            options={components}
            className="w-full"
          />
          {/* <div className="sm:col-span-2">
            <label
              htmlFor="content"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Code snippet
            </label>
            <ReactQuill
              theme="snow"
              value={codeString}
              onChange={setCodeString}
              modules={modules}
              formats={formats}
            />
            
          </div> */}
          <TextareaInput
            label=" Code Snippet"
            name="codeString"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label=" Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title="Variation" />
      </form>
    </div>
  );
}
