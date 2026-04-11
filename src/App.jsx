import { useEffect, useMemo, useRef, useState } from 'react'
import ActivityBar from './components/ActivityBar'
import Footer from './components/Footer'
import TabNav from './components/TabNav'
import TopBar from './components/TopBar'
import Achievements from './sections/Achievements'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Hello from './sections/Hello'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Skills from './sections/Skills'

function App() {
  const tabs = useMemo(
    () => [
      { id: 'hello', label: '_hello' },
      { id: 'experience', label: '_experience' },
      { id: 'about_me', label: '_about_me' },
      { id: 'projects', label: '_projects' },
      { id: 'achievements', label: '_achievements' },
      { id: 'skills', label: '_skills' },
      { id: 'resume', label: '_resume' },
      { id: 'contact', label: '_contact' },
    ],
    [],
  )
  const [activeTab, setActiveTab] = useState('hello')
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveTab(visible[0].target.id)
        }
      },
      {
        root: null,
        threshold: [0.25, 0.45, 0.65],
        rootMargin: '-110px 0px -70px 0px',
      },
    )

    tabs.forEach((tab) => {
      const section = sectionRefs.current[tab.id]
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [tabs])

  const onTabClick = (id) => {
    const target = sectionRefs.current[id]
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveTab(id)
    }
  }

  const setSectionRef = (id) => (node) => {
    if (node) {
      sectionRefs.current[id] = node
    }
  }

  return (
    <div className="portfolio-app">
      <TopBar />
      <TabNav tabs={tabs} activeTab={activeTab} onTabClick={onTabClick} />
      <ActivityBar activeTab={activeTab} onNavigate={onTabClick} />

      <main className="portfolio-main">
        <section id="hello" ref={setSectionRef('hello')}>
          <Hello />
        </section>
        <section id="experience" ref={setSectionRef('experience')}>
          <Experience />
        </section>
        <section id="about_me" ref={setSectionRef('about_me')}>
          <AboutMe />
        </section>
        <section id="projects" ref={setSectionRef('projects')}>
          <Projects />
        </section>
        <section id="achievements" ref={setSectionRef('achievements')}>
          <Achievements />
        </section>
        <section id="skills" ref={setSectionRef('skills')}>
          <Skills />
        </section>
        <section id="resume" ref={setSectionRef('resume')}>
          <Resume />
        </section>
        <section id="contact" ref={setSectionRef('contact')}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
