// VDM Client API Service - Connected Directly to MongoDB Atlas Database

const getApiBaseUrl = () => {
    if (import.meta.env && import.meta.env.VITE_API_URL) {
        let envUrl = import.meta.env.VITE_API_URL.replace(/\/+$/, '');
        return envUrl.endsWith('/api/v1') ? envUrl : `${envUrl}/api/v1`;
    }
    if (typeof window !== 'undefined' && window.VDM_API_URL) {
        let winUrl = window.VDM_API_URL.replace(/\/+$/, '');
        return winUrl.endsWith('/api/v1') ? winUrl : `${winUrl}/api/v1`;
    }
    const hostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost';

    // IP Address pattern (e.g. mobile phone connecting via local WiFi 192.168.x.x)
    if (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(hostname)) {
        return `http://${hostname}:5000/api/v1`;
    }

    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
        return 'https://api.vdigimarks.in/api/v1';
    }
    return 'http://localhost:5000/api/v1';
};

const API_BASE_URL = getApiBaseUrl();

// Local Offline Storage Fallback (only if server is completely unreachable)
const saveOfflineAudit = (auditData) => {
    try {
        const existing = JSON.parse(localStorage.getItem('vdm_offline_audits') || '[]');
        const newRecord = {
            _id: `aud-local-${Date.now()}`,
            ...auditData,
            status: 'pending',
            createdAt: new Date().toISOString()
        };
        existing.unshift(newRecord);
        localStorage.setItem('vdm_offline_audits', JSON.stringify(existing));
        return newRecord;
    } catch (e) {
        console.warn('Could not save to local storage', e);
        return auditData;
    }
};

const saveOfflineContact = (contactData) => {
    try {
        const existing = JSON.parse(localStorage.getItem('vdm_offline_contacts') || '[]');
        const newRecord = {
            _id: `cnt-local-${Date.now()}`,
            ...contactData,
            isRead: false,
            createdAt: new Date().toISOString()
        };
        existing.unshift(newRecord);
        localStorage.setItem('vdm_offline_contacts', JSON.stringify(existing));
        return newRecord;
    } catch (e) {
        console.warn('Could not save to local storage', e);
        return contactData;
    }
};

/**
 * Submits Audit Request lead directly to MongoDB Atlas database
 */
export const submitAuditRequest = async (auditData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/audits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(auditData),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Failed to submit audit request to database');
        }
        return data;
    } catch (error) {
        console.error('[VDM Client API Error]: Live backend request failed:', error.message);
        saveOfflineAudit(auditData);
        throw error;
    }
};

/**
 * Submits Contact Form message lead directly to MongoDB Atlas database
 */
export const submitContactForm = async (contactData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Failed to submit contact message to database');
        }
        return data;
    } catch (error) {
        console.error('[VDM Client API Error]: Live backend request failed:', error.message);
        saveOfflineContact(contactData);
        throw error;
    }
};
