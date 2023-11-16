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
import { generateSlug } from "@/libs/generateSlug";

export default function ComponentForm({ categories }) {
  const [imageUrl, setImageUrl] = useState("");
  //
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  function redirect() {
    router.push("/dashboard/inventory/categories");
  }
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/components", data, "Component", reset);
    // setImageUrl = "";
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Component Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            options={categories}
            className="w-full"
          />
          <ImageInput
            label="Component Thumbnail"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
          />
        </div>
        <SubmitButton isLoading={loading} title="Component" />
      </form>
    </div>
  );
}
