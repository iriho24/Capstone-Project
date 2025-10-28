import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClockIcon, ArrowRightIcon } from 'lucide-react';
interface QuizCardProps {
  quiz: {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    questions: number;
  };
}
export function QuizCard({
  quiz
}: QuizCardProps) {
  const navigate = useNavigate();
  const Icon = quiz.icon;
  return <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className={`bg-gradient-to-br ${quiz.color} p-4 rounded-xl`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {quiz.title}
            </h3>
            <p className="text-gray-600 mb-3">{quiz.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ClockIcon className="w-4 h-4" />
              <span>
                {quiz.questions} questions • ~{Math.ceil(quiz.questions * 1.5)}{' '}
                mins
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <button onClick={() => navigate(`/quiz/${quiz.id}`)} className={`w-full bg-gradient-to-r ${quiz.color} text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2`}>
          Start Quiz
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>;
}
