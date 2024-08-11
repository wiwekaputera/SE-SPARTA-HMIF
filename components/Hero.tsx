import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { SocialIcon } from 'react-social-icons'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 min-h-screen flex flex-col justify-center items-center'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            </div>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col md:flex-row items-center justify-center'>
                <img 
                    src="./foto jamal.jpg" 
                    alt="My Photo" 
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-56 md:h-64 lg:w-64 lg:h-72 rounded-full object-cover hover:scale-110 transition-transform duration-300 md:mr-8 mb-4 md:mb-0 md:-mt-28" 
                />
                <div className='flex flex-col items-center md:items-start justify-center relative md:-mt-2'>
                    <h2 className='tracking-widest text-md text-center md:text-left text-blue-100 max-w-80 hover:scale-110 transition-transform duration-300'>
                        Hi! I&apos;m
                    </h2>

                    <TextGenerateEffect words='I Made Wiweka' className='md:text-5xl lg:text-6xl text-[40px] text-center md:text-left hover:scale-110 transition-transform duration-300 md:whitespace-nowrap' />

                    <p className='text-center md:text-left md:tracking-wider mb-4 text-xs md:text-lg hover:scale-110 transition-transform duration-300'>
                        a student of Informatics Engineering at Institut Teknologi Bandung. I&apos;m interested in web development and I&apos;m currently learning Next.js.
                    </p>

                    <div className='flex flex-row items-center space-x-4'>
                        <a href="https://github.com/wiwekaputera" target="_blank" rel="noopener noreferrer">
                            <MagicButton 
                                title='My Work'
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </a>
                        <SocialIcon network="linkedin" className='md:mt-10 sm:mt-4' target="_blank" url='https://www.linkedin.com/in/imadewiwekaputera/'/>
                        <SocialIcon network="instagram" className='md:mt-10 sm:mt-4' target="_blank" url='https://www.instagram.com/wiwekaputera'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero