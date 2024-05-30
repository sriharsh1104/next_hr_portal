"use client";
import React, { useState } from "react";
import "./login.css";
import Link from "next/link";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";


const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("*This field is required.")
      .max(300, "Maximum 300 characters are allowed for email.")
      .test("No-Consecutive-Dots", "Invalid Email", (value) => {
        if (!value) return true;
        return !/\.{2,}/.test(value);
      }),
    password: Yup.string().required("Please enter the password."),
  });
  const onSubmit = async (values: any) => {
    try {
      const loginDetails = {
        email: values?.email,
        password: values?.password,
      };
      console.log('loginDetails', loginDetails)
      // const result: any = await login(loginData);
      // if (result===200) {
      //   toast.success("Logged In SuccessFully");
      //   if (result?.status === 200) {
      //   }
      // }
    } catch (error) {

      console.error(error);
    }
  };

  
    return (
      <div className="login-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <p>
              Don’t have an account?{" "}
              <Link href="/signUp">
                {" "}
                <a color="black">Sign up</a>
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    );
  };

export default LoginPage;
