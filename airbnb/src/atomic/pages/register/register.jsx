import React from "react";
import IconApple from "../../../assets/logo/iconApple/index";
import IconGoogle from "../../../assets/logo/iconGoogle/index";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
   const formik = useFormik({
     initialValues: {
       name: "",
       email: "",
       password: "",
       confirmPassword: "",
       phone: "",
       birthday: "",
       gender: "true",
       agreeTerms: false,
     },
     validationSchema: Yup.object({
       name: Yup.string().required("Name is required"),
       email: Yup.string()
         .email("Invalid email address")
         .required("Email is required"),
       password: Yup.string()
         .min(6, "Password must be at least 6 characters")
         .required("Password is required"),
       confirmPassword: Yup.string()
         .oneOf([Yup.ref("password"), null], "Passwords must match")
         .required("Confirm password is required"),
       phone: Yup.string().required("Phone number is required"),
       birthday: Yup.date().required("Birthday is required"),
       agreeTerms: Yup.boolean().oneOf(
         [true],
         "You must accept the terms and conditions",
       ),
     }),
     onSubmit: (values) => {
       console.log("Form data", values);
       // Handle form submission, e.g., send data to API
     },
   });

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-[52rem] bg-gray-800 p-8 rounded-lg shadow-lg">
        <div>
          <button></button>
          <h1 className="text-5xl font-semibold text-white mb-6">
            Create your Account
          </h1>
        </div>
        <p className="text-gray-400 mb-6">
          Start your website in second. Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Login here.
          </a>
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-row gap-4">
            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
              />
            </div>

            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
              />
            </div>

            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="0123456789"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Birthday
              </label>
              <input
                type="date"
                name="birthday"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
                value={formData.birthday}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-[100%]">
            <label className="block text-gray-400 text-2xl font-medium mb-2">
              Gender
            </label>
            <div className="flex items-center">
              <div className="w-[100%]">
                <select
                  name="gender"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="true">Male</option>
                  <option value="false">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <hr className="w-full border-gray-600" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="w-full border-gray-600" />
          </div>
          <div className="flex flex-row gap-3 space-y-4 ">
            <button
              type="button"
              className="w-full py-3 bg-slate-800 text-gray-700 rounded-lg hover:bg-slate-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-600 mt-[10px]"
            >
              <div className="flex items-center justify-center gap-2 ">
                <IconGoogle />
                <p className="text-slate-500">Sign in with Google</p>
              </div>
            </button>
            <button
              type="button"
              className="w-full py-3 bg-slate-800 text-gray-700 rounded-lg hover:bg-slate-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-600 "
            >
              <div className="flex items-center justify-center gap-2 pr-[0.99rem] ">
                <IconApple />
                <p className="text-slate-500">Sign in with Apple</p>
              </div>
            </button>
          </div>
          <div className="flex items-center ">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-offset-gray-800 "
            />
            <label className="ml-2 text-2xl text-gray-400 text-[1.50rem] ">
              I agree{" "}
              <a href="#" className="text-blue-500 hover:underline ">
                Terms of Use
              </a>{" "}
              và{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
