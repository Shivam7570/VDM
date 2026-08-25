import React from 'react';

export default function DeleteModal({ isOpen, title, itemName, onConfirm, onCancel, isLoading }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header" style={{ borderBottom: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <h3 style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>⚠️</span> {title || 'Confirm Deletion'}
          </h3>
          <button className="btn-icon btn-secondary" onClick={onCancel}>✕</button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Are you sure you want to delete <strong style={{ color: '#fff' }}>"{itemName}"</strong>?
          </p>
          <div style={{ 
            background: 'rgba(239, 68, 68, 0.08)', 
            border: '1px dashed rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '0.85rem 1rem',
            fontSize: '0.825rem',
            color: '#f87171'
          }}>
            ℹ️ This action cannot be undone. The record will be permanently removed from the database.
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onCancel} disabled={isLoading}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm} disabled={isLoading}>
            {isLoading ? 'Deleting...' : 'Yes, Delete Item'}
          </button>
        </div>
      </div>
    </div>
  );
}
