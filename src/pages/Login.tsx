import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, MailIcon, LockIcon } from 'lucide-react';
export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return <div className="min-h-screen flex flex-col px-6 py-8">
      {/* Back Button */}
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8">
        <ArrowLeftIcon className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </button>
      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome Back!
            </h2>
            <p className="text-gray-600">
              Login to continue your learning journey
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <MailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-base" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <LockIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-base" required />
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-lg">
              Login
            </button>
          </form>
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button onClick={() => navigate('/signup')} className="text-blue-600 font-semibold hover:underline">
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>;
}
