import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { VscChevronRight, VscFile, VscFolder } from 'react-icons/vsc'
import { itemFadeLeft, itemFadeRight, sectionReveal } from '../animation'

const aboutBlocks = [
  [
    '/**',
    ' * About me',
    ' * I am Thilak L, an AI/ML enthusiast in my 3rd year of Integrated',
    ' * M.Sc. Data Science at Amrita Vishwa Vidyapeetham (GPA: 8.13/10).',
    ' * Passionate about building intelligent systems — from malware',
    ' * detection pipelines to AI-powered learning platforms.',
    ' * I have interned at IIM Bodh Gaya (research) and RBG AI (industry),',
    ' * and I enjoy working at the intersection of ML, NLP, and real-world',
    ' * deployment under tight deadlines.',
    ' */',
  ],
  [
    '/**',
    ' * certifications',
    ' * Neural Networks and Deep Learning',
    ' * Certifying Body: Coursera',
    ' * Completed: July 2025',
    ' */',
  ],
  [
    '/**',
    ' * leadership',
    ' * Team Lead — Online Banking System (Nov 2024)',
    ' * Led 3-member team: Django · PostgreSQL · Python',
    ' * Secure auth, role-based access, end-to-end delivery',
    ' * Teammates: Subramanian G, Raghul A R',
    ' */',
  ],
  [
    '/**',
    ' * languages & interests',
    ' * English (Advanced) · Tamil (Fluent) · Telugu (Intermediate)',
    ' * Interests: Video Editing · Fitness · Travelling · Tech',
    ' */',
  ],
]

const aboutLines = aboutBlocks.flat()

const folderFiles = [
  { folder: 'Machine Learning', files: ['model-training.py', 'feature-engineering.ipynb'] },
  { folder: 'Deep Learning', files: ['cnn-experiments.py', 'transformer-notes.md'] },
  { folder: 'Python', files: ['automation-scripts.py', 'data-cleaning.py'] },
  { folder: 'SQL & Databases', files: ['queries.sql', 'schema-design.md'] },
  { folder: 'LaTeX & Research', files: ['paper-draft.tex', 'experiment-log.md'] },
  { folder: 'Cybersecurity', files: ['malware-analysis.md'] },
  { folder: 'Free Time', files: ['reading-papers.md', 'video-editing.md', 'fitness-gym.md', 'travelling.md', 'tinkering-with-models.md'] },
]

const ExplorerFolder = ({ entry }) => {
  const [isOpen, setIsOpen] = useState(entry.folder === 'Free Time')

  return (
    <li className="about-folder">
      <button className="explorer-folder-btn" type="button" onClick={() => setIsOpen((value) => !value)}>
        <VscChevronRight className="folder-chevron" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
        <VscFolder />
        {entry.folder}
      </button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.96, y: -4 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.96, y: -4 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: 'top left' }}
            className="about-tree-children"
          >
            <ul>
              {entry.files.map((file) => (
                <li key={file} className="file-item">
                  <VscFile /> {file}
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  )
}

const AboutMe = () => {
  const [hoveredLine, setHoveredLine] = useState(null)

  return (
    <motion.section
      className="section-wrap about-layout animate-on-scroll"
      style={{ paddingTop: '3rem' }}
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.div className="about-editor" variants={itemFadeLeft} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
        <div className="line-numbers">
          {aboutLines.map((_, index) => (
            <span key={index + 1}>{index + 1}</span>
          ))}
        </div>
        <div className="about-copy-stack">
          {aboutBlocks.flatMap((block, blockIndex) => block.map((line, index) => ({ line, blockIndex, index }))).map((item, index) => (
            <span
              key={`${index}-${item.line}`}
              className={`about-line ${hoveredLine === index ? 'line-hover' : ''} ${item.blockIndex === 0 && item.index === 4 ? 'active' : ''}`}
              onMouseEnter={() => setHoveredLine(index)}
              onMouseLeave={() => setHoveredLine(null)}
            >
              {item.line}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.aside className="explorer-panel" variants={itemFadeRight}>
        <p className="explorer-title">EXPLORER</p>
        <p className="explorer-subtitle">MY INTERESTS</p>
        <ul className="about-tree">
          {folderFiles.map((entry) => (
            <ExplorerFolder key={entry.folder} entry={entry} />
          ))}
        </ul>
      </motion.aside>
    </motion.section>
  )
}

export default AboutMe
