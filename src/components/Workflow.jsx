import { motion } from "framer-motion";
import {
  FaUser,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaRoad,
} from "react-icons/fa";

function Workflow() {
  const steps = [
    {
      icon: <FaUser />,
      title: "User Starts Interview",
      desc: "Developers choose interview domains, skill levels, and technical topics.",
    },

    {
      icon: <FaRobot />,
      title: "AI Conducts Interview",
      desc: "Adaptive AI dynamically asks questions and evaluates responses in real time.",
    },

    {
      icon: <FaBrain />,
      title: "Reasoning Engine Analysis",
      desc: "AI identifies weak concepts, confidence patterns, and learning behavior.",
    },

    {
      icon: <FaChartLine />,
      title: "Performance Analytics",
      desc: "Visual dashboards track interview scores, coding consistency, and growth trends.",
    },

    {
      icon: <FaRoad />,
      title: "Personalized Roadmap",
      desc: "AI generates tailored learning paths and developer improvement plans.",
    },
  ];

  return (
    <section className="px-6 py-28 relative">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-6"
        >
          AI Reasoning Workflow
        </motion.h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 text-lg">
          LevelUp AI combines adaptive interviews, intelligent analysis,
          and personalized learning strategies through a multi-step AI reasoning workflow.
        </p>

        <div className="relative border-l border-purple-500/30 ml-6 space-y-16">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative pl-16"
            >

              {/* ICON */}
              <div className="absolute left-[-28px] top-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30">
                {step.icon}
              </div>

              {/* CONTENT */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-purple-500/30 transition duration-300">

                <h3 className="text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {step.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Workflow;