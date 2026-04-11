import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { itemFadeUp } from '../animation'

const skillEntries = {
  'python.py': {
    codeLines: [
      '# skills/python.py',
      'STACK = [',
      '  "Python",        # primary language',
      '  "PyTorch",       # models & training',
      '  "scikit-learn",  # classical ML',
      '  "LangChain",     # LLM orchestration',
      '  "Pandas/NumPy",  # data wrangling',
      ']',
      'FOCUS = "ML pipelines, embeddings, and shipping demos under deadline"',
    ],
    points: [
      'Python',
      'PyTorch for models and training',
      'scikit-learn for classical ML',
      'LangChain for LLM orchestration',
    ],
  },
  'cpp.cpp': {
    codeLines: ['# skills/cpp.cpp', 'LANGUAGE = "C++"', 'USE = "problem solving and performance-oriented logic"'],
    points: ['C++', 'Algorithmic problem solving', 'Performance-oriented coding'],
  },
  'r.r': {
    codeLines: ['# skills/r.r', 'LANGUAGE = "R"', 'USE = "analysis and statistical workflows"'],
    points: ['R', 'Statistical analysis', 'Data exploration'],
  },
  'matlab.m': {
    codeLines: ['# skills/matlab.m', 'LANGUAGE = "MATLAB"', 'USE = "math-heavy experimentation and prototyping"'],
    points: ['MATLAB', 'Numerical experimentation', 'Research prototyping'],
  },
  'react.jsx': {
    codeLines: ['# skills/react.jsx', 'STACK = [', '  "React.js",', '  "Component-driven UI",', '  "Dynamic forms",', ']'],
    points: ['React.js', 'Component-driven UI', 'Dynamic forms'],
  },
  'django.py': {
    codeLines: [
      '# skills/django.py',
      'STACK = [',
      '  "Django REST Framework",',
      '  "CSRF protection",',
      '  "Role-based auth",',
      '  "PostgreSQL / MySQL",',
      '  "RESTful API design",',
      ']',
    ],
    points: ['Django REST Framework', 'CSRF protection', 'Role-based auth', 'RESTful API design'],
  },
  'html.html': {
    codeLines: ['# skills/html.html', 'STACK = [', '  "HTML",', '  "CSS",', '  "Responsive layout semantics",', ']'],
    points: ['HTML', 'CSS', 'Responsive structure'],
  },
  'postgresql.db': {
    codeLines: ['# skills/postgresql.db', 'DATABASE = "PostgreSQL"', 'USE = "schema-backed app development"'],
    points: ['PostgreSQL', 'Schema design', 'Database integration'],
  },
  'mysql.db': {
    codeLines: ['# skills/mysql.db', 'DATABASE = "MySQL"', 'USE = "relational database workflows"'],
    points: ['MySQL', 'Relational data', 'Backend persistence'],
  },
  'ml_models/': {
    codeLines: [
      '# skills/ml_models/',
      'ALGORITHMS = {',
      '  "ensemble":   ["LightGBM", "XGBoost", "Random Forest"],',
      '  "deep":       ["LSTM", "GRU", "Transformers"],',
      '  "classical":  ["SVR", "SVM", "Regression"],',
      '  "optimize":   ["PSO", "Firefly", "Bayesian Opt"],',
      '}',
      'SPECIALTY = "Time-Series Forecasting, Feature Engineering"',
    ],
    points: ['LightGBM / XGBoost', 'LSTM / GRU / Transformers', 'SVR / SVM / Regression', 'PSO / Firefly / Bayesian Opt'],
  },
  'deep_learning/': {
    codeLines: ['# skills/deep_learning/', 'STACK = [', '  "LSTM",', '  "GRU",', '  "Transformers",', '  "Neural network experimentation",', ']'],
    points: ['LSTM', 'GRU', 'Transformers', 'Neural network experimentation'],
  },
  'git.sh': {
    codeLines: ['# skills/git.sh', 'STACK = [', '  "Git",', '  "GitHub",', '  "Branching and merge management",', ']'],
    points: ['Git', 'GitHub', 'Branching and merge management'],
  },
  'research.md': {
    codeLines: [
      '# skills/research.md',
      'AREAS = [',
      '  "Benchmarking across datasets",',
      '  "Statistical comparison (RMSE, MAE, MAPE, R²)",',
      '  "SHAP / LIME explainability",',
      '  "Cybersecurity — malware detection",',
      '  "Educational Assistive AI",',
      ']',
    ],
    points: ['Benchmarking across datasets', 'RMSE / MAE / MAPE / R²', 'SHAP / LIME', 'Cybersecurity and educational AI'],
  },
}

