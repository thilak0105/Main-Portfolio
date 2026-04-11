import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }

    updateTime()
    const timer = setInterval(updateTime, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.footer className="footer-bar" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
      <div className="footer-left">
        <span>find me in:</span>
        <a href="https://www.linkedin.com/in/thilak0105/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/thilak0105" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
      <p className="footer-time">{time}</p>
    </motion.footer>
  )
}

export default Footer
