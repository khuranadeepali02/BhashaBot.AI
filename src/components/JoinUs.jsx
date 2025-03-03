import React from 'react'
import { Link } from 'react-router-dom'

const JoinUs = () => {
  return (
    <div className=" text-center mb-20 ">
          <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-t-xl text-black/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Start your journey with BhashaBot today!</h2>
            <p className="text-xl text-black/50 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of AI-powered conversations. Whether you're looking for an intelligent assistant, a business solution, or a personalized chatbot, BhashaBot is your go-to AI companion.
            </p>
            <button className='mt-4  px-4 py-2 rounded-3xl
                 cursor-pointer bg-gradient-to-r from-[#4A90E2] to-[#2ECC71]'>
                    <Link to="/login">Login to BhashaBot</Link>
                    </button>  
          </div>
        </div>
  )
}

export default JoinUs