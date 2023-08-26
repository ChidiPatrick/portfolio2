import React, { useRef } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef();

  /// Contact email handler
  const emailJsHandler = async (e) => {
    // e.preventDefault();

    console.log("Email handler called");

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form,
        process.env.PUBLIC_KEY
      )
      .then(
        (response) => console.log(response),
        (error) => console.log(`Error: ${error}`)
      );
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Submit called");
      emailJsHandler();
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: "100%" }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="min-h-[300px] border  py-2 w-full text-port-gray bg-port-primary border-port-gray border-opacity-10 rounded-xl"
    >
      <h2 className="w-full text-center my-[10px] font-bold text-2xl">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={formik.handleSubmit}
        className="w-[90%] my-0 mx-auto"
      >
        <div className="w-full flex justify-between my-4">
          <label htmlFor="name" className="w-[20%] p-1">
            Name:
          </label>
          <input
            className="bg-black p-1 w-[80%] outline-none border border-black focus:border-port-pink rounded-xl"
            type="text "
            id="name"
            placeholder="Your name"
            name="user_name"
            value={formik.values.user_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.name ? (
          <div className="text-red-800">{formik.errors.name}</div>
        ) : null}

        <div className="w-full flex justify-between my-4" htmlFor="userEmail">
          <label className="w-[20%] p-1 ">Email: </label>
          <input
            className="bg-black p-1 w-[80%] outline-none border border-black focus:border-port-pink rounded-xl"
            type="email"
            id="userEmail"
            placeholder="your email"
            name="user_email"
            value={formik.values.user_email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.email ? (
          <div className="text-red-800">{formik.errors.email}</div>
        ) : null}

        <div
          className="w-full flex items-center justify-between my-4"
          htmlFor="message"
        >
          <div className=" p-1 mr-2">Message:</div>
          <textarea
            className="bg-black p-1 w-[80%] outline-none border border-port-gray focus:border-port-pink rounded-xl"
            type="text"
            id="message"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="w-full flex justify-center items-center mt-10 mb-5">
          <button
            type="submit"
            className="w-[200px] p-2 border rounded-xl text-white border-port-pink hover:bg-port-pink "
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default ContactMe;
