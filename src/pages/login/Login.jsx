import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F8FD] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-[#4640DE]">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500">
          Login to your account to continue
        </p>

        {/* Login Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
          />
          <button
            type="submit"
            className="w-full bg-[#4640DE] text-white py-3 rounded-lg font-semibold hover:bg-[#3a36b8] transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2">
          <span className="border-b w-1/4 border-gray-300"></span>
          <span className="text-gray-400 text-sm">OR</span>
          <span className="border-b w-1/4 border-gray-300"></span>
        </div>

        {/* Login with Google */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
          <FcGoogle size={24} /> Login with Google
        </button>

        {/* Role Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex-1 bg-[#26A4FF] text-white py-3 rounded-lg font-semibold hover:bg-[#1f88d9] transition">
            Login as Admin
          </button>
          <button className="flex-1 bg-[#56CDAD] text-white py-3 rounded-lg font-semibold hover:bg-[#3aa98d] transition">
            Login as Applicant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;