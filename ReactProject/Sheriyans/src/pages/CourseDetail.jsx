import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import courses from '../data/courses'

const CourseDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const course = courses.find((c) => c.id === id)

  useEffect(() => {
    if (!course) {
    }
  }, [course, navigate])

  if (!course) {
    return <div className='text-white text-center mt-20'>Course not found</div>
  }

  const imagePath = course.imgsrc.replace(/^\./, "")

  return (
    <div className='w-full min-h-screen flex items-center justify-center p-4 md:p-10 pt-20 md:pt-24' style={{fontFamily: "Helvetica Now Display, sans-serif" }}>
      <div className="bg-[#171717] rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/2 h-80 md:h-auto relative">
          <img 
            src={imagePath} 
            alt={course.heading} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
             <span
                className={`px-3 py-1 text-sm rounded font-medium text-white shadow-sm
                  ${course.language === "Hinglish" ? "bg-[#882727]" : "bg-[#2C2C2C]"}
                `}
              >
                {course.language}
              </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between text-[rgb(233,233,233)]">
          
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {course.heading}
            </h1>
            
            <p className="opacity-80 text-lg mb-6">
              Master this skill with our comprehensive curriculum designed for 2025/2026.
            </p>

            <div className="flex items-center gap-4 mb-4">
               <span className="text-3xl font-bold text-[#24CFA6]">
                 {course.price}
               </span>
               <span className="text-xl line-through opacity-50">
                 {course.oldPrice}
               </span>
               <span className="bg-[#E9E9E9] text-black px-2 py-1 rounded text-xs font-bold">
                 {course.off}
               </span>
            </div>
          </div>

          <div className="mt-8">
            <button
                onClick={() => navigate('/request-callback')}
                className="w-full bg-[#24CFA6] text-black py-4 rounded-xl font-bold text-xl 
                           hover:bg-[#66e4cf] transition-all transform hover:scale-[1.02] shadow-lg
                           flex items-center justify-center gap-2 cursor-pointer"
            >
              Enroll Now 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <p className="text-center text-xs opacity-50 mt-4">
              Limited seats available. Secure your spot today!
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CourseDetail
