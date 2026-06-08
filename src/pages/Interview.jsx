
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaMicrophone,
  FaVolumeUp,
} from "react-icons/fa";

function Interview() {

  // STATES

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const [difficulty, setDifficulty] = useState("medium");

  const [confidence, setConfidence] =
    useState("Intermediate");

  // QUESTION BANKS

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

  // INITIAL QUESTION

  useEffect(() => {

    const randomQuestion =
      mediumQuestions[
        Math.floor(
          Math.random() * mediumQuestions.length
        )
      ];

    setQuestion(randomQuestion);

  }, []);

  // SPEAK QUESTION

  const speakQuestion = () => {

    const speech =
      new SpeechSynthesisUtterance(question);

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

  };

  // VOICE INPUT
const startVoiceInput = () => {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {

    alert(
      "Speech Recognition not supported in this browser"
    );

    return;

  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-IN";

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.start();

  recognition.onstart = () => {

    console.log("Voice recognition started");

  };

  recognition.onresult = (event) => {

    const transcript =
      event.results[0][0].transcript;

    console.log(transcript);

    setAnswer(transcript);

  };

  recognition.onerror = (event) => {

    console.log(event.error);

    alert(
      "Microphone error: " + event.error
    );

  };

};

  // NEXT QUESTION

  const nextQuestion = () => {

    setAnswer("");

    setFeedback("");

    let nextQ = "";

    if (difficulty === "easy") {

      nextQ =
        easyQuestions[
          Math.floor(
            Math.random() *
            easyQuestions.length
          )
        ];

    } else if (
      difficulty === "hard"
    ) {

      nextQ =
        hardQuestions[
          Math.floor(
            Math.random() *
            hardQuestions.length
          )
        ];

    } else {

      nextQ =
        mediumQuestions[
          Math.floor(
            Math.random() *
            mediumQuestions.length
          )
        ];

    }

    setQuestion(nextQ);

    // AUTO SPEAK

    setTimeout(() => {

      const speech =
        new SpeechSynthesisUtterance(nextQ);

      speech.lang = "en-US";

      window.speechSynthesis.speak(
        speech
      );

    }, 500);

  };

  // ANALYZE ANSWER

  const analyzeAnswer = async () => {

    if (answer.trim() === "") {

      alert("Please enter an answer");

      return;

    }

    try {

      setLoading(true);

      const response =
        await axios.post(
          "http://127.0.0.1:8000/analyze",
          {
            answer: answer,
          }
        );

      setFeedback(
        response.data.feedback
      );

      // CONFIDENCE

      if (
        answer.includes("because") ||
        answer.includes("example") ||
        answer.includes("difference")
      ) {

        setConfidence("Advanced");

      } else if (
        answer
          .toLowerCase()
          .includes("i don't know") ||
        answer.length < 20
      ) {

        setConfidence("Beginner");

      } else {

        setConfidence(
          "Intermediate"
        );

      }

      // DIFFICULTY

      if (
        answer
          .toLowerCase()
          .includes("i don't know") ||
        answer.length < 20
      ) {

        setDifficulty("easy");

      } else if (
        answer.length > 100
      ) {

        setDifficulty("hard");

      } else {

        setDifficulty("medium");

      }

    } catch (error) {

      console.log(error);

      setFeedback(
        "Error analyzing answer."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-[#060816] text-white flex items-center justify-center p-10">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-3xl p-10"
      >

        {/* HEADER */}

        <div className="flex items-center gap-3 mb-6 text-purple-400">

          <FaRobot />

          <span>
            AI Adaptive Interview Engine
          </span>

        </div>

        <h1 className="text-5xl font-bold mb-8 leading-tight">

          LevelUp AI — Adaptive Career Intelligence Platform

        </h1>

        {/* STATUS */}

        <div className="mb-8">

          <p className="text-gray-400 mb-2">
            Difficulty: {difficulty}
          </p>

          <p className="text-gray-400 mb-2">
            AI Confidence: {confidence}
          </p>

          <p className="text-green-400 mb-4">
            🎤 Voice Enabled
          </p>

          {/* QUESTION */}

          <div className="bg-black/30 p-6 rounded-2xl text-lg">

            {question}

          </div>

        </div>

        {/* ANSWER */}

        <textarea
          value={answer}
          onChange={(e) =>
            setAnswer(e.target.value)
          }
          placeholder="Type or speak your answer..."
          className="w-full h-44 bg-black/30 border border-white/10 rounded-2xl p-5 text-white mb-8 outline-none"
        />

        {/* BUTTONS */}

        <div className="flex gap-4 flex-wrap">

          <button
            onClick={speakQuestion}
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full flex items-center gap-2"
          >

            <FaVolumeUp />

            Speak Question

          </button>

          <button
            onClick={startVoiceInput}
            className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full flex items-center gap-2"
          >

            <FaMicrophone />

            Start Voice Answer

          </button>

          <button
            onClick={analyzeAnswer}
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full"
          >

            {loading
              ? "AI is reasoning..."
              : "Analyze Answer"}

          </button>

          <button
            onClick={nextQuestion}
            className="border border-purple-500 hover:bg-purple-500/10 transition px-6 py-3 rounded-full"
          >

            Next Question

          </button>

        </div>

        {/* FEEDBACK */}

        {feedback && (

          <div className="mt-10 bg-black/30 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-4 text-purple-400">

              AI Interview Feedback

            </h2>

            <p className="whitespace-pre-wrap leading-relaxed text-gray-300">

              {feedback}

            </p>

          </div>

        )}

      </motion.div>

    </div>

  );

}

export default Interview;

