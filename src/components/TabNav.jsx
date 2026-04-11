const TabNav = ({ tabs, activeTab, onTabClick }) => {
  return (
    <nav className="tab-nav tab-container" aria-label="Section tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          type="button"
          onClick={() => onTabClick(tab.id)}
          aria-current={activeTab === tab.id ? 'page' : undefined}
        >
          <span className="tab-text">{tab.label}</span>
          {activeTab === tab.id ? <span className="tab-active-glow" /> : null}
        </button>
      ))}
    </nav>
  )
}

export default TabNav
