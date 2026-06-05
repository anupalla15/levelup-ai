import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaMicrophone,
  FaBrain,
} from "react-icons/fa";

function Interview() {

  const questions = [
    "Explain the difference between REST APIs and GraphQL APIs.",
    "What is React Virtual DOM and why is it important?",
    "Explain asynchronous programming in JavaScript.",
    "What are the advantages of microservices architecture?",
    "Explain the difference between SQL and NoSQL databases."
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] = useState("");

  const [loading, setLoading] = useState(false);

  const nextQuestion = () => {

    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion(currentQuestion + 1);

      setAnswer("");

      setFeedback("");
    }
  };

  const analyzeAnswer = async () => {

    if (!answer) return;

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          answer: answer,
        }
      );

      setFeedback(response.data.feedback);

    } catch (error) {

      console.log(error);

      setFeedback("Error analyzing answer.");

    }

    setLoading(false);
  };

  return (

    <div className="min-h-screen bg-[#060816] text-white px-6 py-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">

            <FaRobot />

            <span>AI Adaptive Interview Engine</span>

          </div>

          <h1 className="text-6xl font-bold leading-tight">
            AI Mock Interview
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl">
            Practice intelligent AI-driven technical interviews with adaptive reasoning,
            personalized analysis, and developer-focused feedback.
          </p>

        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-md shadow-2xl"
        >

          {/* TOP INFO */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-black/30 border border-white/10 rounded-3xl p-6">

              <p className="text-gray-400 mb-3">
                Interview Domain
              </p>

              <h2 className="text-2xl font-semibold">
                Full Stack Development
              </h2>

            </div>

            <div className="bg-black/30 border border-white/10 rounded-3xl p-6">

              <p className="text-gray-400 mb-3">
                Difficulty Level
              </p>

              <h2 className="text-2xl font-semibold text-purple-400">
                Intermediate
              </h2>

            </div>

            <div className="bg-black/30 border border-white/10 rounded-3xl p-6">

              <p className="text-gray-400 mb-3">
                AI Confidence
              </p>

              <h2 className="text-2xl font-semibold text-blue-400">
                Adaptive
              </h2>

            </div>

          </div>

          {/* QUESTION */}
          <div className="mb-10">

            <div className="flex items-center gap-4 mb-5">

              <FaBrain className="text-3xl text-purple-400" />

              <h2 className="text-3xl font-semibold">
                Interview Question
              </h2>

            </div>

            <div className="bg-black/30 border border-white/10 rounded-3xl p-8 text-lg leading-relaxed">

              {questions[currentQuestion]}

            </div>

          </div>

          {/* ANSWER */}
          <div className="mb-10">

            <div className="flex items-center gap-4 mb-5">

              <FaMicrophone className="text-3xl text-blue-400" />

              <h2 className="text-3xl font-semibold">
                Your Answer
              </h2>

            </div>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your technical answer here..."
              className="w-full h-52 bg-black/30 border border-white/10 rounded-3xl p-6 text-white outline-none resize-none text-lg"
            ></textarea>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-5 flex-wrap">

            <button
              onClick={analyzeAnswer}
              className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-300 px-10 py-5 rounded-full text-lg font-medium shadow-lg shadow-purple-500/30"
            >
              {loading ? "Analyzing..." : "Analyze Answer"}
            </button>

            <button
              onClick={nextQuestion}
              className="border border-purple-500 hover:bg-purple-500/10 transition duration-300 px-10 py-5 rounded-full text-lg font-medium"
            >
              Next Question
            </button>

          </div>

          {/* FEEDBACK */}
          {feedback && (

            <div className="mt-10 bg-black/30 border border-white/10 rounded-3xl p-8 whitespace-pre-wrap">

              <h2 className="text-2xl font-bold mb-5 text-purple-400">
                AI Interview Feedback
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {feedback}
              </p>

            </div>

          )}

        </motion.div>

      </div>

    </div>
  );
}

export default Interview;