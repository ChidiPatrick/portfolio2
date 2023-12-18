import React, { useRef } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const emailRef = useRef();

  /// Contact email handler
  const emailJsHandler = async () => {
    // e.preventDefault();
    console.log(emailRef.current.value);
    emailjs
      .sendForm(
        `service_spibf6m`,
        `template_5sv0qip`,
        form.current,
        "hJrq-qB3bDT-ypNYr"
      )
      .then(
        (response) => {
          emailRef.current.value = "";
          messageRef.current.value = "";
          nameRef.current.value = "";
        },
        (error) => console.log(error)
      );
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string().required("message can not be empty"),
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
      id="contact_me"
      className="min-h-[300px] border bg-port-primary sl:bg-black   py-2 w-full text-port-gray  border-port-gray border-opacity-10 rounded-xl sl:w-[80%]  sl:mx-auto"
    >
      <h2 className="w-full sl:w-[80%] sl:mx-auto  text-center my-[10px] font-bold text-2xl">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={formik.handleSubmit}
        className="w-[90%] my-0 mx-auto  sl:mx-auto sl:bg-port-primary sl:w-[80%] sl:mx-auto border-port-gray border-opacity-10 rounded-xl p-[20px]"
      >
        <div className="w-full flex flex-col justify-between my-4">
          <label htmlFor="name" className="w-[20%] p-1 mb-[10px]">
            Name:
          </label>
          <input
            className="bg-black p-1 w-[100%] outline-none border border-black focus:border-port-pink rounded-xl"
            type="text "
            id="user_name"
            placeholder="Your name"
            name="user_name"
            value={formik.values.user_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            ref={nameRef}
          />
        </div>
        {formik.errors.user_name ? (
          <div className="text-red-800">{formik.errors.user_name}</div>
        ) : null}

        <div
          className="w-full flex flex-col justify-between my-4"
          htmlFor="userEmail"
        >
          <label className="w-[20%] p-1 mb-[10px] ">Email: </label>
          <input
            className="bg-black p-1 w-[100%] outline-none border border-black focus:border-port-pink rounded-xl"
            type="email"
            id="user_email"
            placeholder="your email"
            name="user_email"
            value={formik.values.user_email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            ref={emailRef}
          />
        </div>
        {formik.errors.email ? (
          <div className="text-red-800">{formik.errors.user_email}</div>
        ) : null}

        <div
          className="w-full flex flex-col items-start justify-between my-4"
          htmlFor="message"
        >
          <div className=" p-1 mr-2 mb-[10px]">Message:</div>
          <textarea
            className="bg-black p-1 w-[100%] outline-none border border-port-gray focus:border-port-pink rounded-xl"
            type="text"
            id="message"
            placeholder="Your message"
            name="message"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            ref={messageRef}
          ></textarea>
          {formik.errors.email ? (
            <div className="text-red-800">{formik.errors.message}</div>
          ) : null}
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
