import React, { useState } from 'react';
import { exportToExcel, exportSingleUserExcel, parseMessageFields } from '../utils/excelExport';
import { exportToPDF, exportSingleUserPDF } from '../utils/pdfExport';

export default function AuditManager({ audits, onUpdateStatus, onDeleteAudit, searchTerm }) {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('all');
  const [activeAuditDetail, setActiveAuditDetail] = useState(null);

  // Column Mapping for Formatted Exports
  const exportColumns = [
    { key: 'name', label: 'Client / User Name' },
    { key: 'email', label: 'Email Address' },
    { key: 'phone', label: 'Phone Number' },
    { key: 'website', label: 'Website / Link' },
    { 
      key: 'service', 
      label: 'Primary Interest / Service',
      formatter: (val, row) => parseMessageFields(row.message).service || 'Marketing Audit'
    },
    { 
      key: 'budget', 
      label: 'Monthly Budget / Business Type',
      formatter: (val, row) => parseMessageFields(row.message).budget || 'N/A'
    },
    { 
      key: 'goals', 
      label: 'Goals / Full Message',
      formatter: (val, row) => parseMessageFields(row.message).goals || row.message || ''
    },
    { key: 'status', label: 'Audit Status', formatter: (val) => (val || 'pending').toUpperCase() },
    { key: 'createdAt', label: 'Date Submitted', formatter: (val) => val ? new Date(val).toLocaleString() : '' },
  ];

  // Filter Audits
  const filteredAudits = audits.filter(audit => {
    const matchesSearch = 
      audit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      audit.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (audit.website && audit.website.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (audit.message && audit.message.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = selectedStatusFilter === 'all' || audit.status === selectedStatusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'in-review':
        return <span className="badge badge-review">In Review</span>;
      case 'completed':
        return <span className="badge badge-completed">Completed</span>;
      default:
        return <span className="badge badge-pending">Pending</span>;
    }
  };

  // EXCEL EXPORT HANDLERS
  const handleExportExcelAll = () => {
    const filename = `VDM_Audit_Requests_${new Date().toISOString().slice(0, 10)}.csv`;
    exportToExcel(filename, filteredAudits, exportColumns);
  };

  const handleExportExcelSingle = (audit) => {
    const safeName = (audit.name || 'User').replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `Audit_Request_${safeName}.csv`;
    exportSingleUserExcel(filename, audit, exportColumns);
  };

  // PDF EXPORT HANDLERS
  const handleExportPDFAll = () => {
    exportToPDF('Audit Requests Report', 'Structured Client Leads & Audit Queries', filteredAudits, exportColumns);
  };

  const handleExportPDFSingle = (audit) => {
    exportSingleUserPDF('Audit Lead Record', audit, exportColumns);
  };

  return (
    <div className="glass-panel">
      <div className="panel-header">
        <div className="panel-title">
          <span>📋</span>
          <span>Audit Requests ({filteredAudits.length})</span>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Download PDF Report Button */}
          <button 
            className="btn btn-primary" 
            onClick={handleExportPDFAll}
            title="Download all audit records in structured PDF report format"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}
          >
            📄 Download PDF Report
          </button>

          {/* Download All Excel Sheet Button */}
          <button 
            className="btn btn-primary" 
            onClick={handleExportExcelAll}
            title="Download all audit records in Excel sheet format"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', background: 'linear-gradient(135deg, #10b981, #059669)' }}
          >
            📥 Download Excel
          </button>

          {/* Filter Chips */}
          <div style={{ display: 'flex', gap: '0.3rem' }}>
            {['all', 'pending', 'in-review', 'completed'].map((st) => (
              <button
                key={st}
                className={`btn btn-secondary ${selectedStatusFilter === st ? 'btn-primary' : ''}`}
                onClick={() => setSelectedStatusFilter(st)}
                style={{ 
                  padding: '0.35rem 0.75rem', 
                  fontSize: '0.775rem',
                  textTransform: 'capitalize' 
                }}
              >
                {st === 'all' ? 'All Requests' : st}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Client / Lead</th>
              <th>Website</th>
              <th>Contact Info</th>
              <th>Status (Update)</th>
              <th>Date Submitted</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAudits.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <div className="empty-state">
                    <div className="empty-state-icon">📄</div>
                    <p>No audit requests found matching your filter criteria.</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredAudits.map((audit) => (
                <tr key={audit._id}>
                  <td>
                    <div>
                      <strong style={{ color: '#fff', fontSize: '0.925rem' }}>{audit.name}</strong>
                      <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>{audit.email}</div>
                    </div>
                  </td>
                  <td>
                    {audit.website ? (
                      <a 
                        href={audit.website.startsWith('http') ? audit.website : `https://${audit.website}`} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ color: 'var(--accent-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}
                      >
                        {audit.website.replace(/^https?:\/\//, '')} ↗
                      </a>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>N/A</span>
                    )}
                  </td>
                  <td>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {audit.phone || 'No phone provided'}
                    </span>
                  </td>
                  <td>
                    {/* Status Update Selector */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {getStatusBadge(audit.status)}
                      <select
                        className="form-select"
                        value={audit.status || 'pending'}
                        onChange={(e) => onUpdateStatus(audit._id, e.target.value)}
                        style={{ padding: '0.25rem 0.5rem', fontSize: '0.775rem', width: 'auto' }}
                      >
                        <option value="pending">Pending</option>
                        <option value="in-review">In Review</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {new Date(audit.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td>
                    <div className="actions-cell" style={{ justifyContent: 'flex-end' }}>
                      {/* PDF Single User Button */}
                      <button 
                        className="btn-icon btn-secondary"
                        onClick={() => handleExportPDFSingle(audit)}
                        title="Download User PDF Document"
                        style={{ color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.1)' }}
                      >
                        📄
                      </button>
                      {/* Excel Single User Button */}
                      <button 
                        className="btn-icon btn-secondary"
                        onClick={() => handleExportExcelSingle(audit)}
                        title="Download User Excel Sheet"
                        style={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.3)', background: 'rgba(52, 211, 153, 0.1)' }}
                      >
                        📥
                      </button>
                      <button 
                        className="btn-icon btn-edit"
                        onClick={() => setActiveAuditDetail(audit)}
                        title="View Details"
                      >
                        👁️
                      </button>
                      <button 
                        className="btn-icon btn-delete"
                        onClick={() => onDeleteAudit(audit)}
                        title="Delete Audit Request"
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

      {/* Audit Detail Modal */}
      {activeAuditDetail && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>📋 Audit Request Details</h3>
              <button className="btn-icon btn-secondary" onClick={() => setActiveAuditDetail(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CLIENT NAME</label>
                  <p style={{ fontWeight: 600, color: '#fff' }}>{activeAuditDetail.name}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>EMAIL</label>
                  <p style={{ color: 'var(--accent-secondary)' }}>{activeAuditDetail.email}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PHONE</label>
                  <p style={{ color: '#fff' }}>{activeAuditDetail.phone || 'None'}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>WEBSITE</label>
                  <p style={{ color: '#fff' }}>{activeAuditDetail.website || 'None'}</p>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>UPDATE STATUS</label>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  {['pending', 'in-review', 'completed'].map((st) => (
                    <button
                      key={st}
                      className={`btn ${activeAuditDetail.status === st ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => {
                        onUpdateStatus(activeAuditDetail._id, st);
                        setActiveAuditDetail({ ...activeAuditDetail, status: st });
                      }}
                      style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', textTransform: 'capitalize' }}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MESSAGE / REQUEST DETAILS</label>
                <div style={{ 
                  background: 'rgba(255,255,255,0.04)', 
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)'
                }}>
                  {activeAuditDetail.message || 'No additional message provided.'}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => handleExportPDFSingle(activeAuditDetail)}
                style={{ color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.4)' }}
              >
                📄 Download PDF
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => handleExportExcelSingle(activeAuditDetail)}
                style={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.4)' }}
              >
                📥 Download Excel
              </button>
              <button 
                className="btn btn-danger" 
                onClick={() => {
                  const toDel = activeAuditDetail;
                  setActiveAuditDetail(null);
                  onDeleteAudit(toDel);
                }}
              >
                🗑️ Delete Request
              </button>
              <button className="btn btn-secondary" onClick={() => setActiveAuditDetail(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
