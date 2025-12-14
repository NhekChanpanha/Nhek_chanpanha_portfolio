import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed', icon: '🚀' },
    { number: '20+', label: 'Technologies Used', icon: '💻' },
    { number: '3+', label: 'Years Learning', icon: '📚' },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-2 bg-teal-100 text-primary rounded-full text-sm font-semibold mb-4"
          >
            Get To Know Me
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Decorative background blob */}
            <div className="absolute top-10 -left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/about1.webp"
                  alt="Nhek chanpanha Professional Photo"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Overlay gradient on hover */}
                <motion.div 
                  whileHover={{ opacity: 0.1 }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-teal-600 to-transparent"
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-teal-500 to-cyan-600 text-white px-6 py-4 rounded-2xl shadow-xl"
              >
                <p className="text-sm font-semibold">Software Engineering</p>
                <p className="text-xs opacity-90">panhanhek01@gmail.com</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Hello! I'm NHEK Chanpanha
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am a software engineering student with 3 years of academic and practical experience, skilled in programming languages including Python, Java, C/C++, Node.js, Express.js, and React.js. I have actively participated in software development projects encompassing system design, implementation, and debugging, gaining hands-on experience in real-world scenarios.
              </p>
              
              <p>
                My experience includes developing web-based applications, building backend APIs, and implementing responsive front-end interfaces. I bring strong problem-solving skills, attention to detail, and the ability to work effectively both independently and collaboratively in team environments.
              </p>
              
              <p>
                I am passionate about creating innovative software solutions, continuously learning new technologies, and applying best practices to develop robust and scalable systems. I am eager to contribute my technical expertise and creative thinking to challenging projects and grow as a software professional in the tech industry.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - force single horizontal row like design */}
        <div className="flex flex-row flex-nowrap items-center justify-center gap-6 mt-20 w-full max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="text-center p-2 w-1/3 box-border"
              >
                <div className="text-xl mb-2">{stat.icon}</div>
                <h4 className="text-2xl font-bold text-[#0EA5A4] mb-1">{stat.number}</h4>
                <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
              </motion.div>

              {/* Vertical Separator - visible on all screens to match design */}
              {index < stats.length - 1 && (
                <div className="w-[2px] h-14 bg-gray-300 mx-4"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
