import { motion } from 'framer-motion'
import { itemFadeUp, sectionReveal } from '../animation'

const experiences = [
  {
    company: 'IIM Bodh Gaya',
    role: 'Research Intern',
    period: 'May 2025 – June 2025',
    location: 'Remote',
    tech: ['SVR', 'LightGBM', 'LSTM', 'GRU', 'PSO'],
    codeComment: `/**
 * Oil price forecasting pipeline
 * SVR · LightGBM · LSTM · GRU
 * Optimized with PSO, Firefly & Bayesian Optimization
 * Achieved R² up to 98.9%
 */`,
    bullets: [
      'Built forecasting pipeline using SVR, LightGBM, LSTM, and GRU models optimized with PSO, Firefly, and Bayesian Optimization.',
      'Automated evaluation using RMSE, MAE, and MAPE with results saved for statistical comparison and visualization.',
      'Achieved up to 98.9% coefficient of determination (R²) through advanced optimization strategies.',
    ],
  },
  {
    company: 'RBG AI',
    role: 'AI/ML Development Intern',
    period: 'November 2024 – June 2025',
    location: 'Coimbatore, India',
    tech: ['React', 'Django', 'REST API', 'PostgreSQL', 'Git'],
    codeComment: `/**
 * Full-stack AI product development
 * React · Django · REST APIs · Git
 * Agile team — feature branches & version control
 */`,
    bullets: [
      'Designed and integrated a React-based dynamic form builder with custom sections, questions, and media uploads for inspections.',
      "Implemented secure authentication using Django's built-in auth system with CSRF protection and RESTful APIs.",
      'Collaborated in an agile team using Git branches for feature development and merge management.',
    ],
  },
]

const Experience = () => {
  return (
    <motion.section
      className="section-wrap animate-on-scroll"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className="experience-inner">
        <motion.p className="section-title comment-line" variants={itemFadeUp}>// experience</motion.p>

        <div className="timeline-container experience-timeline" aria-label="Experience timeline">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              className="experience-item"
              variants={itemFadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.35, delay: index * 0.06 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="experience-spine" aria-hidden="true">
                <span className="experience-dot" />
              </div>

              <motion.div className="experience-card" whileHover={{ y: -3 }} transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}>
                <div className="experience-head">
                  <h3 className="experience-company">{exp.company}</h3>
                  <p className="experience-role">{exp.role}</p>
                  <p className="experience-meta">
                    {exp.period} · {exp.location}
                  </p>
                  <div className="experience-tech-pills" aria-label={`${exp.company} tech stack`}>
                    {exp.tech.map((tech) => (
                      <span key={tech} className="experience-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <pre className="code-comment">{exp.codeComment}</pre>

                <ul className="experience-bullets">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience

