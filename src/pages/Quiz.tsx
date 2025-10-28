import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ClockIcon, XIcon } from 'lucide-react';
const quizData = {
  ict: {
    title: 'ICT Test',
    questions: [{
      question: 'What does CPU stand for?',
      options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Computer Processing Unit'],
      correct: 0
    }, {
      question: 'Which of these is an input device?',
      options: ['Monitor', 'Printer', 'Keyboard', 'Speaker'],
      correct: 2
    }, {
      question: 'What is the brain of the computer?',
      options: ['Hard Drive', 'RAM', 'CPU', 'Motherboard'],
      correct: 2
    }]
  },
  driving: {
    title: 'Driving Test',
    questions: [{
      question: 'What does a red traffic light mean?',
      options: ['Slow down', 'Stop', 'Go', 'Caution'],
      correct: 1
    }, {
      question: 'What is the speed limit in a school zone?',
      options: ['20 mph', '25 mph', '30 mph', '35 mph'],
      correct: 0
    }, {
      question: 'When should you use your turn signal?',
      options: ['Only when turning left', 'Only when turning right', 'Before any turn or lane change', 'Only on highways'],
      correct: 2
    }]
  },
  math: {
    title: 'Math Test',
    questions: [{
      question: 'What is 15 + 27?',
      options: ['42', '41', '43', '40'],
      correct: 0
    }, {
      question: 'What is 8 × 7?',
      options: ['54', '56', '58', '60'],
      correct: 1
    }, {
      question: 'What is 100 ÷ 4?',
      options: ['20', '25', '30', '35'],
      correct: 1
    }]
  }
};
export function Quiz() {
  const navigate = useNavigate();
  const {
    quizId
  } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const quiz = quizData[quizId as keyof typeof quizData];
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleFinish = () => {
    navigate('/results', {
      state: {
        score,
        total: quiz.questions.length,
        quizTitle: quiz.title
      }
    });
  };
  const handleNext = () => {
    if (selectedAnswer === quiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      handleFinish();
    }
  };
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-blue-700">
                Question {currentQuestion + 1}/{quiz.questions.length}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-lg">
              <ClockIcon className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">
                {minutes}:{seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <XIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              {quiz.questions[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {quiz.questions[currentQuestion].options.map((option, index) => <button key={index} onClick={() => setSelectedAnswer(index)} className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 text-lg font-medium ${selectedAnswer === index ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}>
                  <span className="inline-block w-8 h-8 rounded-lg bg-gray-100 text-center leading-8 mr-3 font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>)}
            </div>
            <button onClick={handleNext} disabled={selectedAnswer === null} className={`w-full mt-8 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${selectedAnswer !== null ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
              {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      </div>
    </div>;
}
