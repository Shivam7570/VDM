import React from 'react';

export default function DashboardOverview({ 
  services, 
  audits, 
  contacts, 
  setActiveTab, 
  onEditService, 
  onDeleteService,
  onUpdateAuditStatus,
  onDeleteAudit
}) {
  const activeServicesCount = services.filter(s => s.isActive).length;
  const pendingAudits = audits.filter(a => a.status === 'pending');
  const unreadMessages = contacts.filter(c => !c.isRead);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Metric Cards Grid */}
      <div className="stats-grid">
        <div className="stat-card" onClick={() => setActiveTab('services')} style={{ cursor: 'pointer' }}>
          <div className="stat-icon-wrapper" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
            🛠️
          </div>
          <div className="stat-info">
            <h3>{services.length}</h3>
            <p>Total Services ({activeServicesCount} Active)</p>
          </div>
        </div>

        <div className="stat-card" onClick={() => setActiveTab('audits')} style={{ cursor: 'pointer' }}>
          <div className="stat-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
            📋
          </div>
          <div className="stat-info">
            <h3>{pendingAudits.length}</h3>
            <p>Pending Audits ({audits.length} Total)</p>
          </div>
        </div>

        <div className="stat-card" onClick={() => setActiveTab('contacts')} style={{ cursor: 'pointer' }}>
          <div className="stat-icon-wrapper" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171' }}>
            💬
          </div>
          <div className="stat-info">
            <h3>{unreadMessages.length}</h3>
            <p>Unread Inquiries ({contacts.length} Total)</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
            ⚡
          </div>
          <div className="stat-info">
            <h3>100%</h3>
            <p>System Health & API</p>
          </div>
        </div>
      </div>

      {/* Grid of Recent Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* Quick Services Panel */}
        <div className="glass-panel">
          <div className="panel-header">
            <div className="panel-title">
              <span>🛠️</span>
              <span>Services Quick Management</span>
            </div>
            <button className="btn btn-secondary" onClick={() => setActiveTab('services')}>
              View All ➔
            </button>
          </div>

          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Service Title</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.slice(0, 4).map((service) => (
                  <tr key={service._id}>
                    <td>
                      <strong style={{ color: '#fff', fontSize: '0.875rem' }}>{service.title}</strong>
                    </td>
                    <td>
                      <span className={`badge ${service.isActive ? 'badge-active' : 'badge-inactive'}`}>
                        {service.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <div className="actions-cell" style={{ justifyContent: 'flex-end' }}>
                        <button 
                          className="btn-icon btn-edit" 
                          onClick={() => { setActiveTab('services'); onEditService(service); }}
                          title="Update Service"
                        >
                          ✏️
                        </button>
                        <button 
                          className="btn-icon btn-delete" 
                          onClick={() => onDeleteService(service)}
                          title="Delete Service"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Pending Audits Panel */}
        <div className="glass-panel">
          <div className="panel-header">
            <div className="panel-title">
              <span>📋</span>
              <span>Pending Audit Requests</span>
            </div>
            <button className="btn btn-secondary" onClick={() => setActiveTab('audits')}>
              View All ➔
            </button>
          </div>

          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Status Update</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {audits.slice(0, 4).map((audit) => (
                  <tr key={audit._id}>
                    <td>
                      <div>
                        <strong style={{ color: '#fff', fontSize: '0.85rem' }}>{audit.name}</strong>
                        <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{audit.email}</div>
                      </div>
                    </td>
                    <td>
                      <select
                        className="form-select"
                        value={audit.status || 'pending'}
                        onChange={(e) => onUpdateStatus(audit._id, e.target.value)}
                        style={{ padding: '0.2rem 0.4rem', fontSize: '0.75rem', width: 'auto' }}
                      >
                        <option value="pending">Pending</option>
                        <option value="in-review">In Review</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>
                    <td>
                      <div className="actions-cell" style={{ justifyContent: 'flex-end' }}>
                        <button 
                          className="btn-icon btn-delete" 
                          onClick={() => onDeleteAudit(audit)}
                          title="Delete Audit"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
