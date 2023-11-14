"use client";
import { createPost } from "@/lib/actions";
import { useFormStatus, useFormState } from "react-dom";
import { useRef } from "react";

export function CreatePost() {
  const ref = useRef(null);
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createPost, {
    filename: "",
    content: "",
  });

  return (
    <form
      action={async (formData) => {
        await formAction(formData);
        ref.current?.reset();
      }}
      className="p-6 bg-white rounded-lg shadow space-y-4 max-w-md"
      ref={ref}
    >
      <div>
        <label
          htmlFor="filename"
          className="block text-sm font-medium text-gray-700 "
        >
          Filename
        </label>
        <input
          name="filename"
          className="mt-1 block w-full p-2 border border-gray-300  rounded-md shadow-sm text-gray-900"
          type="text"
        />
      </div>
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 "
        >
          Content
        </label>
        <textarea
          name="content"
          rows="3"
          className="mt-1 block w-full p-2 border border-gray-300  rounded-md shadow-sm text-gray-900"
        ></textarea>
      </div>
      <div>
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-black text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-htmlForeground hover:bg-primary/90 h-10 px-4 py-2 w-full text-center"
          type="submit"
        >
          {pending ? "Creating..." : "Create"}
        </button>
      </div>
      {state?.error && (
        <div className="text-red-500 text-sm">{state.error}</div>
      )}
    </form>
  );
}
