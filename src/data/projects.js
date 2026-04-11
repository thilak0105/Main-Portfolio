/** Shared project copy for hero stack + _projects section */
export const projects = [
  {
    id: 'android-malware-analysis',
    title: 'Android Malware Analysis',
    shortTitle: 'Android Malware Analysis',
    commitCount: '180+ commits',
    period: 'Jan 2024 – Apr 2024',
    codeComment: `/**\n * Android Malware Detection Pipeline\n * Static + dynamic analysis on CICAndMal2020 dataset\n * Peak accuracy: 98.77% with LightGBM\n * Benchmarked across CIC-MalDroid2020 & Drebin datasets\n */`,
    techStack: 'Python · Scikit-Learn · LightGBM · XGBoost · SHAP · LIME',
    description:
      'Complete malware detection pipeline integrating static and dynamic analysis using logcat, memory, API, and network activity features. Evaluated Random Forest, SVM, XGBoost, and LightGBM — achieved 98.77% accuracy. Validated robustness across multiple datasets.',
    githubLink: 'https://github.com/thilak0105',
    liveLink: '',
  },
  {
    id: 'mentora',
    title: 'Mentora — AI Course Platform',
    shortTitle: 'Mentora — AI Course Platform',
    commitCount: '120+ commits',
    period: 'September 2025',
    codeComment: `/**\n * Hackathon build: one prompt → full multi-format course\n * AI-monitored quizzes, structured learning paths\n * 3rd place among 92 teams — Code O Clock 2025\n */`,
    techStack: 'Python · LangChain · ChromaDB · Gemini API',
    description:
      'AI-powered platform that converts a single text prompt into a complete multi-format course with AI-monitored quizzes. Built with a 4-member team in 24 hours at Code O Clock Hackathon (SaaS22 × CIT).',
    githubLink: 'https://github.com/thilak0105',
    liveLink: '',
  },
  {
    id: 'smart-study-helper',
    title: 'Smart Study Helper',
    shortTitle: 'Smart Study Helper',
    commitCount: '90+ commits',
    period: 'December 2024',
    codeComment: `/**\n * NLP-based learning support system for ADHD students\n * PDF extraction + transformer summarization\n * Adaptive learning with visual key-point outputs\n */`,
    techStack: 'Python · Django · Transformers · NLTK · PyPDF2',
    description:
      'AI-powered study assistant with NLP-driven text summarization and adaptive learning support designed for students with ADHD and learning disabilities. Modular backend built for future speech-to-text and quiz generation integration.',
    githubLink: 'https://github.com/thilak0105',
    liveLink: '',
  },
]
