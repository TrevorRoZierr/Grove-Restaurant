"use client";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const JobPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_aupvdpa",
          "template_b4jtgcg",
          form.current,
          "Hrk3myk-4GMixpPl7"
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h2 className="text-center font-unbounded font-semibold text-sm lg:text-2xl capitalize lg:mt-10 lg:mb-20 mb-10 mt-32  tracking-wide">
        We Will get in touch once we verify your application
      </h2>
      <form ref={form} onSubmit={sendEmail} autoComplete="off">
        <label>Name:</label>
        <input
          type="text"
          name="user_name"
          className="border-[1px] border-b-black"
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="user_email"
          className="border-[1px] border-b-black"
        />
        <br />
        <br />
        <label>Phone:</label>
        <input
          type="number"
          name="user_no"
          className="border-[1px] border-b-black"
        />
        <br />
        <br />
        <input
          type="submit"
          value="Send"
          className="mt-3 lg:mt-5 bg-black text-[#e7e7e7] lg:px-7 lg:py-2 px-5 py-1 cursor-pointer"
          onClick={() => alert("Your Application has been sent successfully.")}
        />
      </form>
      <Link
        href="/"
        className="capitalize underline text-sm lg:text-md text-center mt-10 cursor-pointer"
      >
        Back to the home page
      </Link>
    </div>
  );
};

export default JobPage;
