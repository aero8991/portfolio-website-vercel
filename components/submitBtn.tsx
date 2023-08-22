import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex items-center justify-center h-[3rem] w-[8rem] text-white bg-gray-900 px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition disabled:scale-100 disabled:bg-opacity-60 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="opacity-70 text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </>
      )}
    </button>
  );
}
