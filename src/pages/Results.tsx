import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TrophyIcon, HomeIcon, RefreshCwIcon } from 'lucide-react';
export function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    score,
    total,
    quizTitle
  } = location.state || {
    score: 0,
    total: 0,
    quizTitle: 'Quiz'
  };
  const percentage = Math.round(score / total * 100);
  const getMessage = () => {
    if (percentage >= 80) return {
      text: 'Excellent work!',
      emoji: '🎉',
      color: 'text-green-600'
    };
    if (percentage >= 60) return {
      text: 'Great job!',
      emoji: '👍',
      color: 'text-blue-600'
    };
    if (percentage >= 40) return {
      text: 'Good effort!',
      emoji: '💪',
      color: 'text-yellow-600'
    };
    return {
      text: 'Keep practicing!',
      emoji: '📚',
      color: 'text-orange-600'
    };
  };
  const message = getMessage();
  return <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          {/* Trophy Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-full">
              <TrophyIcon className="w-16 h-16 text-white" />
            </div>
          </div>
          {/* Results */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Quiz Complete!
          </h1>
          <p className="text-gray-600 mb-8">{quizTitle}</p>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold text-gray-800 mb-2">
              {score}/{total}
            </div>
            <div className="text-2xl font-semibold text-gray-600 mb-4">
              {percentage}%
            </div>
            <div className={`text-3xl mb-2`}>{message.emoji}</div>
            <div className={`text-xl font-bold ${message.color}`}>
              {message.text}
            </div>
          </div>
          {/* Action Buttons */}
          <div className="space-y-3">
            <button onClick={() => navigate('/dashboard')} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
              <HomeIcon className="w-5 h-5" />
              Back to Dashboard
            </button>
            <button onClick={() => navigate(-2)} className="w-full bg-white text-gray-700 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 border-2 border-gray-200">
              <RefreshCwIcon className="w-5 h-5" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>;
}
