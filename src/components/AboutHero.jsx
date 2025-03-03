import { Link } from "react-router-dom"


export default function AboutHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Pioneering the Future of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl">
          Welcome to BhashaBot, your AI-powered language assistant designed to break communication barriers and enhance digital interactions. 
          </p>
          <p className='text-white mt-3 hover:text-blue-400 text-xl'>Let’s connect the world, one conversation at a time!</p> 

          <div className="flex flex-col sm:flex-row gap-4">
          <button className='mt-4 border px-4 py-2 rounded-3xl
                 cursor-pointer bg-gradient-to-r from-orange-200 to-pink-300'>
                    <Link to="/login">Login to BhashaBot</Link>
                    </button>  
            
            
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
    </section>
  )
}

