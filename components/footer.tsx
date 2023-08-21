import React from "react";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; {year} Dan Rossano. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this webiste:</span> built with
        React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
