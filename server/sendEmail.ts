"use server" //😊🖥️ server-side server/sendEmail.ts
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Ensure extracted values are strings
  if (
    typeof senderName !== "string" ||
    typeof senderEmail !== "string" ||
    typeof message !== "string"
  ) {
    return {
      error: "Invalid form data",
    };
  }

  // Validate strings
  if (!validateString(senderName, 100)) {
    return { error: "Invalid sender name" };
  }
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email address" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;

  try {
    data =   await resend.emails.send({
      from: "Contact Form<onboarding@resend.dev>",
      to: "ethdid79003@stud.noroff.no",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderName,
        senderEmail,
        message,
      }),
    });

    return { success: true };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data
  }
};


