import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaStar,
  FaCalendar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Awards = () => {
  const awards = [
    {
      title: "Seminar on Computer Hardware/Software and Network Technology",
      organization: "Guizhou  Academy of Sciences (China)",
      period: "Jul 07, 2025 – Jul 21, 2025",
      description:
        "Participated in a seminar focused on advancements in computer hardware, software, and network technology.",
      icon: FaTrophy,
      color: "#0EA5A4",
      isCurrent: false,
      image: "/images/seminar2.webp"
    },
    {
      title: "The Sustainable Development Goals (SDGs)",
      organization: "Youth Leadership Summit",
      year: "2022",
      period: "Sep 2024",
      description:
        "Participated in the Youth Leadership Summit focusing on the Sustainable Development Goals (SDGs).",
      icon: FaMedal,
      color: "#0EA5A4",
      isCurrent: false,
      image: "/images/sdg.webp"
    },
    {
      title: "Social Project",
      organization: "Dygitalk",
      year: "Jan 2025",
      period: "Jan 2025",
      description: "Engaged in a social project organized by Dygitalk, contributing to community development and social awareness.",
      icon: FaAward,
      color: "#0EA5A4",
      isCurrent: false,
      image: "/images/digitalk.webp"
    },
    // {
    //   title: 'Dean\'s List Achievement',
    //   organization: 'Royal University of Phnom Penh',
    //   year: '2020-2024',
    //   description: 'Consistently maintained high academic performance for 6 consecutive semesters.',
    //   icon: FaStar,
    //   color: '#4169E1'
    // },
    // {
    //   title: 'Hackathon Champion',
    //   organization: 'Tech Innovation Cambodia',
    //   year: '2022',
    //   description: 'Led a team to victory in a 48-hour hackathon, developing a mobile app for local businesses.',
    //   icon: FaTrophy,
    //   color: '#FFD700'
    // },
    // {
    //   title: 'Best Intern Award',
    //   organization: 'TechCorp Cambodia',
    //   year: '2023',
    //   description: 'Recognized for exceptional performance and contribution during the internship program.',
    //   icon: FaMedal,
    //   color: '#C0C0C0'
    // }
  ];

  return (
    <section
      id="awards"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decorative elements - similar to Education section */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Awards & <span className="text-gradient">Participant</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Achievements and recognition that highlight my dedication to
            excellence
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Background with Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>

              {/* Main Card */}
              <div className="relative bg-white backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 shadow-lg overflow-hidden">
                <div className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="text-4xl md:text-6xl font-bold text-gray-100 leading-none mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-start justify-between gap-4 ">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 hover-text-gradient">
                          {award.title}
                        </h3>
                        <h4 className="text-lg text-gray-600 font-medium mb-4">
                          {award.organization}
                        </h4>
                      </div>

                      {/* Current Badge */}
                      {award.isCurrent && (
                        <span className="flex-shrink-0 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 rounded-lg text-sm font-medium flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </div>

                    {/* Date and Location */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                      <motion.span
                        className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-sm rounded-full font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {award.period}
                      </motion.span>
                    </div>

                    {/* Description - Bullet Points */}
                    <div className="space-y-2">
                      <ul className="space-y-1">
                          {award.description
                            .split('.')
                            .map(s => s.trim())
                            .filter(Boolean)
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

                  {/* Award Image */}
                  <div className="flex-shrink-0 hidden md:block">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="w-48 h-48 rounded-xl overflow-hidden border-2 border-gray-100 group-hover:border-primary/30 transition-all duration-300"
                    >
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Line Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div className="h-full w-0 bg-gradient-to-r from-primary via-secondary to-primary group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
