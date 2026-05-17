import { useState } from "react";

const quizQuestions = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Git"],
    answer: "CSS",
  },
  {
    question: "Which React hook is commonly used for state?",
    options: ["useState", "useStyle", "useHTML", "useRoute"],
    answer: "useState",
  },
  {
    question: "What does responsive design mean?",
    options: [
      "Website works only on desktop",
      "Website adapts to different screen sizes",
      "Website has no CSS",
      "Website loads without JavaScript",
    ],
    answer: "Website adapts to different screen sizes",
  },
];

function QuizBox() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizQuestions[currentQuestion];

  function handleNextQuestion() {
    if (!selectedOption) {
      alert("Please select an answer first.");
      return;
    }

    if (selectedOption === question.answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption("");
    } else {
      setIsFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setIsFinished(false);
  }

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white">
        Frontend Quiz
      </h2>

      {!isFinished ? (
        <div className="mt-4">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>

          <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">
            {question.question}
          </h3>

          <div className="mt-4 space-y-2">
            {question.options.map((option) => (
              <label
                key={option}
                className={`block cursor-pointer rounded-xl border p-3 text-sm transition ${
                  selectedOption === option
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                <input
                  type="radio"
                  name="quiz"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            className="mt-4 w-full rounded-xl bg-indigo-600 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Next
          </button>
        </div>
      ) : (
        <div className="mt-4 rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Your Score: {score}/{quizQuestions.length}
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Good job! You completed the quiz.
          </p>

          <button
            onClick={restartQuiz}
            className="mt-4 rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      )}
    </section>
  );
}

export default QuizBox;
