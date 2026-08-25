import React from 'react';

export default function Sidebar({ activeTab, setActiveTab, counts, user, onLogout }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'services', label: 'Services', icon: '🛠️', count: counts?.services },
    { id: 'audits', label: 'Audit Requests', icon: '📋', count: counts?.auditsPending, badgeColor: '#f59e0b' },
    { id: 'contacts', label: 'Messages', icon: '💬', count: counts?.contactsUnread, badgeColor: '#ef4444' },
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-logo">
          <div className="logo-badge">V</div>
          <div className="logo-text">
            <h1>VDM Admin</h1>
            <p>Control Panel</p>
          </div>
        </div>

        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.count > 0 && (
                <span 
                  className="nav-badge" 
                  style={item.badgeColor ? { background: item.badgeColor } : {}}
                >
                  {item.count}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="user-card">
          <div className="user-avatar">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
          </div>
          <div className="user-info" style={{ flex: 1, minWidth: 0 }}>
            <h4 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {user?.name || 'Administrator'}
            </h4>
            <p>{user?.email || 'admin@vdm.com'}</p>
          </div>
          <button 
            className="btn-icon btn-secondary" 
            onClick={onLogout}
            title="Logout"
            style={{ width: '30px', height: '30px' }}
          >
            🚪
          </button>
        </div>
      </div>
    </aside>
  );
}
