
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaRobot, FaMicrophone } from "react-icons/fa";

function Interview() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const [difficulty, setDifficulty] = useState("medium");
  const [confidence, setConfidence] = useState("Intermediate");

  const easyQuestions = [
    "What is HTML?",
    "What is CSS?",
    "What is JavaScript?"
  ];

  const mediumQuestions = [
    "What is React Virtual DOM?",
    "Difference between REST and GraphQL?",
    "Explain React Hooks"
  ];

  const hardQuestions = [
    "Explain React rendering lifecycle",
    "Explain database indexing",
    "What is system design?"
  ];

  useEffect(() => {

    setQuestion(
      mediumQuestions[
        Math.floor(Math.random() * mediumQuestions.length)
      ]
    );

  }, []);

  const nextQuestion = () => {

    setAnswer("");
    setFeedback("");

    if (difficulty === "easy") {

      setQuestion(
        easyQuestions[
          Math.floor(Math.random() * easyQuestions.length)
        ]
      );

    } else if (difficulty === "hard") {

      setQuestion(
        hardQuestions[
          Math.floor(Math.random() * hardQuestions.length)
        ]
      );

    } else {

      setQuestion(
        mediumQuestions[
          Math.floor(Math.random() * mediumQuestions.length)
        ]
      );

    }
  };

  const analyzeAnswer = async () => {

    if (answer.trim() === "") {

      alert("Please enter an answer");
      return;

    }

    try {

      setLoading(true);
const response = await axios.post(
  "http://127.0.0.1:8000/analyze",
  {
    answer: answer,
  }
);

      setFeedback(response.data.feedback);

      // AI CONFIDENCE

      if (
        answer.includes("because") ||
        answer.includes("example") ||
        answer.includes("difference")
      ) {

        setConfidence("Advanced");

      } else if (
        answer.toLowerCase().includes("i don't know") ||
        answer.length < 20
      ) {

        setConfidence("Beginner");

      } else {

        setConfidence("Intermediate");

      }

      // DIFFICULTY LOGIC

      if (
        answer.toLowerCase().includes("i don't know") ||
        answer.length < 20
      ) {

        setDifficulty("easy");

      } else if (answer.length > 100) {

        setDifficulty("hard");

      } else {

        setDifficulty("medium");

      }

    } catch (error) {

      console.log(error);

      setFeedback("Error analyzing answer.");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-[#060816] text-white flex items-center justify-center p-10">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-10"
      >

        <div className="flex items-center gap-3 mb-6 text-purple-400">

          <FaRobot />

          <span>AI Adaptive Interview Engine</span>

        </div>

        <h1 className="text-5xl font-bold mb-6">
          LevelUp AI — Adaptive Career Intelligence Platform
        </h1>

        <div className="mb-8">

          <p className="text-gray-400 mb-2">
            Difficulty: {difficulty}
          </p>

          <p className="text-gray-400 mb-2">
            AI Confidence: {confidence}
          </p>

          <div className="bg-black/30 p-6 rounded-2xl">
            {question}
          </div>

        </div>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer..."
          className="w-full h-40 bg-black/30 border border-white/10 rounded-2xl p-5 text-white mb-6"
        />

        <div className="flex gap-4">

          <button
            onClick={analyzeAnswer}
            className="bg-purple-600 px-6 py-3 rounded-full"
          >
            {loading ? "AI is reasoning..." : "Analyze Answer"}
          </button>

          <button
            onClick={nextQuestion}
            className="border border-purple-500 px-6 py-3 rounded-full"
          >
            Next Question
          </button>

        </div>

        {feedback && (

          <div className="mt-8 bg-black/30 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              AI Interview Feedback
            </h2>

            <p className="whitespace-pre-wrap">
              {feedback}
            </p>

          </div>

        )}

      </motion.div>

    </div>
  );
}

export default Interview;
