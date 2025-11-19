import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiPostman, SiVisualstudiocode, SiBootstrap, SiFigma, SiOpenai, SiShadow, SiFirebase, SiGoogleanalytics, SiDocker, SiDigitalocean, SiFastapi, SiPython } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB', percentage: 70 },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', percentage: 65 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', percentage: 80 },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', percentage: 75 },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', percentage: 95 },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', percentage: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', percentage: 75 },
        { name: 'Shadcn UI', icon: SiShadow, color: '#000000', percentage: 75 },
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', percentage: 85 },
        { name: 'Express.js', icon: SiExpress, color: '#000000', percentage: 80 },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1', percentage: 80 },
        { name: 'Database Design', icon: FaDatabase, color: '#336791', percentage: 90 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        // { name: 'Git', icon: FaGitAlt, color: '#F05032', percentage: 90 },
        { name: 'GitHub', icon: FaGithub, color: '#181717', percentage: 85 },
        { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC', percentage: 95 },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37', percentage: 85 },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E', percentage: 70 },
        { name: 'OpenAI', icon: SiOpenai, color: '#000000', percentage: 95 },
        // { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', percentage: 75 },
        // { name: 'Google Analytics', icon: SiGoogleanalytics, color: '#FFCA28', percentage: 60 },
        // { name: 'Docker', icon: SiDocker, color: '#2496ED', percentage: 65 },
        // { name: 'DigitalOcean', icon: SiDigitalocean, color: '#007596', percentage: 70 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Title */}
              <div className="text-left mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              </div>

              {/* Skills Grid - 2 columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                  >
                    {/* Logo and Name */}
                    <div className="flex items-center space-x-4">
                      <skill.icon 
                        className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                        style={{ color: skill.color }}
                      />
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>

                    {/* Percentage */}
                    <div className="flex items-center space-x-3">
                      {/* Progress Bar */}
                      <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      {/* Percentage Text */}
                      <span className="text-sm font-semibold text-gray-600 min-w-[3rem] text-right">
                        {skill.percentage}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
