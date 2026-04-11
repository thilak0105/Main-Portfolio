import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'
import { itemFadeUp, sectionReveal, staggerReveal } from '../animation'

const Contact = () => {
  return (
    <motion.section
      className="section-wrap animate-on-scroll"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.h2 className="section-title comment-line" variants={itemFadeUp}>// get_in_touch()</motion.h2>
      <ContactForm />

      <motion.div className="contact-social" variants={staggerReveal}>
        <motion.a href="https://www.linkedin.com/in/thilak0105/" target="_blank" rel="noreferrer" variants={itemFadeUp} whileHover={{ y: -2 }}>
          <FaLinkedin /> LinkedIn
        </motion.a>
        <motion.a href="https://github.com/thilak0105" target="_blank" rel="noreferrer" variants={itemFadeUp} whileHover={{ y: -2 }}>
          <FaGithub /> GitHub
        </motion.a>
      </motion.div>
    </motion.section>
  )
}

export default Contact
