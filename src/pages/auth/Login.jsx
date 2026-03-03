import { FcGoogle } from "react-icons/fc";
import pattern from '../../assets/pattern.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Google Sign-In Successful!',
          text: `Welcome, ${result.user.displayName}!`,
          timer: 2000,
          showConfirmButton: false,
        });
        const from = location.state?.from || '/';
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Google Sign-In Failed!',
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen bg-[#F8F8FD] flex items-center justify-center epilogue mb-10">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2  bg-white shadow-xl">

        <div className="bg-[#4640DE] relative text-white p-12 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold clashDisplay leading-tight">
              Build.<br />Ship.<br />Grow.
            </h1>
            <p className="mt-6 text-lg rhd text-white max-w-lg">
              Access your dashboard to manage applications, roles, and system
              workflows with precision.
            </p>
          </div>

          <img
            src={pattern}
            alt=""
            className="absolute bottom-0 right-0 w-72 h-full object-cover opacity-20 pointer-events-none select-none"
          />

          <div className="relative z-10 text-sm rhd text-white/60">
            © {new Date().getFullYear()} QuickHire.
          </div>
        </div>

        <div className="p-12 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 clashDisplay">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 rhd mt-2">
              Sign in to continue to your workspace
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-600 rhd mb-2">
                Email Address
              </label>
              <input
                type="email" onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#4640DE]"
                placeholder="you@example.com" required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-600 rhd mb-2">
                Password
              </label>
              <input
                type="password" onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#4640DE]"
                placeholder="••••••••" required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4640DE] text-white py-3 font-semibold tracking-wide hover:bg-[#3a36b8] transition"
            >
              LOGIN
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-xs text-gray-400 rhd">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button onClick={handleGoogleSignIn} className="w-full border border-gray-300 py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition">
            <FcGoogle size={22} />
            <span className="rhd text-lg font-medium">
              Continue with Google
            </span>
          </button>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <button className="bg-[#202430] text-white py-3 font-semibold hover:bg-[#474950] transition">
              Admin Login
            </button>
            <button className="bg-[#202430] text-white py-3 font-semibold hover:bg-[#474950] transition">
              Applicant Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;