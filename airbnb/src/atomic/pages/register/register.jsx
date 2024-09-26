import React from "react";
import IconApple from "../../../assets/logo/iconApple/index";
import IconGoogle from "../../../assets/logo/iconGoogle/index";

function Register() {
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
        <form className="space-y-6">
          <div className="flex flex-row gap-4">
            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Account
              </label>
              <input
                type="text"
                placeholder="Nhập tài khoản"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
              />
            </div>

            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
              />
            </div>

            <div className="w-[50%]">
              <label className="block text-gray-400 text-2xl font-medium mb-2">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="0123456789"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
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
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
              />
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
                Điều khoản sử dụng
              </a>{" "}
              và{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Chính sách bảo mật
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
