import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null); // Reset success message before sending email
    setErrorMessage(null); // Reset error message before sending email

    if (form.current) {
      console.log("Sending email..."); // Log sending start
      emailjs
        .sendForm(
          "service_d0p0euv",
          "template_dx08bgc",
          form.current,
          "OorxMvIU_5WpoP7uk",
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setSuccessMessage("Email sent successfully!");
          },
          (error) => {
            console.error("FAILED...", error.text);
            setErrorMessage("Failed to send email. Please try again later.");
          },
        );
    }
  };

  return (
    <div>
      {
        <div className="text-left mb-10">
          <h2 className="text-2xl font-bold">Let's Work Together!</h2>
          <p className="text-xl text-black-600 pr-20">
            We specialize in smart functionality and customization, ensuring
            that every solution we create is as unique and innovative as your
            vision.
          </p>
          <p className="text-lg font-semibold mt-2 pt-5">+91 7720076457</p>
        </div>
      }
      <div className="flex h-screen border border-gray-300 p-6 ">
        <div className="w-1/2 bg-white p-6">
          <div className="text-left mb-10">
            <h2 className="text-3xl font-bold pr-20">
              Would you like to discuss some ideas?
            </h2>
          </div>
        </div>
        <div className="w-1/2 bg-white p-6 flex items-top justify-center">
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-md">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="block w-full h-7 p-2 border-b border-gray-300 rounded-none text-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  className="block w-full h-7 p-2 border-b border-gray-300 rounded-none text-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  className="block w-full h-7 p-2 border-b border-gray-300 rounded-none text-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <select
                  name="service"
                  className="block w-full h-7 p-2 border-b border-gray-300 rounded-none text-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                 <option value="option"></option>
                  <option value="Service 1">Kequel</option>
                  <option value="Service 2">DLVR</option>
                  <option value="Service 3">Drone Sports India</option>
                  <option value="Service 4">Delta Robotics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  className="block w-full h-8 p-2 border-b border-gray-300 rounded-none text-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="pl-80">
            <button 
              type="submit"
              className="mt-4 pl-10 pr-10 py-2 bg-black rounded-2xl text-white text-sm font-medium hover:bg-black focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
            </div>
            {successMessage && (
              <p className="mt-4 text-green-600 text-center text-sm">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-600 text-center text-sm">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
