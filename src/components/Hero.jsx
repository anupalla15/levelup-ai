import heroImage from "../assets/ai-image.png";
import { motion } from "framer-motion";

function Hero() {
  return (
      <section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 pt-32 bg-[#060816]"
>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
            AI-Powered Developer Growth Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Level Up Your
            <span className="text-purple-500"> Developer Journey </span>
            with AI
          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-xl">
            AI-powered interview preparation, adaptive skill tracking,
            coding challenge analysis, and personalized developer roadmaps
            designed to accelerate career growth.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-300 px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-purple-500/30">
              Start Learning
            </button>

            <button className="border border-purple-500 hover:bg-purple-500/10 hover:scale-105 transition duration-300 px-8 py-4 rounded-full text-lg font-medium">
              Try Mock Interview
            </button>

          </div>

          <div className="flex gap-10 mt-12">

            <div>
              <h2 className="text-3xl font-bold text-purple-400">
                95%
              </h2>
              <p className="text-gray-500 mt-1">
                Interview Accuracy
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                24/7
              </h2>
              <p className="text-gray-500 mt-1">
                AI Guidance
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-400">
                10K+
              </h2>
              <p className="text-gray-500 mt-1">
                Challenges
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >

          <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

          <img
            src={heroImage}
            alt="AI Developer"
            className="relative w-full max-w-xl rounded-3xl border border-white/10 shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;