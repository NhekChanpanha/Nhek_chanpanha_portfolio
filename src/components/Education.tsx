import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      year: '2019',
      title: 'English School',
      school: 'Australian Center For Education (ACE)',
      period: '2019 - 2020',
      description: 'Completed the INTERMEDIATE STUDENT BOOK program. Gained proficiency in English language skills including reading, writing, listening, and speaking through immersive lessons and activities.',
    },
    {
      year: '2020',
      title: 'High School',
      school: '10 January 1979 High School',
      period: '2020 - 2022',
      description: 'Successfully completed secondary education, gaining a solid foundation in general academic subjects and developing essential skills in communication, problem-solving, and critical thinking.',
    },
    {
      year: '2022',
      title: 'Bachelor of Software Engineering',
      school: 'Cambodia University of Technology and Science',
      period: '2022 - Present',
      description: 'Gained comprehensive knowledge in software development, programming languages, and system design. Developed practical skills in building, testing, and maintaining software applications, with a strong focus on problem-solving, teamwork, and modern development practices.',
    },
  ]

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-slate-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-200/5 to-cyan-200/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line (visible on md+) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-teal-400"></div>
          
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline Year Badge */}
              {/* center badge for md+ */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-400/30"
                >
                  <span className="text-white font-bold text-lg">{edu.year}</span>
                </motion.div>
              </div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-teal-200/60 rounded-2xl p-7 shadow-2xl hover:border-teal-300 hover:shadow-3xl transition-all duration-300">
                    {/* small-screen year badge inside card */}
                    <div className="md:hidden mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-700 rounded-full font-semibold shadow-sm">
                        {edu.year}
                      </div>
                    </div>
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.title}
                      </h3>
                      <h4 className="text-lg text-teal-600 font-semibold mb-2">
                        {edu.school}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-sm font-medium rounded-full border border-teal-200">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
