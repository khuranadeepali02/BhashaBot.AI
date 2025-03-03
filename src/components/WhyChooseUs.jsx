

import { motion } from "framer-motion"
import Choose from '../assets/Choose.webp'

export default function WhyChooseUs() {
  const achievements = [
    {
      number: "2M+",
      title: "Engaged Users",
      description: "Empowering millions with AI-driven assistance across industries.",
    },
    {
      number: "100K+ ",
      title: "Conversations Daily",
      description: "Delivering insightful, real-time interactions with our advanced NLP technology.",
    },
    {
      number: "50+ ",
      title: "Supported Languages",
      description: "Breaking language barriers with multilingual AI capabilities.",
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-24 h-24 bg-green-500 rounded-full opacity-10 translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-green-500 font-semibold mb-4"
              >
                WHY OURS
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              >
                Why BhashaBot
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 mb-8"
              >
                Our intelligent chatbot has empowered individuals and businesses with seamless, human-like interactions across various domains. Here’s what we’ve accomplished so far:
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                    <div className="text-slate-900 font-medium mb-1">{achievement.title}</div>
                    <div className="text-sm text-slate-600">{achievement.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-green-500/10 rounded-3xl transform rotate-3"></div>
              <img
                src={Choose}
                alt="Professional working on laptop"
                className="relative rounded-3xl shadow-xl w-[500px] h-[500px]"
              />

              {/* Decorative Elements */}
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

