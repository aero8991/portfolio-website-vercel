"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("running on server!");

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("TextArea");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(message, 4000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "dannyboy.rossano@gmail.com",
      subject: " Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
      // react: <ContactFormEmail message={message} senderEmail={senderEmail} /> if this was a tsx file :)
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data
  }
};
