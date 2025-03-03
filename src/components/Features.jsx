import { Bot, Zap, Brain, MessageCircle, Sparkles } from "lucide-react"

export default function Comparison() {
  const features = [
    {
      name: "Model Architecture",
      bhashabot: "Advanced Hybrid",
      chatgpt: "GPT Architecture",
      deepseek: "MoE Architecture",
    },
    { name: "Parameters", bhashabot: "1.2T", chatgpt: "175B", deepseek: "671B" },
    { name: "Response Speed", bhashabot: "95.8", chatgpt: "88.5", deepseek: "91.6" },
    { name: "Contextual Understanding", bhashabot: "94.2", chatgpt: "89.1", deepseek: "88.5" },
    { name: "Multilingual Support", bhashabot: "96.5", chatgpt: "92.3", deepseek: "89.7" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-violet-50 rounded-t-xl px-4 sm:px-6 py-8 sm:py-12 ">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          AI Models Comparison
        </h1>
        <p className="text-gray-400 text-sm sm:text-base text-center mb-8 sm:mb-12 px-4">
          Detailed comparison of leading AI models: BhashaBot, ChatGPT, and Deepseek
        </p>

        {/* Cards Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
          {/* BhashaBot Card */}
          <div className="relative bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-white bg-purple-600 rounded-full">
                Featured
              </span>
            </div>
            <div className="pt-4">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Bot className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-purple-600">BhashaBot</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Advanced Hybrid Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">1.2T Parameters</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">95.8 Response Speed</span>
                </div>
              </div>
            </div>
          </div>

          {/* ChatGPT Card */}
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <MessageCircle className="w-8 h-8 sm:w-12 sm:h-12 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-green-600">ChatGPT</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">GPT Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">175B Parameters</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">88.5 Response Speed</span>
              </div>
            </div>
          </div>

          {/* Deepseek Card */}
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-blue-600">Deepseek</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">MoE Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">671B Parameters</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">91.6 Response Speed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table Comparison */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[600px]">
              {" "}
              {/* Minimum width to prevent squishing */}
              <div className="grid grid-cols-4 bg-gray-50 border-b">
                <div className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-600">Metrics</div>
                <div className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-purple-600 text-center">
                  BhashaBot
                </div>
                <div className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-green-600 text-center">ChatGPT</div>
                <div className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-blue-600 text-center">Deepseek</div>
              </div>
              {features.map((feature, index) => (
                <div key={feature.name} className={`grid grid-cols-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="p-3 sm:p-4 text-sm sm:text-base font-medium text-gray-700">{feature.name}</div>
                  <div className="p-3 sm:p-4 text-sm sm:text-base text-center font-medium text-purple-600">
                    {feature.bhashabot}
                  </div>
                  <div className="p-3 sm:p-4 text-sm sm:text-base text-center font-medium text-green-600">
                    {feature.chatgpt}
                  </div>
                  <div className="p-3 sm:p-4 text-sm sm:text-base text-center font-medium text-blue-600">
                    {feature.deepseek}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-400 px-4">
          <p>* Scores are based on standardized benchmarks and may vary depending on specific use cases</p>
        </div>
      </div>
    </div>
  )
}

