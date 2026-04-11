import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { itemFadeUp, sectionReveal, staggerReveal } from '../animation'

const Projects = () => {
  return (
    <motion.section
      className="section-wrap animate-on-scroll"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.p className="section-title comment-line" variants={itemFadeUp}>
        // Top projects
      </motion.p>
      <motion.p className="project-total-commits" variants={itemFadeUp} transition={{ delay: 0.08 }}>
        3 flagship projects
      </motion.p>

      <motion.div className="projects-grid" variants={staggerReveal}>
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={itemFadeUp} transition={{ delay: index * 0.08 }}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects
