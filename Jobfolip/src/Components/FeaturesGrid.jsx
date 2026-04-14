import React from 'react'

function FeaturesGrid() {
  const features = [
    {
      title: "Smart Matching",
      description: "Our AI-driven engine analyzes your profile to find jobs that perfectly align with your career goals.",
      icon: "🎯"
    },
    {
      title: "Quick Apply",
      description: "Apply to multiple positions with just one click using your unified Jobfolio profile.",
      icon: "⚡"
    },
    {
      title: "Salary Insights",
      description: "Get real-time data on market rates for your position and experience level.",
      icon: "📊"
    }
  ]

  return (
    <div className="mt-32 mb-40 px-4">
      <div className="text-center mb-16 animate-soft-up delay-300">
        <h2 className="text-3xl font-bold bit-font tracking-tight mb-4">Why Jobfolio?</h2>
        <p className="text-gray-500 max-w-lg mx-auto">Experience the future of recruiting with features designed for the modern workforce.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`group p-10 rounded-[2.5rem] bg-white border border-gray-100/50 shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(37,38,50,0.06)] hover:-translate-y-2 transition-all duration-500 animate-soft-up ${
              index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'
            }`}
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-white group-hover:rotate-6 transition-all duration-500">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 bit-font tracking-tight">
              {feature.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm body-font">
              {feature.description}
            </p>
            <div className="mt-10 flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
              Explore <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesGrid
