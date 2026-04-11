import { motion } from 'framer-motion'
import { itemFadeUp, sectionReveal, staggerReveal } from '../animation'

const achievements = [
  {
    badge: '[#3]',
    title: '3rd Place - Code O Clock Hackathon',
    date: 'September 2025',
    org: 'SaaS22 x Coimbatore Institute of Technology',
    points: [
      'Achieved 3rd place among 92 teams (340+ participants).',
      'Built Mentora, an AI platform that converts one prompt into a multi-format course with AI-monitored quizzes.',
      'Used LangChain, ChromaDB, and Gemini API in a 24-hour build sprint with a 4-member team.',
    ],
  },
  {
    badge: '[#1]',
    title: '1st Place - Bug Hub Technical Event',
    date: 'March 2025',
    org: 'Sri Ramakrishna Engineering College',
    points: [
      'Secured 1st place in the Bug Hub technical event.',
      'Achieved Runner-Up in a non-technical event during the same competition cycle.',
      'Delivered under high-pressure constraints with strong collaborative problem solving.',
    ],
  },
]

const Achievements = () => {
  return (
    <motion.section
      className="section-wrap animate-on-scroll"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.p className="section-title comment-line" variants={itemFadeUp}>// achievements</motion.p>

      <motion.div className="achievements-grid" variants={staggerReveal}>
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            className="achievement-card"
            variants={itemFadeUp}
            transition={{ delay: index * 0.08 }}
          >
            <div className="achievement-head">
              <span className="achievement-badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <span>{item.date}</span>
            </div>
            <p className="achievement-org">{item.org}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Achievements
