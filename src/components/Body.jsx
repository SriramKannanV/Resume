import React from 'react'

const Body = () => {
  return (
    <div className='md:p-20 p-8 grid md:grid-cols-4 md:gap-10'>
      
      <div className='md:col-span-3'>

        {/* Experience Section */}
        <div className='mb-8'>

          <h1 className='font-OpenSans text-blue-600 font-bold text-lg mb-4'>EXPERIENCE</h1>

          <div className='mb-4'>
            <h1 className='font-bold text-lg'>QSkill - <span className='font-normal italic'>Frontend Developer Internship</span></h1>
            <p className='text-xs font-OpenSans text-slate-500 mb-4'>June 2026 - July 2026</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm'>Developed responsive web interfaces using React.js and Vite, focusing on UI component design and performance optimization.</p>
          </div>

          <div>
            <h1 className='font-bold text-lg'>NextGen - <span className='font-normal italic'>Full Stack Developer Internship</span></h1>
            <p className='text-xs font-OpenSans text-slate-500 mb-4'>June 2026 - August 2026</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm'>Currently engaged in an intensive Full Stack Development program at NextGen, expanding frontend expertise to include server-side 
              architecture, API integration, and database management.</p>
          </div>

        </div>

        {/* Education Section */}
        <div className='mb-8'>
          <h1 className='font-OpenSans text-blue-600 font-bold text-lg mb-4'>EDUCATION</h1>

          <div>
            <h1 className='font-bold text-lg'>Jamal Mohamed College - Autonomous, Tiruchirappalli - <span className='font-normal italic'>B.Sc. Visual Communication</span></h1>
            <p className='text-xs font-OpenSans text-slate-500 mb-4'>June 2023 - April 2026</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm'>Strong academic foundation with focus on media and design. Exposure to hands-on projects, film-making and photography.</p>
          </div>
        </div>

        {/* Project Section */}
        <div>
          <h1 className='font-OpenSans text-blue-600 font-bold text-lg mb-4'>PROJECTS</h1>

          <div className='mb-4'>
            <h1 className='font-bold text-lg mb-2'>Model E-commerce Website - <span className='font-normal italic'>Internship Project</span></h1>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm'>A modern, high-performance plant e-commerce application built with React, Vite, and Redux Toolkit. Features smooth clientside dynamic routing, an elegant glassmorphic UI layout, responsive real-time search filtering, and state-persistent global shopping cart actions.</p>
            <button className='mt-4 mb-4 md:mb-0 bg-slate-500 py-1.5 px-8 rounded text-white font-OpenSans font-semibold cursor-pointer hover:bg-blue-500 transition-all'><a href='https://leafy-ecommerce.netlify.app/' target='_blank'>LIVE LINK</a></button>
          </div>

          <div className='mb-4'>
            <h1 className='font-bold text-lg mb-2'>Translator App - <span className='font-normal italic'>Internship Project</span></h1>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm'>A modern, fully responsive text translation application built during my Frontend Development internship. The project converts English text into multiple global languages in real-time by integrating an external translation engine via RapidAPI.</p>
            <button className='mt-4 mb-4 md:mb-0 bg-slate-500 py-1.5 px-8 rounded text-white font-OpenSans font-semibold cursor-pointer hover:bg-blue-500 transition-all'><a href='https://translatorapp-sriram.netlify.app/' target='_blank'>LIVE LINK</a></button>
          </div>

          <div className='mb-4'>
            <h1 className='font-bold text-lg mb-2'>String Generator - <span className='font-normal italic'>Internship Project</span></h1>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm'>A modern, responsive random string and password generator built using React, Vite, and Tailwind CSS. Implements optimized state management with core React hooks (useState, useCallback, useEffect), UI context state persistence, and clean CSS-in-JS customization.</p>
            <button className='mt-4 mb-4 md:mb-0 bg-slate-500 py-1.5 px-8 rounded text-white font-OpenSans font-semibold cursor-pointer hover:bg-blue-500 transition-all'><a href='https://sriram-string-generator.netlify.app/' target='_blank'>LIVE LINK</a></button>
          </div>

        </div>

      </div>

      <div>

        {/* Skills Section */}
        <div>
          <h1 className='font-OpenSans text-blue-600 font-bold text-lg mb-4'>SKILLS</h1>

          <div className='mb-4'>
            <h1 className='font-bold text-lg mb-4'>Frontend Development</h1>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>HTML5, CSS3 & Responsive Web Design.</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>Bootstrap, Tailwind Css & Vite.</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>React.js & JavaScript.</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>State Management & UI Component Design.</p>
          </div>

          <div className='mb-4'>
            <h1 className='font-bold text-lg mb-4'>Backend & Databases</h1>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>Node.js & Express.js.</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>MongoDB & Data Modeling.</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>RESTful API Development & Integration.</p>
          </div>

          <div className='mb-8'>
            <h1 className='font-bold text-lg mb-4'>Tools & Methodologies</h1>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>Version Control (Git & GitHub) & Figma.</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>Performance Optimization.</p>
            <p className='font-semibold text-slate-600 font-OpenSans text-sm py-0.5'>Problem-Solving, Debugging & Testing.</p>
          </div>

        </div>

        {/* Languages Section */}
        <div>
          <h1 className='font-OpenSans text-blue-600 font-bold text-lg mb-4'>LANGUAGES</h1>
          <p className='font-semibold text-slate-600 font-OpenSans text-sm'>Tamil, Engligh</p>
        </div>

      </div>

    </div>
  )
}

export default Body
