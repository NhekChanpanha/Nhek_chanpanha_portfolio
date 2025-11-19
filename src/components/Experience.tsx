import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllInternships, setShowAllInternships] = useState(false);

  const schoolProjects = [
    {
      title: "Air Quality Monitoring System",
      duration: "June 2025 - August 2025",
      description:
        "Learn to create an air quality monitoring system using Flutter, FastAPI, connected to Open-meteo live sensor data.",
      technologies: [
        "Flutter",
        "FastAPI",
        "open-meteo",
        "XGBOOST model selection",
      ],
      githubLink: "https://github.com/LONGCELOT/Air_Quality_Prediction/",
      achievements: [
        "Integrate everything together",
        "Prediction accuracy improvement",
        "Members: Bin Sodina, Nhek ChanPanha, Chea LivChea, Hong Pimolsaknan, VANN Seavlong (Me)",
      ],
    },
    {
      title: "Quiz App",
      duration: "June 2025 - August 2025",
      description:
        "Learn to create a quiz app using Flutter and provided API integration",
      technologies: ["Flutter", "API integration"],
      githubLink: "https://github.com/LONGCELOT/quizApp/",
      achievements: [
        "Integrate everything together",
        "Prediction accuracy improvement",
        "Members: VANN Seavlong",
      ],
    },
    {
      title: "Movie Booking Ticket System",
      duration: "January 2025 - May 2025",
      description:
        "Learn to create a movie booking ticket system using React vite, express, connected to a share database server on Heidy SQL.",
      technologies: ["React.js", "Express.js", "MySQL", "Heidy SQL"],
      achievements: [
        "Learn MySQL queries",
        "OOP Concepts unlock",
        "Members: Bin Sodina, Nhek ChanPanha, VANN Seavlong (Me)",
      ],
    },
    {
      title: "Academic Record System",
      duration: "July 2024 - August 2024",
      description:
        "Learn to design a database schema with relationship, ER-Diagram and create a user-friendly UX/UI interface for managing academic records.",
      technologies: ["MySQL", "Figma", "Mamp server Php my admin"],
      achievements: [
        "Learn MySQL queries",
        "OOP Concepts unlock",
        "Members: Bin Sodina, Nhek ChanPanha, Chea LivChea, Hong PimolSaknan, VANN Seavlong (Me)",
      ],
    },
    {
      title: "Rice Quality Detection System",
      duration: "July 2024 - August 2024",
      description:
        "Created own dataset and trained a model to detect the quality of rice. This project allowed me to understand the basics of machine learning and image classification. Yet this project is not fully completed due to time limitations.",
      technologies: ["Python", "Roboflow", "TensorFlow"],
      githubLink:
        "https://github.com/LONGCELOT/Rice-Qualification-Detection.git",
      achievements: [
        "Python",
        "Roboflow",
        "Members: Bin Sodina, Nhek ChanPanha, Hong PimolSaknan, Mona Ameliazzaman, VANN Seavlong (Me)",
      ],
    },
    {
      title: "Shoe Inventory Management System",
      duration: "February  2024",
      description:
        "Developed a clear roadmap for development, ensuring alignment among stakeholders before implementation",
      technologies: ["lucidchart", "Draw.io", "Miro"],
      githubLink: "https://github.com/LONGCELOT/My-Final-BAW.git",
      liveLink: "https://longcelot.github.io/My-Final-BAW/",
      achievements: [
        "Won a first round award in top 8",
        "Team Collaboration with 5 members",
        "Certified by Khmer Enterprise",
      ],
    },
  ];

  const internshipExperiences = [
    {
      title: "Umami: Admin Portal & SRS Document",
      company:
        "Dojology Technologies and Ventures",
      duration: "Present",
      description:
        "The Umami Admin Portal is a centralized dashboard that allows administrators to create an account for a merchant, monitor the merchant account, manage users, access reports and analytics, and ensure system security and reliability. Moreover, I authored the Software Requirement Specification (SRS) document to outline the system's functionalities and requirements.",
      technologies: ["React Js", "TypeScript", "Tailwind", "Shadcn UI"],
      liveLink: "https://catalogue.isisteel.com.kh/",
      achievements: [
        "Developed the Umami Admin Portal, a centralized dashboard for managing merchant accounts.",
        "Authored the Software Requirement Specification (SRS) document",
        
      ],
    },
    {
      title: "bEasy: Admin Portal & Mini App",
      company: "Suntel Technology (CAMBODIA) CO., LTD.",
      duration: "September 2025",
      description:
        "An Admin Portal for bEasy was built to manage cleaning and pest control services. Additionally, I implemented a full-featured Mini App integrated with ABA Bank, allowing users to book cleaning and pest control services directly from the bank’s app.",
      technologies: ["React Js", "TypeScript", "Tailwind", "Shadcn UI"],
      liveLink: "https://beasy.info/en",
      achievements: [
        "Developed screen Admin Portal for managing cleaning and pest-control services.",
        "Integrated Api for dynamic data fetching and state management.",
        "Implemented a full-featured Mini App integrated with ABA Bank"
      ],
    },
  ];

  const renderProjectCard = (project: any, index: number) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="experience-card"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {project.title}
          </h3>
          {project.company && (
            <h4 className="text-lg text-primary font-semibold mb-2">
              {project.company}
            </h4>
          )}
        </div>
        <span className="text-sm text-gray-500 font-medium">
          {project.duration}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{project.description}</p>

      <div className="mb-4">
        <h5 className="text-sm font-semibold text-gray-900 mb-2">
          Technologies:
        </h5>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my projects and professional experiences
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg p-1 shadow-md">
            <motion.button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              School Projects
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("internships")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === "internships"
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Internships
            </motion.button>
          </div>
        </motion.div>

        {/* Tab Content - Centered Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Main Content Area */}
          <div className="w-full">
            {activeTab === "projects" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(showAllProjects
                  ? schoolProjects
                  : schoolProjects.slice(0, 6)
                ).map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <motion.h4
                          className="text-lg font-bold text-gray-700 mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {project.title}
                        </motion.h4>
                        <motion.span
                          className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-sm rounded-full font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {project.duration}
                        </motion.span>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIdx) => (
                          <motion.span
                            key={techIdx}
                            className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium hover:bg-blue-100 transition-colors duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.1 + 0.7 + techIdx * 0.05,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Links */}
                    {/* <motion.div 
                      className="flex items-center justify-between pt-3 border-t border-gray-100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.9 }}
                    > */}
                    {/* <div className="flex gap-3">
                        {project.githubLink && (
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                            whileHover={{ scale: 1.05, x: 2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="w-4 h-4 mr-1" />
                            Code
                          </motion.a>
                        )}
                        {project.liveLink && (
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:text-secondary text-sm transition-colors duration-200"
                            whileHover={{ scale: 1.05, x: 2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                            Live
                          </motion.a>
                        )}
                      </div> */}
                    {/* <motion.button 
                        className="text-primary hover:text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:translate-x-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details →
                      </motion.button> */}
                    {/* </motion.div> */}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "internships" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {(showAllInternships
                  ? internshipExperiences
                  : internshipExperiences.slice(0, 3)
                ).map((experience, index) => (
                  <motion.div
                    key={experience.title}
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 80,
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <motion.h4
                          className="text-xl font-bold text-gray-900 mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.2 }}
                        >
                          {experience.title}
                        </motion.h4>
                        <motion.h5
                          className="text-lg text-gradient font-semibold mb-3"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                        >
                          {experience.company}
                        </motion.h5>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <motion.span
                          className="inline-block px-4 py-2 bg-teal-50 text-teal-600 text-sm rounded-full font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                        >
                          {experience.duration}
                        </motion.span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h6 className="text-sm font-semibold text-gray-900 mb-3">
                          Technologies Used
                        </h6>
                        <motion.div
                          className="mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.6 }}
                        >
                          <div className="flex flex-wrap gap-1">
                            {experience.technologies.map((tech, techIdx) => (
                              <motion.span
                                key={techIdx}
                                className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium hover:bg-blue-100 transition-colors duration-200"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: index * 0.1 + 0.7 + techIdx * 0.05,
                                }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold text-gray-900 mb-3">
                          Key Achievements
                        </h6>
                        <ul className="space-y-1">
                          {experience.achievements
                            .slice(0, 3)
                            .map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="text-sm text-gray-600 flex items-start"
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Load More Button */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {activeTab === "projects" && schoolProjects.length > 6 && (
                <motion.button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-xl font-medium border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <span className="flex items-center">
                    {showAllProjects ? (
                      <>
                        <motion.span
                          className="mr-2"
                          animate={{ y: [-2, 2, -2] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          ↑
                        </motion.span>
                        Show Less
                      </>
                    ) : (
                      <>
                        <motion.span
                          className="mr-2"
                          animate={{ y: [2, -2, 2] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          ↓
                        </motion.span>
                        View All Projects ({schoolProjects.length - 6} more)
                      </>
                    )}
                  </span>
                </motion.button>
              )}
              {activeTab === "internships" &&
                internshipExperiences.length > 3 && (
                  <motion.button
                    onClick={() => setShowAllInternships(!showAllInternships)}
                    className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-xl font-medium border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <span className="flex items-center">
                      {showAllInternships ? (
                        <>
                          <motion.span
                            className="mr-2"
                            animate={{ y: [-2, 2, -2] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            ↑
                          </motion.span>
                          Show Less
                        </>
                      ) : (
                        <>
                          <motion.span
                            className="mr-2"
                            animate={{ y: [2, -2, 2] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            ↓
                          </motion.span>
                          View All Experiences (
                          {internshipExperiences.length - 3} more)
                        </>
                      )}
                    </span>
                  </motion.button>
                )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
