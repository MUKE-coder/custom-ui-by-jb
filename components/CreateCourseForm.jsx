import { UploadDropzone } from "@/utils/uploadthing";
import { useAuth } from "@clerk/nextjs";
import { Pencil, Plus, Watch } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function CreateCourseForm({ setCurrentCourse }) {
  const { isLoaded, userId } = useAuth();
  if (!isLoaded || !userId) {
    return null;
  }
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  console.log(imageUrl);

  const isPublished = watch("isPublished");
  async function onSubmit(data) {
    const baseUrl = "http://localhost:3000";
    setLoading(true);
    data.userId = userId;
    data.imageUrl = imageUrl;
    console.log(data);
    try {
      const response = await fetch(`${baseUrl}/api/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        setLoading(false);
        reset();
        setImageUrl("");
        toast.success("Course Created");
        const courseData = await response.json();
        setCurrentCourse(courseData);
        console.log(courseData);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Title */}
        <div className="sm:col-span-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
          >
            Course Title
          </label>
          <div className="mt-2">
            <input
              {...register("title", { required: true })}
              type="text"
              name="title"
              id="title"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
              placeholder="Type the Course title"
            />
            {errors.title && (
              <span className="text-sm text-red-600 ">
                Course title is required
              </span>
            )}
          </div>
        </div>
        {/* Price */}
        <div className="sm:col-span-2">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Price
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            name="price"
            id="price"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5  "
            placeholder="$2999"
            required=""
          />
          {errors.price && (
            <span className="text-sm text-red-600 ">
              Course price is required
            </span>
          )}
        </div>
        {/* Description */}
        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Course Description
          </label>
          <div className="mt-2">
            <textarea
              {...register("description", { required: true })}
              id="description"
              name="description"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
            {errors.title && (
              <span className="text-sm text-red-600 ">
                Course description is required
              </span>
            )}
          </div>
        </div>
        {/* Course Image */}

        {/* Upload thing */}
        <div className="col-span-full">
          <div className="flex justify-between items-center mb-4">
            <label
              htmlFor="course-image"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Course Image
            </label>
            {imageUrl && (
              <button
                onClick={() => setImageUrl("")}
                type="button"
                className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
              >
                <Pencil className="w-5 h-5" />
                <span>Change Image</span>
              </button>
            )}
          </div>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="course image"
              width={1000}
              height={667}
              className="w-full h-64 object-cover"
            />
          ) : (
            <UploadDropzone
              endpoint="courseImageUploader"
              onClientUploadComplete={(res) => {
                setImageUrl(res[0].fileUrl);
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          )}
        </div>
        {/* IsPublished */}
        <div className="w-full">
          <h2 className="text-slate-900">Publish the Course</h2>
        </div>
        <div className="w-full">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              {...register("isPublished")}
              type="checkbox"
              defaultValue={true}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {isPublished ? "Published" : "Draft"}
            </span>
          </label>
        </div>
      </div>
      {loading ? (
        <button
          disabled
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Saving Course Please wait...
        </button>
      ) : (
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
        >
          <Plus className="w-5 h-5 mr-2" />
          <span>Save Course</span>
        </button>
      )}
    </form>
  );
}
