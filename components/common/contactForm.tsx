import React, { FormEvent, forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = forwardRef<HTMLDivElement>((props, ref) => {
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
          "OorxMvIU_5WpoP7uk"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setSuccessMessage("Email sent successfully!");
          },
          (error) => {
            console.error("FAILED...", error.text);
            setErrorMessage("Failed to send email. Please try again later.");
          }
        );
    }
  };

  return (
    <div ref={ref} {...props} className="">
   
      <div className="flex flex-col md:flex-row  p-4 md:p-6 lg:p-8">
        <div className="md:w-1/2  p-4 md:p-6 lg:p-8 mb-4 md:mb-0">
          <p className="text-6xl  pb-10 text-white md:text-2xl lg:text-6xl font-bold">Let’s Work Together!</p>
          <p className="text-xl text-white md:text-2xl lg:text-xl font-regular">We specialize in smart functionality and customization, ensuring that every solution we create is as unique and innovative as your vision.</p>
        </div>
        <div className="md:w-1/2  p-4 md:p-6 lg:p-8">
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg mx-auto">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="block bg-black w-full p-2 border-b border-gray-300 rounded-none text-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                  type="email"
                  name="reply_to"
                  className="block bg-black w-full p-2 border-b border-gray-300 rounded-none text-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Organization</label>
                <input
                  type="text"
                  name="organization"
                  className="block bg-black w-full p-2 border-b border-gray-300 rounded-none text-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
  <label className="block text-sm font-medium text-white mb-1">Service</label>
  <select
    name="service"
    className="block bg-black w-full p-2 border-b border-gray-300 rounded-none text-white text-sm focus:ring-black focus:border-black hover:bg-black"
    required
  >
    <option className="text-white" value="">
      Select a service
    </option>
    <option className="text-white" value="Service 1">
      Product Design and Development
    </option>
    <option value="Service 2">Embedded Hardware and Software</option>
    <option value="Service 3">Website/App Design and Development</option>
    <option value="Service 4">Prototype</option>
  </select>
</div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Message</label>
                <textarea
                  name="message"
                  className="block  bg-black w-full p-2 border-b border-gray-300 rounded-none text-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="text-right mt-4">
              <button
                type="submit"
                className="bg-white text-black py-2 px-16 text-base rounded hover:bg-black hover:text-white border-2 border-white font-semibold"
              >
                Submit
              </button>
            </div>
            {successMessage && (
              <p className="mt-4 text-green-600 text-center text-sm">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-600 text-center text-sm">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
});

ContactForm.displayName = 'ContactForm';
