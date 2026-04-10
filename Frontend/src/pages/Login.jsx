import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setToken } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login success
    setToken(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Illustration (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.01] pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-xl text-center relative z-10">
          <img 
            src="/auth-illustration.png" 
            alt="Welcome Back" 
            className="w-full h-auto mb-0  transform hover:scale-[1.02] transition-all duration-700 hover:rotate-1"
          />
          <h1 className="text-4xl font-extrabold text-[#0f172a] mb-4 tracking-tight mt-0">
            Welcome Back to<br />SkillTrix <span className="inline-block animate-bounce">✨</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium">Log in to keep track of your progress and start where you left off.</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-extrabold text-[#0f172a] mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-gray-500 font-medium text-sm">Please enter your credentials to access your account.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="relative group">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-bold text-gray-500 group-focus-within:text-indigo-600 transition-colors z-10">
                Email Address
              </label>
              <div className="flex items-center border-2 border-gray-100 group-focus-within:border-indigo-600 rounded-2xl px-4 py-4 transition-all duration-300 bg-white shadow-sm group-hover:shadow-md">
                <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors mr-3" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full focus:outline-none text-gray-700 font-medium placeholder:text-gray-300"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <div className="absolute -top-2.5 left-4 bg-white px-2 flex justify-between w-[92%] z-10">
                <label className="text-xs font-bold text-gray-500 group-focus-within:text-indigo-600 transition-colors">
                  Password
                </label>
                <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">Forgot?</a>
              </div>
              <div className="flex items-center border-2 border-gray-100 group-focus-within:border-indigo-600 rounded-2xl px-4 py-4 transition-all duration-300 bg-white shadow-sm group-hover:shadow-md">
                <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors mr-3" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full focus:outline-none text-gray-700 font-medium placeholder:text-gray-300"
                  required
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-indigo-600 transition-colors font-bold text-xs uppercase cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer text-center flex justify-center items-center gap-2">
              Sign In <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-500 font-medium text-sm">
              Don't have an account? {' '}
              <Link to="/signup" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