const items = [
  'python.py',
  'cpp.cpp',
  'r.r',
  'matlab.m',
  'react.jsx',
  'django.py',
  'html.html',
  'postgresql.db',
  'mysql.db',
  'ml_models/',
  'deep_learning/',
  'git.sh',
  'research.md',
]

const SkillTerminal = () => {
  const [selectedSkill, setSelectedSkill] = useState('python.py')
  const currentSkill = useMemo(() => skillEntries[selectedSkill] || skillEntries['python.py'], [selectedSkill])

  return (
    <motion.div
      className="skill-terminal"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <div className="skill-terminal-files">
        <p className="terminal-line">&gt; ls skills/</p>
        <ul>
          {items.map((item, index) => (
            <motion.li
              key={item}
              variants={itemFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.05 * index }}
              role="button"
              tabIndex={0}
              className={selectedSkill === item ? 'active' : ''}
              onClick={() => setSelectedSkill(item)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setSelectedSkill(item)
                }
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="skill-terminal-detail">
        <p className="terminal-line">&gt; cat skills/{selectedSkill}</p>
        <pre className="code-comment skill-detail-comment">
          {currentSkill.codeLines.map((line, index) => {
            const lineKey = `${selectedSkill}-${index}`
            const trimmedLine = line.trim()

            if (line.startsWith('#')) {
              return (
                <span key={lineKey}>
                  <span className="skill-code-comment">{line}</span>
                  {'\n'}
                </span>
              )
            }

            if (trimmedLine.startsWith('"')) {
              const commentIndex = line.indexOf('#')

              if (commentIndex >= 0) {
                const codePart = line.slice(0, commentIndex).trimEnd()
                const commentPart = line.slice(commentIndex)

                return (
                  <span key={lineKey}>
                    <span className="skill-code-string">{codePart}</span>
                    <span className="skill-code-comment"> {commentPart}</span>
                    {'\n'}
                  </span>
                )
              }

              return (
                <span key={lineKey}>
                  <span className="skill-code-string">{line}</span>
                  {'\n'}
                </span>
              )
            }

            if (line.includes(' = ')) {
              const [label, valuePart] = line.split(' = ')
              const trimmedValue = valuePart.trim()

              if (trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) {
                const value = trimmedValue.slice(1, -1)
                return (
                  <span key={lineKey}>
                    <span className="skill-code-var">{label}</span>
                    <span className="skill-code-comment"> = </span>
                    <span className="skill-code-string">"{value}"</span>
                    {'\n'}
                  </span>
                )
              }

              return (
                <span key={lineKey}>
                  <span className="skill-code-var">{label}</span>
                  <span className="skill-code-comment"> = </span>
                  <span className="skill-code-comment">{valuePart}</span>
                  {'\n'}
                </span>
              )
            }

            if (line.includes('[') || line.includes(']') || line.includes('{') || line.includes('}')) {
              return (
                <span key={lineKey}>
                  <span className="skill-code-comment">{line}</span>
                  {'\n'}
                </span>
              )
            }

            return (
              <span key={lineKey}>
                <span className="skill-code-string">{line}</span>
                {'\n'}
              </span>
            )
          })}
        </pre>
        <ul className="skill-detail-list">
          {currentSkill.points.map((point, index) => (
            <motion.li
              key={point}
              variants={itemFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.05 * index }}
            >
              <span className="skill-detail-label">{selectedSkill}</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default SkillTerminal
