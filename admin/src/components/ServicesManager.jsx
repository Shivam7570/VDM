import React, { useState } from 'react';
import { exportToExcel, exportSingleUserExcel } from '../utils/excelExport';
import { exportToPDF, exportSingleUserPDF } from '../utils/pdfExport';

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

  // Column Mapping for Exporting
  const exportColumns = [
    { key: 'title', label: 'Service Title' },
    { key: 'slug', label: 'URL Slug' },
    { key: 'description', label: 'Description' },
    { key: 'features', label: 'Features', formatter: (val) => Array.isArray(val) ? val.join(', ') : val },
    { key: 'isActive', label: 'Status', formatter: (val) => val ? 'Active' : 'Inactive' },
    { key: 'createdAt', label: 'Date Created', formatter: (val) => val ? new Date(val).toLocaleString() : '' },
  ];

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

  // EXCEL EXPORT HANDLERS
  const handleExportExcelAll = () => {
    const filename = `VDM_Services_Catalog_${new Date().toISOString().slice(0, 10)}.csv`;
    exportToExcel(filename, filteredServices, exportColumns);
  };

  const handleExportExcelSingle = (service) => {
    const safeName = (service.title || 'Service').replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `Service_${safeName}.csv`;
    exportSingleUserExcel(filename, service, exportColumns);
  };

  // PDF EXPORT HANDLERS
  const handleExportPDFAll = () => {
    exportToPDF('Services Catalog Report', 'Structured List of Digital Services', filteredServices, exportColumns);
  };

  const handleExportPDFSingle = (service) => {
    exportSingleUserPDF('Service Detail Sheet', service, exportColumns);
  };

  return (
    <div className="glass-panel">
      <div className="panel-header">
        <div className="panel-title">
          <span>🛠️</span>
          <span>Services Catalog ({filteredServices.length})</span>
        </div>
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Download PDF Report Button */}
          <button 
            className="btn btn-primary" 
            onClick={handleExportPDFAll}
            title="Download services catalog in structured PDF format"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}
          >
            📄 Download PDF Report
          </button>

          {/* Download Excel Sheet Button */}
          <button 
            className="btn btn-primary" 
            onClick={handleExportExcelAll}
            title="Download services catalog in Excel format"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', background: 'linear-gradient(135deg, #10b981, #059669)' }}
          >
            📥 Download Excel
          </button>

          <button className="btn btn-primary" onClick={handleOpenAddModal}>
            <span>➕</span> Add New Service
          </button>
        </div>
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
                      {/* PDF Single Service Button */}
                      <button 
                        className="btn-icon btn-secondary"
                        onClick={() => handleExportPDFSingle(service)}
                        title="Download Service PDF Sheet"
                        style={{ color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.1)' }}
                      >
                        📄
                      </button>
                      {/* Excel Single Service Button */}
                      <button 
                        className="btn-icon btn-secondary"
                        onClick={() => handleExportExcelSingle(service)}
                        title="Download Service Excel Sheet"
                        style={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.3)', background: 'rgba(52, 211, 153, 0.1)' }}
                      >
                        📥
                      </button>
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
