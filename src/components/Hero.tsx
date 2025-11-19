import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DownloadCV from './DownloadCV'

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const titles = [
    'Software Engineering',
    'Web Frontend Developer',
    // 'Backend Express Developer',
    // 'Full Stack Developer'
  ]

  useEffect(() => {
    const currentFullText = titles[currentTitle]
    const typingSpeed = isDeleting ? 50 : 100
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTitle((prev) => (prev + 1) % titles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentTitle, titles])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Hello, I'm{' '}
              <span className="text-gradient whitespace-nowrap">
                Nhek ChanPanha
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl text-teal-600 mb-6 h-10"
            >
              <span className="font-semibold inline-block">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              Dedicated to building high-performance web solutions and reliable backend architectures. 
              I take pride in designing systems that make complex problems simple and seamless.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <DownloadCV />
              <motion.button
                
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(14, 165, 164, 0.3)"
            }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div> 

          {/* Profile Image with Animated Arcs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-90 h-90 sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px]">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-1 rounded-full overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/image.webp"
                  alt="Nhek ChanPanha"
                  fill
                  className="object-cover scale-140"
                  priority
                />
              </motion.div>

              {/* SVG Animated Arcs */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
              >
                <defs>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>

                {/* Outer faint circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="98"
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.15)"
                  strokeWidth="1"
                />

                {/* Rotating Arc 1 (top-left) */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="98"
                  fill="none"
                  stroke="url(#greenGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="80 565"
                  strokeDashoffset="0"
                  style={{ transformOrigin: 'center' }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Rotating Arc 2 (bottom-right, counter-clockwise) */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="98"
                  fill="none"
                  stroke="url(#greenGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="90 565"
                  strokeDashoffset="200"
                  style={{ transformOrigin: 'center' }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
