import { motion } from "framer-motion";
import { FaChartLine, FaBrain, FaCode } from "react-icons/fa";

function DashboardPreview() {
  return (
    <section className="px-6 py-24 relative">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Smart Developer Analytics
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/10 to-black border border-purple-500/20 rounded-3xl p-8 backdrop-blur-md shadow-xl shadow-purple-500/10"
          >

            <FaChartLine className="text-4xl text-purple-400 mb-6" />

            <h3 className="text-2xl font-semibold text-purple-300">
              Interview Score
            </h3>

            <p className="text-6xl font-bold mt-6">
              92%
            </p>

            <div className="w-full h-3 bg-white/10 rounded-full mt-8">
              <div className="w-[92%] h-3 bg-purple-500 rounded-full"></div>
            </div>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-500/10 to-black border border-blue-500/20 rounded-3xl p-8 backdrop-blur-md shadow-xl shadow-blue-500/10"
          >

            <FaBrain className="text-4xl text-blue-400 mb-6" />

            <h3 className="text-2xl font-semibold text-blue-300">
              Skill Growth
            </h3>

            <p className="text-6xl font-bold mt-6">
              +38%
            </p>

            <div className="w-full h-3 bg-white/10 rounded-full mt-8">
              <div className="w-[75%] h-3 bg-blue-500 rounded-full"></div>
            </div>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-pink-500/10 to-black border border-pink-500/20 rounded-3xl p-8 backdrop-blur-md shadow-xl shadow-pink-500/10"
          >

            <FaCode className="text-4xl text-pink-400 mb-6" />

            <h3 className="text-2xl font-semibold text-pink-300">
              Challenges Solved
            </h3>

            <p className="text-6xl font-bold mt-6">
              127
            </p>

            <div className="w-full h-3 bg-white/10 rounded-full mt-8">
              <div className="w-[85%] h-3 bg-pink-500 rounded-full"></div>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;