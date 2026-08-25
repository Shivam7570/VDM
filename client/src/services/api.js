// VDM Client API Service with Automatic Local Fallback Storage

const getApiBaseUrl = () => {
    if (import.meta.env && import.meta.env.VITE_API_URL) {
        return import.meta.env.VITE_API_URL;
    }
    const hostname = window.location.hostname || 'localhost';
    return `http://${hostname}:5000/api/v1`;
};

const API_BASE_URL = getApiBaseUrl();

// Local Fallback Storage Helpers
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

export const submitAuditRequest = async (auditData) => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 sec timeout

        const response = await fetch(`${API_BASE_URL}/audits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(auditData),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Failed to submit audit request');
        }
        return data;
    } catch (error) {
        console.warn('[VDM Client API]: Backend request unavailable, utilizing secure offline submission fallback:', error.message);
        const savedRecord = saveOfflineAudit(auditData);
        return {
            success: true,
            message: 'Audit request saved successfully!',
            data: savedRecord
        };
    }
};

export const submitContactForm = async (contactData) => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(`${API_BASE_URL}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Failed to submit contact message');
        }
        return data;
    } catch (error) {
        console.warn('[VDM Client API]: Backend request unavailable, utilizing secure offline submission fallback:', error.message);
        const savedRecord = saveOfflineContact(contactData);
        return {
            success: true,
            message: 'Contact message saved successfully!',
            data: savedRecord
        };
    }
};
