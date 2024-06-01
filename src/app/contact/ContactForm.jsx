"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

const formFields = [
  {
    name: "name",
    label: "Name *",
    type: "text",
    placeholder: "John Doe",
    required: true,
  },
  {
    name: "email",
    label: "Email *",
    type: "email",
    placeholder: "john@email.com",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "(123) 456-789",
    required: false,
  },
  {
    name: "message",
    label: "Message *",
    type: "textarea",
    placeholder: "Message",
    required: true,
  },
];

const colorMapper = {
  error: "red",
  success: "green",
  neutral: "dark",
};

function ContactForm() {
  const [result, setResult] = useState();
  const [color, setColor] = useState("neutral");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending your message. Hang tight....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_EMAIL_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setColor("success");
      setResult("Form submitted successfully. We will be in touch shortly!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setColor("error");
      setResult("Unable to submit form!");
    }
  };

  return (
    <>
      {/* Contact form card */}
      <div className="w-full mt-12 lg:mt-0">
        <div className="w-full px-4 py-12 mx-auto shadow-xl rounded-3xl lg:mr-0 lg:ml-auto bg-dark-700 sm:p-16 lg:p-14 xl:p-16">
          {/* Contact form */}
          <form onSubmit={handleSubmit}>
            {formFields.map((field, index) => (
              <div
                key={`contact-form-field-${index}}`}
                className={clsx(index > 0 && "mt-6")}
              >
                <label
                  htmlFor={field.name}
                  className="ml-0.5 text-dark-300 font-medium text-sm"
                >
                  {field.label}
                </label>

                {field.type == "textarea" && (
                  <textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={5}
                    className="w-full p-4 mt-2 text-sm font-medium text-white transition duration-200 ease-in-out border-2 border-solid outline-none rounded-2xl bg-dark-800 border-dark-800 focus:border-dark-600 focus:outline-none"
                    required={field.required}
                  />
                )}

                {["text", "email"].includes(field.type) && (
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full p-4 mt-2 text-sm font-medium text-white transition duration-200 ease-in-out border-2 border-solid outline-none h-14 rounded-2xl bg-dark-800 border-dark-800 focus:border-dark-600 focus:outline-none"
                    required={field.required}
                  />
                )}
              </div>
            ))}

            <div className="flex justify-start mt-6">
              <PrimaryButton type="submit">Send message</PrimaryButton>
            </div>

            <p
              className={`max-w-lg mx-auto mt-3 text-sm md:mt-5 sm:max-w-2xl text-${colorMapper[color]}-300 h-1`}
            >
              {result}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
