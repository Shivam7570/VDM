import React, { useState } from 'react';

export default function ContactManager({ contacts, onToggleRead, onDeleteContact, searchTerm }) {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterRead, setFilterRead] = useState('all');

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

  return (
    <div className="glass-panel">
      <div className="panel-header">
        <div className="panel-title">
          <span>💬</span>
          <span>Contact Inquiries ({filteredContacts.length})</span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['all', 'unread', 'read'].map((st) => (
            <button
              key={st}
              className={`btn btn-secondary ${filterRead === st ? 'btn-primary' : ''}`}
              onClick={() => setFilterRead(st)}
              style={{ 
                padding: '0.35rem 0.85rem', 
                fontSize: '0.775rem',
                textTransform: 'capitalize' 
              }}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Message Snippet</th>
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
                  {/* Expanded width and removed line clamp to show more text */}
                  <td style={{ width: '350px' }}>
                    <p style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)',
                      margin: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
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