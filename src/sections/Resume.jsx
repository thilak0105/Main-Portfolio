import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { itemFadeUp, sectionReveal } from '../animation'

const Resume = () => {
  return (
    <motion.section
      className="section-wrap resume-section animate-on-scroll"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.h2 className="section-title comment-line" variants={itemFadeUp}>// resume</motion.h2>
      <motion.p className="resume-copy" variants={itemFadeUp}>Choose how you want to access my latest resume</motion.p>
      <motion.p className="resume-updated" variants={itemFadeUp} aria-label="Resume last updated in April 2026">
        Updated April 2026
      </motion.p>

      <motion.div className="resume-actions" variants={itemFadeUp}>
        <a
          className="accent-button"
          href="https://resume.thilak.tech"
          target="_blank"
          rel="noreferrer"
          onClick={() => track('resume_view_click', { destination: 'resume_site' })}
        >
          View Resume
        </a>
        <a
          className="ghost-button"
          href="/resume.pdf"
          download
          onClick={() => track('resume_download_click', { destination: 'resume_pdf' })}
        >
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  )
}

export default Resume
