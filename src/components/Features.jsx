import { motion } from "framer-motion";
import {
  FaRobot,
  FaCode,
  FaChartBar,
  FaRoad,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Mock Interviews",
      desc: "Practice adaptive AI-driven interviews with intelligent feedback and dynamic difficulty adjustment.",
      color: "purple",
    },

    {
      icon: <FaCode />,
      title: "Coding Challenge Analysis",
      desc: "Track coding performance, identify weak areas, and receive personalized coding recommendations.",
      color: "blue",
    },

    {
      icon: <FaChartBar />,
      title: "Skill Analytics",
      desc: "Visualize your growth through AI-powered analytics, progress tracking, and performance insights.",
      color: "pink",
    },

    {
      icon: <FaRoad />,
      title: "Career Roadmaps",
      desc: "Generate personalized learning paths based on your career goals and technical strengths.",
      color: "purple",
    },

    {
      icon: <FaBrain />,
      title: "Reasoning AI Engine",
      desc: "AI understands your learning behavior and adapts recommendations intelligently over time.",
      color: "blue",
    },

    {
      icon: <FaLaptopCode />,
      title: "Developer Workspace",
      desc: "Manage interviews, coding practice, analytics, and growth plans in one smart platform.",
      color: "pink",
    },
  ];

  return (
    <section
  id="features"
  className="px-6 py-28 relative"
>

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-6"
        >
          Powerful AI Features
        </motion.h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 text-lg">
          LevelUp AI combines intelligent reasoning, adaptive learning,
          and real-time analytics to accelerate developer growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-purple-500/30 transition duration-300 shadow-xl"
            >

              <div
                className={`text-5xl mb-6 ${
                  feature.color === "purple"
                    ? "text-purple-400"
                    : feature.color === "blue"
                    ? "text-blue-400"
                    : "text-pink-400"
                }`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;