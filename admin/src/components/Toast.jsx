import React from 'react';

export default function Toast({ toasts, onClose }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className={`toast toast-${toast.type || 'info'}`}
        >
          <span style={{ fontSize: '1.1rem' }}>
            {toast.type === 'success' ? '✅' : toast.type === 'danger' ? '🗑️' : 'ℹ️'}
          </span>
          <div style={{ flex: 1 }}>
            {toast.message}
          </div>
          <button 
            onClick={() => onClose(toast.id)} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-muted)', 
              cursor: 'pointer',
              fontSize: '1rem',
              lineHeight: 1
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
