import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const HeaderSection = () => {
  return (
    <div className='md:px-20 px-8 md:pt-10 pt-6'>
      
        <div className='grid md:grid-cols-4 md:gap-10 gap-4 text-center md:text-start'>

          <div className='md:col-span-3'>
            <h1 className='md:text-6xl text-4xl font-bold'>Sriram Kannan V</h1>
            <p className='font-OpenSans mt-1 text-lg text-slate-800'>Aspiring Full Stack Developer</p>
          </div>

          <div className='font-OpenSans space-y-1.5 md:mx-0 mx-auto'>
            <p className='flex gap-2 items-center font-semibold'><MapPin size={20} /> Tiruchirappalli - 620012</p>
            <p className='flex gap-2 items-center font-semibold'><Phone size={20} /> +91 80721 58192</p>
            <p className='flex gap-2 items-center font-semibold'><Mail size={20} /> sriramkannanv@gmail.com</p>

            <div className='flex gap-4'>
              <p className='cursor-pointer font-semibold hover:text-blue-600 transition-all'><a className='flex items-center gap-0.5' href='https://www.linkedin.com/in/sriram-kannan-v-11jan2005/' target='_blank'><img className='h-6 w-6' src="/LinkedIn-Icon.png" alt="linkedinIcon" />LinkedIn</a></p>
              <p className='cursor-pointer font-semibold hover:text-blue-600 transition-all'><a className='flex items-center gap-0.5' href='https://github.com/SriramKannanV' target='_blank'><img className='h-6 w-6' src="/GitHub-Icon.png" alt="gitHubIcon" />GitHub</a></p>
              <p className='cursor-pointer font-semibold hover:text-blue-600 transition-all'><a className='flex items-center gap-1' href='https://sriramkannanportfolio.netlify.app/' target='_blank'><img className='h-6 w-6' src="/Portfolio-Icon.png" alt="portfolioIcon" />Portfolio</a></p>
            </div>

          </div>

        </div>

    </div>
  )
}

export default HeaderSection
