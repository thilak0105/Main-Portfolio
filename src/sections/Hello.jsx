import { motion } from 'framer-motion'

const terminalLines = [
  ['$ ', 'init ml_engineer --name="Thilak L"'],
  ['> ', 'loading skills.core...'],
  ['> ', 'python: ACTIVE', '        # primary'],
  ['> ', 'deep_learning: ENABLED', '  # PyTorch · LSTM'],
  ['> ', 'llm_stack: READY', '     # LangChain · Gemini'],
  ['> ', 'accuracy: 98.77%', '   # peak (LightGBM)'],
  ['$ ', 'status: OPEN TO INTERNSHIPS'],
]

const heroDescription =
  'Building intelligent systems that learn from data,\ngeneralize across domains, and ship under deadline.\nFrom malware detection pipelines to AI-powered\nlearning platforms — full ownership, no hand-offs.'

const revealDelay = 0.06

const Hello = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.section
      className="section-wrap hello-grid animate-on-scroll"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="hello-grid-inner">
        <motion.div
          className="hello-left"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <p className="hero-module-label hero-reveal" style={{ '--reveal-delay': `${revealDelay * 1}s` }}>
            // identity module / v2025.1
          </p>

          <h1 className="hero-name hero-reveal" style={{ '--reveal-delay': `${revealDelay * 3}s` }}>
            Thilak L
          </h1>

          <p className="hero-role hero-reveal" style={{ '--reveal-delay': `${revealDelay * 5}s` }}>
            AI / ML Engineer
          </p>

          <p className="hero-description hero-reveal" style={{ '--reveal-delay': `${revealDelay * 7}s` }}>
            {heroDescription}
          </p>

          <div className="hero-actions hero-reveal" style={{ '--reveal-delay': `${revealDelay * 9}s` }}>
            <button type="button" className="hero-button hero-button-primary" onClick={scrollToProjects}>
              $ view_projects
            </button>
            <button
              type="button"
              className="hero-button hero-button-secondary"
              onClick={() => openExternalLink('https://github.com/thilak0105')}
            >
              → GitHub
            </button>
            <button
              type="button"
              className="hero-button hero-button-secondary"
              onClick={() => openExternalLink('https://www.linkedin.com/in/thilak0105/')}
            >
              → LinkedIn
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hello-right"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.div
            className="hero-terminal"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="hero-terminal-header">
              <div className="hero-terminal-dots" aria-hidden="true">
                <span className="dot dot-red hero-terminal-dot"></span>
                <span className="dot dot-yellow hero-terminal-dot"></span>
                <span className="dot dot-green hero-terminal-dot"></span>
              </div>
              <span className="hero-terminal-title">system.init — bash</span>
              <span className="hero-terminal-path">~/portfolio</span>
            </div>
            <div className="hero-terminal-body" aria-label="system init terminal">
              {terminalLines.map((segments, index) => (
                <div
                  key={segments.join('')}
                  className={`hero-terminal-line${index === terminalLines.length - 1 ? ' hero-terminal-line-status' : ''}`}
                  style={{ '--line-index': index }}
                >
                  <span className="hero-terminal-prompt">{segments[0]}</span>
                  <span className={index === terminalLines.length - 1 ? 'hero-terminal-highlight hero-terminal-status' : 'hero-terminal-command'}>
                    {segments[1]}
                  </span>
                  {segments[2] ? <span className="hero-terminal-muted">{segments[2]}</span> : null}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="hero-stat-row">
              <span className="hero-stat-label">internships completed</span>
              <span className="hero-stat-value hero-stat-value-accent">02  // IIM Bodh Gaya · RBG AI</span>
            </div>
            <div className="hero-stat-row">
              <span className="hero-stat-label">peak model accuracy</span>
              <span className="hero-stat-value hero-stat-value-success">98.77%  // LightGBM</span>
            </div>
            <div className="hero-stat-row">
              <span className="hero-stat-label">hackathon rank</span>
              <span className="hero-stat-value hero-stat-value-amber">#3 / 92 teams  // Code O Clock</span>
            </div>
            <div className="hero-stat-row hero-stat-row-last">
              <span className="hero-stat-label">availability</span>
              <span className="hero-stat-value hero-stat-value-status">
                <span className="hero-status-dot" aria-hidden="true"></span>
                OPEN TO WORK
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hello
