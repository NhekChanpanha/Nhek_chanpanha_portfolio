import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/LONGCELOT',
      color: 'white'
    },
    // {
    //   name: 'LinkedIn',
    //   icon: FaLinkedin,
    //   href: 'https://linkedin.com/in/vannseavlong',
    //   color: '#0077B5'
    // },
    // {
    //   name: 'Twitter',
    //   icon: FaTwitter,
    //   href: 'https://twitter.com/vannseavlong',
    //   color: '#1DA1F2'
    // },
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com/vannseavlong',
      color: '#4267B2'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      href: 'https://t.me/SNLRLONG',
      color: '#0088cc'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:vannseavlong55@gmail.com',
      color: '#EA4335'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nhek Chanpanha
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Passionate Software Engineer and Full Stack Developer dedicated to creating 
              innovative solutions and building meaningful digital experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-11 h-11 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center hover:from-primary hover:to-secondary transition-all duration-300 shadow-lg group relative overflow-hidden"
                >
                  <social.icon className="w-5 h-5 text-white relative z-10" />
                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-gray-400 text-sm font-semibold mb-1">Email</p>
                <a href="mailto:panhanhek01@gmail.com" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  panhanhek01@gmail.com
                </a>
              </div>
              <div className="group">
                <p className="text-gray-400 text-sm font-semibold mb-1">Phone</p>
                <a href="tel:+85581746455" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  +855 81 746 455
                </a>
              </div>
              <div className="group">
                <p className="text-gray-400 text-sm font-semibold mb-1">Location</p>
                <p className="text-gray-300">Phnom Penh, Cambodia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-700/50 relative">
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {new Date().getFullYear()} Nhek Chanpanha. Crafted with <span className="text-red-500">❤</span> and <span className="text-primary">Code</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <button
                onClick={() => scrollToSection('#home')}
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 relative group"
              >
                Privacy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <span className="text-gray-600">•</span>
              <button
                onClick={() => scrollToSection('#about')}
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-300 relative group"
              >
                Terms
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
