import { motion } from "framer-motion";

function About() {
  return (
    <section className="px-6 py-28 relative">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            Why LevelUp AI?
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            AI-Powered Growth for
            <span className="text-purple-400"> Modern Developers</span>
          </h2>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed">
            Developers often struggle with interview preparation,
            skill tracking, coding consistency, and identifying weak concepts.
            LevelUp AI transforms the learning journey through adaptive reasoning,
            personalized AI feedback, and intelligent developer analytics.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex gap-4 items-start">
              <div className="w-4 h-4 rounded-full bg-purple-500 mt-2"></div>

              <p className="text-gray-300">
                Adaptive AI interviews with dynamic difficulty progression
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-4 h-4 rounded-full bg-blue-500 mt-2"></div>

              <p className="text-gray-300">
                Personalized developer roadmaps based on skill gaps
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-4 h-4 rounded-full bg-pink-500 mt-2"></div>

              <p className="text-gray-300">
                Intelligent analytics for long-term coding improvement
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md shadow-2xl">

            <div className="space-y-8">

              <div>
                <p className="text-gray-400 mb-2">
                  AI Interview Accuracy
                </p>

                <div className="w-full h-4 bg-white/10 rounded-full">
                  <div className="w-[92%] h-4 bg-purple-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-2">
                  Coding Consistency
                </p>

                <div className="w-full h-4 bg-white/10 rounded-full">
                  <div className="w-[80%] h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-2">
                  Roadmap Completion
                </p>

                <div className="w-full h-4 bg-white/10 rounded-full">
                  <div className="w-[70%] h-4 bg-pink-500 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;