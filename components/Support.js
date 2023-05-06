import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";

export const Support = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y7qkf73",
        "template_wz5kfw7",
        form.current,
        "5b6VD_ATeTFulk311"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Element name="support" id="support">
      <main className="flex flex-col mt-10 space-y-4">
        <span className="text-3xl font-extrabold text-center text-gray-700">
          <span>Contact Support</span>
        </span>{" "}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col px-6 space-y-4"
        >
          <div className="flex flex-col items-start">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full border-[2px] border-gray-300 rounded-lg h-10 outline-none px-2 p-1"
              placeholder="e.g. John Doe"
            />
          </div>
          <div className="flex flex-col items-start">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full border-[2px] border-gray-300 rounded-lg h-10 outline-none px-2 p-1"
              placeholder="e.g. johndoe@example.com"
            />
          </div>
          <div className="flex flex-col items-start">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full border-[2px] border-gray-300 rounded-lg resize-none outline-none px-2 p-1"
              placeholder="e.g. what is my luggage tracking ID"
            />
          </div>
          <input
            type="submit"
            value="Send"
            className=" py-2 bg-orange-400 text-white font-bold rounded-lg active:scale-105 transition transform duration-300"
          />
        </form>
      </main>
    </Element>
  );
};
