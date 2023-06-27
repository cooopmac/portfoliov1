import { useState, useRef } from "react";
import React from "react";
import emailjs from "@emailjs/browser";
import Gradient from "rgt";

const ContactPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_t9929ze",
        "template_4y4bxp9",
        {
          from_name: form.name,
          to_name: "Cooper",
          from_email: form.email,
          to_email: "cooper.macgregor14@gmail.com",
          message: form.message,
        },
        "HavKou0GHURFCt3DI"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! You'll hear from me in the coming days.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <section className="relative w-full h-screen">
      <div className="flex justify-center pt-[100px]">
        <h1 className="text-[48px] font-bold text-white">Get In Touch.</h1>
      </div>
      <div className="shadow-md shadow-black/50 border border-[#94F3E4] flex flex-col rounded-lg p-5 mx-5 md:mx-40">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="my-12 flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className="bg-[#1A1A1B] border border-[#94F3E4] rounded-lg p-2 "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium my-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className="bg-[#1A1A1B] border border-[#94F3E4] rounded-lg p-2 "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium my-4">Your Message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what's your message?"
              className="bg-[#1A1A1B] border border-[#94F3E4] rounded-lg p-2 "
            />
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-12 px-4 py-2 border border-[#37AA9C] rounded-lg font-normal text-[18px] transition ease-in-out hover:bg-white/[.05]"
            >
              <Gradient dir="left-to-right" from="#37AA9C" to="#94F3E4">
                {loading ? "sending..." : "send message"}
              </Gradient>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
