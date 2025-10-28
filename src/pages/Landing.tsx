import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuitIcon, SparklesIcon } from 'lucide-react';
export function Landing() {
  const navigate = useNavigate();
  return <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-3xl shadow-xl">
            <BrainCircuitIcon className="w-16 h-16 text-white" />
          </div>
        </div>
        {/* App Name */}
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-3">QuizMaster</h1>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
            <SparklesIcon className="w-5 h-5 text-purple-500" />
            <p>Test your knowledge anytime, anywhere!</p>
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="space-y-4 pt-4">
          <button onClick={() => navigate('/login')} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-lg">
            Login
          </button>
          <button onClick={() => navigate('/signup')} className="w-full bg-white text-gray-800 font-semibold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 text-lg border-2 border-gray-200">
            Sign Up
          </button>
        </div>
        {/* Demo Access */}
        <button onClick={() => navigate('/dashboard')} className="text-purple-600 font-medium hover:underline text-base">
          Continue as Guest →
        </button>
      </div>
    </div>;
}
