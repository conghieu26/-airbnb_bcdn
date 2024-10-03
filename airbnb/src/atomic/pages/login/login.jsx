import React from "react";
import IconApple from "../../../assets/icon/iconApple/index";
import IconGoogle from "../../../assets/icon/iconGoogle/index";

function Login() {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[52rem] bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-semibold text-white mb-6">Welcome back</h1>
        <p className="text-gray-400 mb-6">
          Start your website in seconds. Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up.
          </a>
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-400 text-2xl font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-2xl font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:ring-blue-500 focus:border-blue-500 text-[1.50rem]"
            />
          </div>

          <div className="flex items-center justify-between ">
            <hr className="w-full border-gray-600" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="w-full border-gray-600" />
          </div>
          <div className="flex flex-row gap-3 space-y-4">
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
              className="w-full py-3 bg-slate-800 text-gray-700 rounded-lg hover:bg-slate-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-600"
            >
              <div className="flex items-center justify-center gap-2 pr-[0.99rem] ">
                <IconApple />
                <p className="text-slate-500">Sign in with Apple</p>
              </div>
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 text-blue-500 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign in to your account
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
