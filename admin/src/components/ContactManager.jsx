import React, { useState } from 'react';
import { exportToExcel, exportSingleUserExcel } from '../utils/excelExport';
import { exportToPDF, exportSingleUserPDF } from '../utils/pdfExport';

export default function ContactManager({ contacts, onToggleRead, onDeleteContact, searchTerm }) {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterRead, setFilterRead] = useState('all');

  // Column Mapping for Exporting
  const exportColumns = [
    { key: 'name', label: 'Sender / User Name' },
    { key: 'email', label: 'Email Address' },
    { key: 'phone', label: 'Phone Number' },
    { key: 'subject', label: 'Subject' },
    { key: 'isRead', label: 'Read Status', formatter: (val) => val ? 'Read' : 'Unread' },
    { key: 'message', label: 'Message Content' },
    { key: 'createdAt', label: 'Date Received', formatter: (val) => val ? new Date(val).toLocaleString() : '' },
  ];

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (contact.subject && contact.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRead = 
      filterRead === 'all' || 
      (filterRead === 'unread' && !contact.isRead) ||
      (filterRead === 'read' && contact.isRead);

    return matchesSearch && matchesRead;
  });

  const handleViewMessage = (contact) => {
    setSelectedMessage(contact);
    if (!contact.isRead) {
      onToggleRead(contact._id, true);
    }
  };

  // EXCEL EXPORT HANDLERS
  const handleExportExcelAll = () => {
    const filename = `VDM_Contact_Messages_${new Date().toISOString().slice(0, 10)}.csv`;
    exportToExcel(filename, filteredContacts, exportColumns);
  };

  const handleExportExcelSingle = (contact) => {
    const safeName = (contact.name || 'User').replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `Contact_Message_${safeName}.csv`;
    exportSingleUserExcel(filename, contact, exportColumns);
  };

  // PDF EXPORT HANDLERS
  const handleExportPDFAll = () => {
    exportToPDF('Contact Inquiries Report', 'Structured Client Messages & Inquiries', filteredContacts, exportColumns);
  };

  const handleExportPDFSingle = (contact) => {
    exportSingleUserPDF('Contact Inquiry Record', contact, exportColumns);
  };

  return (
    <div className="glass-panel">
      <div className="panel-header">
        <div className="panel-title">
          <span>💬</span>
          <span>Contact Inquiries ({filteredContacts.length})</span>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Download PDF Report Button */}
          <button 
            className="btn btn-primary" 
            onClick={handleExportPDFAll}
            title="Download all contact records in structured PDF report format"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}
          >
            📄 Download PDF Report
          </button>

          {/* Download All Excel Sheet Button */}
          <button 
            className="btn btn-primary" 
            onClick={handleExportExcelAll}
            title="Download all contact records in Excel sheet format"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', background: 'linear-gradient(135deg, #10b981, #059669)' }}
          >
            📥 Download Excel
          </button>

          {/* Filter Chips */}
          <div style={{ display: 'flex', gap: '0.3rem' }}>
            {['all', 'unread', 'read'].map((st) => (
              <button
                key={st}
                className={`btn btn-secondary ${filterRead === st ? 'btn-primary' : ''}`}
                onClick={() => setFilterRead(st)}
                style={{ 
                  padding: '0.35rem 0.75rem', 
                  fontSize: '0.775rem',
                  textTransform: 'capitalize' 
                }}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Message Content</th>
              <th>Date Received</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <div className="empty-state">
                    <div className="empty-state-icon">📬</div>
                    <p>No contact messages found.</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredContacts.map((contact) => (
                <tr key={contact._id} style={!contact.isRead ? { background: 'rgba(99, 102, 241, 0.05)' } : {}}>
                  <td>
                    <span className={`badge ${contact.isRead ? 'badge-read' : 'badge-unread'}`}>
                      {contact.isRead ? 'Read' : 'New'}
                    </span>
                  </td>
                  <td>
                    <div>
                      <strong style={{ color: '#fff', fontSize: '0.9rem' }}>{contact.name}</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{contact.email}</div>
                    </div>
                  </td>
                  <td style={{ fontWeight: contact.isRead ? 400 : 600 }}>
                    {contact.subject || 'General Inquiry'}
                  </td>
                  <td style={{ maxWidth: '350px' }}>
                    <p style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)',
                      margin: 0,
                      lineHeight: 1.5,
                      whiteSpace: 'pre-wrap'
                    }}>
                      {contact.message}
                    </p>
                  </td>
                  <td>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td>
                    <div className="actions-cell" style={{ justifyContent: 'flex-end' }}>
                      {/* PDF Single User Button */}
                      <button 
                        className="btn-icon btn-secondary"
                        onClick={() => handleExportPDFSingle(contact)}
                        title="Download User PDF Document"
                        style={{ color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.1)' }}
                      >
                        📄
                      </button>
                      {/* Excel Single User Button */}
                      <button 
                        className="btn-icon btn-secondary"
                        onClick={() => handleExportExcelSingle(contact)}
                        title="Download User Excel Sheet"
                        style={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.3)', background: 'rgba(52, 211, 153, 0.1)' }}
                      >
                        📥
                      </button>
                      <button 
                        className="btn-icon btn-edit"
                        onClick={() => handleViewMessage(contact)}
                        title="Read Full Message"
                      >
                        👁️
                      </button>
                      <button 
                        className="btn-icon btn-secondary"
                        onClick={() => onToggleRead(contact._id, !contact.isRead)}
                        title={contact.isRead ? 'Mark Unread' : 'Mark Read'}
                      >
                        {contact.isRead ? '✉️' : '📩'}
                      </button>
                      <button 
                        className="btn-icon btn-delete"
                        onClick={() => onDeleteContact(contact)}
                        title="Delete Message"
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

      {/* Message Modal */}
      {selectedMessage && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>📩 Message Details</h3>
              <button className="btn-icon btn-secondary" onClick={() => setSelectedMessage(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>FROM</label>
                  <p style={{ fontWeight: 600, color: '#fff' }}>{selectedMessage.name}</p>
                  <p style={{ fontSize: '0.825rem', color: 'var(--accent-secondary)' }}>{selectedMessage.email}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PHONE</label>
                  <p style={{ color: '#fff' }}>{selectedMessage.phone || 'N/A'}</p>
                </div>
              </div>

              <div className="form-group">
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SUBJECT</label>
                <p style={{ color: '#fff', fontWeight: 600 }}>{selectedMessage.subject || 'General Inquiry'}</p>
              </div>

              <div className="form-group">
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MESSAGE CONTENT</label>
                <div style={{ 
                  background: 'rgba(255,255,255,0.04)', 
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  fontSize: '0.925rem',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  whiteSpace: 'pre-wrap'
                }}>
                  {selectedMessage.message}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => handleExportPDFSingle(selectedMessage)}
                style={{ color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.4)' }}
              >
                📄 Download PDF
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => handleExportExcelSingle(selectedMessage)}
                style={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.4)' }}
              >
                📥 Download Excel
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  onToggleRead(selectedMessage._id, !selectedMessage.isRead);
                  setSelectedMessage({ ...selectedMessage, isRead: !selectedMessage.isRead });
                }}
              >
                {selectedMessage.isRead ? 'Mark as Unread' : 'Mark as Read'}
              </button>
              <button 
                className="btn btn-danger" 
                onClick={() => {
                  const toDel = selectedMessage;
                  setSelectedMessage(null);
                  onDeleteContact(toDel);
                }}
              >
                🗑️ Delete Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}