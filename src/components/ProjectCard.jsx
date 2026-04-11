import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { hoverLift } from '../animation'

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, commitCount, period, codeComment }) => {
  const handleProjectOpen = (target) => {
    track('project_open_click', {
      project: title,
      target,
    })
  }

  return (
    <motion.article
      className="project-card"
      whileHover={{ ...hoverLift, boxShadow: '0 0 24px rgba(0, 212, 255, 0.14)' }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="project-card-head">
        <h3>{title}</h3>
        <span className="project-commit-tag">{commitCount}</span>
      </div>

      <p className="project-period">{period}</p>
      <pre className="code-comment">{codeComment || `/**\n * ${description}\n * Tech: ${techStack}\n */`}</pre>
      <p className="project-tech-stack">{techStack}</p>

      <div className="project-progress" aria-hidden="true">
        <span></span>
      </div>

      <a
        className="project-link accent-button"
        href={liveLink || githubLink}
        target="_blank"
        rel="noreferrer"
        onClick={() => handleProjectOpen(liveLink ? 'live' : 'github_fallback')}
      >
        [ see the project ]
      </a>

      <p className="project-description">{description}</p>

      <a
        className="project-link ghost-button"
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        onClick={() => handleProjectOpen('github')}
      >
        [ Check in GitHub ]
      </a>
    </motion.article>
  )
}

export default ProjectCard
