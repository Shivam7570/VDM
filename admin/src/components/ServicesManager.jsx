import React, { useState } from 'react';

export default function ServicesManager({ services, onSaveService, onDeleteService, searchTerm }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  
  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [icon, setIcon] = useState('⚡');
  const [isActive, setIsActive] = useState(true);

  // Filter Services by Search Term
  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenAddModal = () => {
    setEditingService(null);
    setTitle('');
    setSlug('');
    setDescription('');
    setFeatures('');
    setIcon('🛠️');
    setIsActive(true);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (service) => {
    setEditingService(service);
    setTitle(service.title || '');
    setSlug(service.slug || '');
    setDescription(service.description || '');
    setFeatures(Array.isArray(service.features) ? service.features.join(', ') : service.features || '');
    setIcon(service.icon || '⚡');
    setIsActive(service.isActive !== false);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const payload = {
      title,
      slug: slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
      description,
      features: features.split(',').map(f => f.trim()).filter(Boolean),
      icon,
      isActive,
    };

    onSaveService(editingService ? editingService._id : null, payload);
    setIsModalOpen(false);
  };

  return (
    <div className="glass-panel">
      <div className="panel-header">
        <div className="panel-title">
          <span>🛠️</span>
          <span>Services Catalog ({filteredServices.length})</span>
        </div>
        <button className="btn btn-primary" onClick={handleOpenAddModal}>
          <span>➕</span> Add New Service
        </button>
      </div>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Icon & Service</th>
              <th>Description</th>
              <th>Features</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <div className="empty-state">
                    <div className="empty-state-icon">🔍</div>
                    <p>No services found matching your search.</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredServices.map((service) => (
                <tr key={service._id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ 
                        fontSize: '1.4rem', 
                        width: '36px', 
                        height: '36px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: 'var(--radius-sm)'
                      }}>
                        {service.icon || '🛠️'}
                      </span>
                      <div>
                        <strong style={{ color: '#fff', fontSize: '0.95rem' }}>{service.title}</strong>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          /{service.slug}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ maxWidth: '280px' }}>
                    <p style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {service.description}
                    </p>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', maxWidth: '200px' }}>
                      {Array.isArray(service.features) && service.features.map((feat, idx) => (
                        <span key={idx} className="chip">{feat}</span>
                      ))}
                    </div>
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
                        onClick={() => handleOpenEditModal(service)}
                        title="Update / Edit Service"
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
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Service Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>{editingService ? '✏️ Update Service' : '➕ Create New Service'}</h3>
              <button className="btn-icon btn-secondary" onClick={() => setIsModalOpen(false)}>✕</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Icon (Emoji)</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={icon} 
                      onChange={(e) => setIcon(e.target.value)}
                      placeholder="e.g. 🎯"
                    />
                  </div>
                  <div className="form-group">
                    <label>Service Title *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Search Engine Optimization"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>URL Slug</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={slug} 
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="Auto-generated if left empty"
                  />
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea 
                    className="form-textarea" 
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detailed explanation of the service offering..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Features (Comma separated)</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={features} 
                    onChange={(e) => setFeatures(e.target.value)}
                    placeholder="Audit, Strategy, Content, Analytics"
                  />
                </div>

                <div className="form-group">
                  <label className="form-checkbox-label">
                    <input 
                      type="checkbox" 
                      className="form-checkbox"
                      checked={isActive} 
                      onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <span>Active & Visible on Website</span>
                  </label>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingService ? 'Save Updates' : 'Create Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
