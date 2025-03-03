

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Award, Target, Users, ArrowRight } from "lucide-react"
import Why from '../assets/Why choose us.webp'

export default function AboutMission() {
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    requests: 0,
    countries: 0,
    uptime: 0,
  })

  // Animate statistics when component is in view
  useEffect(() => {
    const targetStats = {
      clients: 100,
      requests: 50,
      countries: 25,
      uptime: 99.9,
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const interval = duration / steps

    const animate = () => {
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setAnimatedStats({
          clients: Math.round(targetStats.clients * progress),
          requests: Math.round(targetStats.requests * progress),
          countries: Math.round(targetStats.countries * progress),
          uptime: Number((targetStats.uptime * progress).toFixed(1)),
        })

        if (currentStep === steps) {
          clearInterval(timer)
        }
      }, interval)
    }

    animate()
  }, [])

  

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Main Mission Content */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                  Transforming the Future with Ethical AI
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                BhashaBot aims to empower individuals, businesses, and organizations by providing cutting-edge AI solutions for multilingual communication. Whether it’s real-time translation, conversational AI, or natural language processing, we strive to make technology work for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="text-slate-700">Ethical AI Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="text-slate-700">Privacy-First Approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span className="text-slate-700">Global Accessibility</span>
                  </div>
                </div>
                
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-violet-500/10 blur-xl rounded-xl"></div>
                <img
                  src={Why}
                  alt="AI Mission Visualization"
                  className="relative rounded-xl shadow-2xl h-[500px] w-[500px]"
                />
                
              </div>
            </div>
          </div>
        </div>

        
        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <Target className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-slate-600">
            We envision a future where AI-driven conversations become an integral part of everyday life, streamlining workflows, enhancing productivity, and enabling seamless human-AI collaboration.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <Users className="h-12 w-12 text-violet-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Culture</h3>
            <p className="text-slate-600">
            At BhashaBot, innovation drives everything we do. We are a team of AI enthusiasts, engineers, and linguists dedicated to pushing the boundaries of AI communication. 
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <Award className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Impact</h3>
            <p className="text-slate-600">
            At BhashaBot, innovation drives everything we do.
            </p>
          </div>
        </div>

        
        
        
      </div>
    </section>
  )
}

