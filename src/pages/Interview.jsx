import {
  useLocation,
  useNavigate
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  FaRobot,
  FaMicrophone,
  FaVolumeUp,
} from "react-icons/fa";

function Interview() {

  // LOCATION

  const location = useLocation();
  const navigate = useNavigate();

  const selectedDomain =
    location.state?.domain || "React";

  // STATES

  const [started, setStarted] =
    useState(false);

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [feedback, setFeedback] =
    useState("");

  const [loading, setLoading] =
    useState(false);
    const [careerAdvice, setCareerAdvice] =
  useState("");

const [workIQ, setWorkIQ] =
  useState("");

  const [difficulty, setDifficulty] =
    useState("medium");

  const [confidence, setConfidence] =
    useState("Intermediate");

  const [domain, setDomain] =
    useState(selectedDomain);

  const [careerIQ, setCareerIQ] =
    useState(0);

  const [readiness, setReadiness] =
    useState("Beginner");

  const [roadmap, setRoadmap] =
    useState("");

  const [careerProfile, setCareerProfile] =
  useState("");

  // GENERATE QUESTION

  const generateQuestion = async () => {

    try {

      const response =
        await axios.post(
          "https://levelup-ai-e15e.onrender.com/generate-question",
          {
            domain,
            difficulty,
          }
        );

      setQuestion(
        response.data.question
      );

      // AUTO SPEAK

      const speech =
        new SpeechSynthesisUtterance(
          response.data.question
        );

      speech.lang = "en-US";

      window.speechSynthesis.speak(
        speech
      );

    } catch (error) {

      console.log(error);

    }

  };

  // NEXT QUESTION

  const nextQuestion = () => {

    setAnswer("");

    setFeedback("");

    setRoadmap("");

    generateQuestion();

  };

  // SPEAK QUESTION

  const speakQuestion = () => {

    const speech =
      new SpeechSynthesisUtterance(
        question
      );

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.speak(
      speech
    );

  };

  // VOICE INPUT

  const startVoiceInput = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert(
        "Speech Recognition not supported"
      );

      return;

    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = (event) => {

      const transcript =
        event.results[0][0].transcript;

      setAnswer(transcript);

    };

    recognition.onerror = (event) => {

      console.log(event.error);

      alert(
        "Microphone error: " +
        event.error
      );

    };

  };

  // ANALYZE ANSWER
  const analyzeAnswer = async () => {

    if (answer.trim() === "") {

      alert(
        "Please enter an answer"
      );

      return;

    }

    try {

      setLoading(true);
      // FEEDBACK

      const response =
        await axios.post(
          "https://levelup-ai-e15e.onrender.com/analyze",
          {
            answer,
          }
        );

      setFeedback(
        response.data.feedback
      );

      // CAREER IQ

      const match =
        response.data.feedback.match(
          /Technical Score:\s*(\d+)/
        );
        if (match) {

  const score =
    Number(match[1]);

  setCareerIQ(score);

  let currentReadiness =
    "Beginner";

  if (score >= 8) {

    currentReadiness =
      "Job Ready";

    setReadiness(
      "Job Ready"
    );

  } else if (score >= 5) {

    currentReadiness =
      "Intermediate";

    setReadiness(
      "Intermediate"
    );

  } else {

    currentReadiness =
      "Beginner";

    setReadiness(
      "Beginner"
    );

  }

  // SAVE HISTORY

  const previous =
    JSON.parse(
      localStorage.getItem(
        "interviews"
      ) || "[]"
    );

  previous.push({
    domain,
    score,
    readiness:
      currentReadiness,
    date:
      new Date()
        .toLocaleDateString()
  });

  localStorage.setItem(
    "interviews",
    JSON.stringify(previous)
  );

}

      if (match) {

        const score =
          Number(match[1]);

        setCareerIQ(score);

        // READINESS

        if (score >= 8) {

          setReadiness(
            "Job Ready"
          );

        } else if (score >= 5) {

          setReadiness(
            "Intermediate"
          );

        } else {

          setReadiness(
            "Beginner"
          );

        }

      }

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

        setConfidence("Intermediate");

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

      // ROADMAP

      const roadmapResponse =
        await axios.post(
          "https://levelup-ai-e15e.onrender.com/roadmap",
          {
            feedback:
              response.data.feedback,
          }
        );

      setRoadmap(
        roadmapResponse.data.roadmap
      );

      const profileResponse =
  await axios.post(
    "https://levelup-ai-e15e.onrender.com/career-profile",
    {
      feedback: response.data.feedback,
      domain
    }
  );

setCareerProfile(
  profileResponse.data.profile
);
const adviceResponse =
  await axios.post(
    "https://levelup-ai-e15e.onrender.com/career-advice",
    {
      profile:
        profileResponse.data.profile
    }
  );

setCareerAdvice(
  adviceResponse.data.advice
);
const workIQResponse =
  await axios.post(
    "https://levelup-ai-e15e.onrender.com/work-iq",
    {
      feedback:
        response.data.feedback
    }
  );

setWorkIQ(
  workIQResponse.data.work_iq
);

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

    <div className="
      min-h-screen
      bg-[#060816]
      text-white
      flex
      items-center
      justify-center
      p-10
    ">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          w-full
          max-w-5xl
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-10
        "
      >

        {/* HEADER */}

        <div className="
          flex
          items-center
          gap-3
          mb-6
          text-purple-400
        ">

          <FaRobot />

          <span>
            AI Adaptive Interview Engine
          </span>

        </div>

        <h1 className="
          text-5xl
          font-bold
          mb-8
          leading-tight
        ">

          LevelUp AI — Adaptive Career Intelligence Platform

        </h1>

        {/* SETUP SCREEN */}

        {!started && (

          <div className="
            bg-black/30
            p-8
            rounded-2xl
            mb-8
          ">

            <h2 className="
              text-2xl
              font-bold
              mb-6
            ">

              Interview Setup

            </h2>

            {/* DOMAIN */}

            <select
              value={domain}
              onChange={(e) =>
                setDomain(
                  e.target.value
                )
              }
              className="
                w-full
                bg-black/40
                p-4
                rounded-xl
                mb-4
                text-white
              "
            >

              <option>React</option>
              <option>Java</option>
              <option>Python</option>
              <option>C</option>
              <option>AI/ML</option>
              <option>HR</option>
              <option>System Design</option>

            </select>

            {/* DIFFICULTY */}

            <select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(
                  e.target.value
                )
              }
              className="
                w-full
                bg-black/40
                p-4
                rounded-xl
                mb-6
                text-white
              "
            >

              <option>easy</option>
              <option>medium</option>
              <option>hard</option>

            </select>

            <button
              onClick={() => {

                setStarted(true);

                generateQuestion();

              }}
              className="
                w-full
                bg-gradient-to-r
                from-purple-600
                to-pink-600
                py-4
                rounded-xl
                font-bold
                hover:scale-105
                transition
              "
            >

              Start AI Interview

            </button>

          </div>

        )}

        {/* INTERVIEW */}

        {started && (

          <>

            {/* STATUS */}

            <div className="mb-8">

              <p className="
                text-gray-400
                mb-2
              ">
                Domain: {domain}
              </p>

              <p className="
                text-gray-400
                mb-2
              ">
                Difficulty: {difficulty}
              </p>

              <p className="
                text-gray-400
                mb-2
              ">
                AI Confidence:
                {" "}
                {confidence}
              </p>

              <p className="
                text-green-400
                mb-4
              ">
                🎤 Voice Enabled
              </p>

              {/* QUESTION */}

              <div className="
                bg-black/30
                p-6
                rounded-2xl
                text-lg
              ">

                {question}

              </div>

            </div>

            {/* ANSWER */}

            <textarea
              value={answer}
              onChange={(e) =>
                setAnswer(
                  e.target.value
                )
              }
              placeholder="
                Type or speak your answer...
              "
              className="
                w-full
                h-44
                bg-black/30
                border
                border-white/10
                rounded-2xl
                p-5
                text-white
                mb-8
                outline-none
              "
            />

            {/* BUTTONS */}

            <div className="
              flex
              gap-4
              flex-wrap
            ">

              <button
                onClick={speakQuestion}
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  px-6
                  py-3
                  rounded-full
                  flex
                  items-center
                  gap-2
                "
              >

                <FaVolumeUp />

                Speak Question

              </button>

              <button
                onClick={startVoiceInput}
                className="
                  bg-green-600
                  hover:bg-green-700
                  transition
                  px-6
                  py-3
                  rounded-full
                  flex
                  items-center
                  gap-2
                "
              >

                <FaMicrophone />

                Start Voice Answer

              </button>

              <button
                onClick={analyzeAnswer}
                className="
                  bg-purple-600
                  hover:bg-purple-700
                  transition
                  px-6
                  py-3
                  rounded-full
                "
              >

                {loading
                  ? "AI is reasoning..."
                  : "Analyze Answer"}

              </button>

              <button
                onClick={nextQuestion}
                className="
                  border
                  border-purple-500
                  hover:bg-purple-500/10
                  transition
                  px-6
                  py-3
                  rounded-full
                "
              >

                Next Question

              </button>
              <button
  onClick={() =>
    navigate("/dashboard")
  }
  className="
    bg-yellow-600
    hover:bg-yellow-700
    transition
    px-6
    py-3
    rounded-full
  "
>

  Dashboard

</button>

            </div>

            {/* FEEDBACK */}

            {feedback && (

              <div className="
                mt-10
                bg-black/30
                p-6
                rounded-2xl
              ">

                <h2 className="
                  text-2xl
                  font-bold
                  mb-4
                  text-purple-400
                ">

                  AI Interview Feedback

                </h2>

                <p className="
                  whitespace-pre-wrap
                  leading-relaxed
                  text-gray-300
                ">

                  {feedback}

                </p>

              </div>

            )}

            {/* CAREER IQ */}

            <div className="
              mt-8
              bg-black/30
              p-6
              rounded-2xl
            ">

              <h2 className="
                text-2xl
                font-bold
                mb-4
                text-pink-400
              ">

                Career Intelligence

              </h2>

              <p className="mb-3">

                Career IQ:
                {" "}
                {careerIQ}/10

              </p>

              <p>

                Interview Readiness:
                {" "}
                {readiness}

              </p>

            </div>

            {/* ROADMAP */}

            {roadmap && (

              <div className="
                mt-8
                bg-black/30
                p-6
                rounded-2xl
              ">

                <h2 className="
                  text-2xl
                  font-bold
                  mb-4
                  text-cyan-400
                ">

                  AI Career Roadmap

                </h2>

                <p className="
                  whitespace-pre-wrap
                  text-gray-300
                ">

                  {roadmap}

                </p>

              </div>

            )}
{/* CAREER PROFILE */}

{careerProfile && (

  <div className="
    mt-8
    bg-black/30
    p-6
    rounded-2xl
  ">

    <h2 className="
      text-2xl
      font-bold
      mb-4
      text-yellow-400
    ">

      AI Career Profile

    </h2>

    <p className="
      whitespace-pre-wrap
      text-gray-300
    ">

      {careerProfile}

    </p>

  </div>

)}
{/* CAREER RECOMMENDATION */}

{careerAdvice && (

  <div className="
    mt-8
    bg-black/30
    p-6
    rounded-2xl
  ">

    <h2 className="
      text-2xl
      font-bold
      mb-4
      text-green-400
    ">

      AI Career Recommendation

    </h2>

    <p className="
      whitespace-pre-wrap
      text-gray-300
    ">

      {careerAdvice}

    </p>

  </div>

)}

{/* MICROSOFT WORK IQ */}

{workIQ && (

  <div className="
    mt-8
    bg-black/30
    p-6
    rounded-2xl
  ">

    <h2 className="
      text-2xl
      font-bold
      mb-4
      text-blue-400
    ">

      Microsoft Work IQ

    </h2>

    <p className="
      whitespace-pre-wrap
      text-gray-300
    ">

      {workIQ}

    </p>

  </div>

)}

          </>

        )}

      </motion.div>

    </div>

  );

}

export default Interview;