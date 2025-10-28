import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ComputerIcon, CarIcon, CalculatorIcon, TrophyIcon, UserIcon, LogOutIcon } from 'lucide-react';
import { QuizCard } from '../components/QuizCard';
export function Dashboard() {
  const navigate = useNavigate();
  const quizzes = [{
    id: 'ict',
    title: 'ICT Test',
    description: 'Test your computer knowledge',
    icon: ComputerIcon,
    color: 'from-blue-500 to-blue-600',
    questions: 10
  }, {
    id: 'driving',
    title: 'Driving Test',
    description: 'Road rules and safety',
    icon: CarIcon,
    color: 'from-green-500 to-green-600',
    questions: 15
  }, {
    id: 'math',
    title: 'Math Test',
    description: 'Basic mathematics quiz',
    icon: CalculatorIcon,
    color: 'from-purple-500 to-purple-600',
    questions: 12
  }];
  return <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">QuizMaster</h1>
            <p className="text-sm text-gray-600">Welcome back, Guest!</p>
          </div>
          <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <LogOutIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      {/* User Stats */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl">
              <UserIcon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">Your Progress</h2>
              <p className="text-gray-600">Keep up the great work!</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-600 mt-1">Quizzes Taken</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600">85%</div>
              <div className="text-sm text-gray-600 mt-1">Avg Score</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div className="text-sm text-gray-600 mt-1">Badges</div>
            </div>
          </div>
        </div>
        {/* Available Quizzes */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Available Quizzes
          </h2>
          <div className="space-y-4">
            {quizzes.map(quiz => <QuizCard key={quiz.id} quiz={quiz} />)}
          </div>
        </div>
        {/* Recent Achievement */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center gap-4">
            <TrophyIcon className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-bold">Quick Learner!</h3>
              <p className="text-sm opacity-90">
                You have completed 3 quizzes this week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
