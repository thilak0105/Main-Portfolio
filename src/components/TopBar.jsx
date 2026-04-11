import { motion } from 'framer-motion'

const TopBar = () => {
  return (
    <motion.header className="top-bar" aria-label="Top bar" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
      <div className="top-bar-dots" aria-hidden="true">
        <span className="dot dot-red"></span>
        <span className="dot dot-yellow"></span>
        <span className="dot dot-green"></span>
      </div>
      <p className="top-bar-title">thilak_l.portfolio</p>
      <div className="top-bar-spacer" aria-hidden="true"></div>
    </motion.header>
  )
}

export default TopBar
