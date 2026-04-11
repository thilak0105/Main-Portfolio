import { motion } from 'framer-motion'
import SkillTerminal from '../components/SkillTerminal'
import { itemFadeUp, sectionReveal } from '../animation'

const Skills = () => {
  return (
    <motion.section
      className="section-wrap animate-on-scroll"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.p className="section-title comment-line" variants={itemFadeUp}>// skills</motion.p>
      <SkillTerminal />
    </motion.section>
  )
}

export default Skills
