import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaCode,
  FaBrain,
} from "react-icons/fa";

function AIDashboard() {
  return (
    <section
  id="dashboard"
  className="px-6 py-28 relative"
>

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-6"
        >
          AI Intelligence Dashboard
        </motion.h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 text-lg">
          Monitor interview performance, reasoning analytics,
          adaptive learning insights, and personalized developer growth.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-md shadow-2xl"
        >

          <div className="grid md:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-black border border-purple-500/20 rounded-3xl p-6">

              <FaRobot className="text-4xl text-purple-400 mb-5" />

              <h3 className="text-xl font-semibold">
                AI Confidence
              </h3>

              <p className="text-5xl font-bold mt-6">
                94%
              </p>

            </div>

            {/* CARD 2 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-black border border-blue-500/20 rounded-3xl p-6">

              <FaChartLine className="text-4xl text-blue-400 mb-5" />

              <h3 className="text-xl font-semibold">
                Skill Progress
              </h3>

              <p className="text-5xl font-bold mt-6">
                +42%
              </p>

            </div>

            {/* CARD 3 */}
            <div className="bg-gradient-to-br from-pink-500/10 to-black border border-pink-500/20 rounded-3xl p-6">

              <FaCode className="text-4xl text-pink-400 mb-5" />

              <h3 className="text-xl font-semibold">
                Challenges
              </h3>

              <p className="text-5xl font-bold mt-6">
                187
              </p>

            </div>

            {/* CARD 4 */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-black border border-cyan-500/20 rounded-3xl p-6">

              <FaBrain className="text-4xl text-cyan-400 mb-5" />

              <h3 className="text-xl font-semibold">
                AI Adaptation
              </h3>

              <p className="text-5xl font-bold mt-6">
                Smart
              </p>

            </div>

          </div>

          {/* GRAPH AREA */}
          <div className="mt-14 bg-black/30 border border-white/10 rounded-3xl p-10">

            <div className="flex items-end gap-6 h-64">

              <div className="w-full bg-purple-500 rounded-t-3xl h-[70%]"></div>

              <div className="w-full bg-blue-500 rounded-t-3xl h-[85%]"></div>

              <div className="w-full bg-pink-500 rounded-t-3xl h-[60%]"></div>

              <div className="w-full bg-cyan-500 rounded-t-3xl h-[95%]"></div>

              <div className="w-full bg-purple-400 rounded-t-3xl h-[80%]"></div>

              <div className="w-full bg-blue-400 rounded-t-3xl h-[90%]"></div>

            </div>

           <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-gray-500 mt-4 text-xs md:text-sm text-center">
              <span>Interview</span>
               <span>Skills</span>
              <span>Roadmaps</span>
              <span>Challenges</span>
              <span>Growth</span>
               <span>AI</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AIDashboard;