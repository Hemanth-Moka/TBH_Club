import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null); // success or error message
  const [messageType, setMessageType] = useState(''); // 'success' | 'error'
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // reset message

    try {
      const res = await axios.post('https://backend-tbh.onrender.com/login', {
        email,
        password,
      });

      setMessage(res.data.message);
      setMessageType('success');

      localStorage.setItem('adminLoggedIn', 'true');

      setTimeout(() => {
        navigate('/');
      }, 1500); // delay for animation
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
      setMessageType('error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl">

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md p-10 shadow-lg relative">
          <div className="mb-8 text-center">
            <h1 className="mt-10 text-3xl font-bold text-violet-500">Welcome Back</h1>
            <p className="mt-3 text-gray-400 text-sm">Login to your account Only For Admins</p>
          </div>

          {/* Animated Login Message */}
          {message && (
            <div
              className={`mb-6 px-4 py-3 rounded-lg animate-fade-in-down transition-all text-sm font-medium ${
                messageType === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-red-600 text-white'
              }`}
            >
              {message}
            </div>
          )}

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg bg-[#1a1a1a] border border-violet-500/30 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg bg-[#1a1a1a] border border-violet-500/30 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="text-sm text-violet-400 hover:underline">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-violet-500/30"
          >
            Sign In
          </button>

          {/* Signup Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="/join_us" className="text-violet-400 hover:underline">Join Us</a>
          </p>
        </form>

        {/* Logo Section */}
        <div className="hidden lg:flex justify-center items-center w-full max-w-md mt-15 lg:mt-22">
          <img
            src="/TBH_logo.png"
            alt="The Blockchain Hub Logo"
            className="w-80 h-auto opacity-90 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes fade-in-down {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
}
