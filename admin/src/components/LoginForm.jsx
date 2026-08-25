import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('admin@vdm.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onLogin(email, password);
    setLoading(false);
  };

  const handleQuickDemo = async () => {
    setLoading(true);
    await onLogin('admin@vdm.com', 'admin123');
    setLoading(false);
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-badge" style={{ margin: '0 auto', width: '56px', height: '56px', fontSize: '1.75rem' }}>
            V
          </div>
          <h2>VDM Admin Panel</h2>
          <p>Management Portal for Services, Audits & Messages</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@vdm.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', fontSize: '0.95rem' }} disabled={loading}>
            {loading ? 'Authenticating...' : '🔐 Sign In to Control Panel'}
          </button>
        </form>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            Want instant access without typing credentials?
          </p>
          <button 
            className="btn btn-secondary" 
            style={{ width: '100%', padding: '0.65rem' }}
            onClick={handleQuickDemo}
            disabled={loading}
          >
            ⚡ Quick Admin Access
          </button>
        </div>
      </div>
    </div>
  );
}
