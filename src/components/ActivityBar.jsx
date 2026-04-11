import { createElement } from 'react'
import {
  VscFiles,
  VscCode,
  VscFolder,
  VscStarFull,
  VscBriefcase,
  VscTerminal,
  VscFile,
  VscMail,
} from 'react-icons/vsc'

const items = [
  { id: 'hello', icon: VscFiles, label: 'Hello' },
  { id: 'experience', icon: VscBriefcase, label: 'Experience' },
  { id: 'about_me', icon: VscCode, label: 'About' },
  { id: 'projects', icon: VscFolder, label: 'Projects' },
  { id: 'achievements', icon: VscStarFull, label: 'Achievements' },
  { id: 'skills', icon: VscTerminal, label: 'Skills' },
  { id: 'resume', icon: VscFile, label: 'Resume' },
  { id: 'contact', icon: VscMail, label: 'Contact' },
]

const ActivityBar = ({ activeTab, onNavigate }) => {
  return (
    <aside className="activity-bar" aria-label="Section shortcuts">
      {items.map(({ id, icon: IconComponent, label }) => (
        <button
          key={id}
          type="button"
          className={`activity-bar-btn ${activeTab === id ? 'active' : ''}`}
          onClick={() => onNavigate(id)}
          aria-label={`Go to ${label}`}
          aria-controls={id}
          aria-current={activeTab === id ? 'true' : undefined}
          title={label}
        >
          {createElement(IconComponent, { 'aria-hidden': true })}
        </button>
      ))}
    </aside>
  )
}

export default ActivityBar
