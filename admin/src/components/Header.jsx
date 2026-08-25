import React from 'react';

export default function Header({ activeTab, searchTerm, setSearchTerm, onRefresh, isLive }) {
  const getTabTitles = () => {
    switch (activeTab) {
      case 'services':
        return { title: 'Services Management', desc: 'Add, edit, update, or remove digital marketing services' };
      case 'audits':
        return { title: 'Audit Requests', desc: 'Review, update status, and manage client audit requests' };
      case 'contacts':
        return { title: 'Contact Messages', desc: 'View, mark as read, and manage incoming messages' };
      default:
        return { title: 'Dashboard Overview', desc: 'System statistics, quick updates, and recent activity' };
    }
  };

  const { title, desc } = getTabTitles();

  return (
    <header className="top-header">
      <div className="header-title">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button 
          className="btn btn-secondary btn-icon" 
          onClick={onRefresh} 
          title="Refresh Data"
        >
          🔄
        </button>

        <div className="status-pill">
          <span className="status-dot"></span>
          <span>{isLive ? 'Live API' : 'System Active'}</span>
        </div>
      </div>
    </header>
  );
}
