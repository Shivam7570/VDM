const API_BASE_URL = 'http://localhost:5000/api/v1';

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
            throw new Error(data.message || 'Failed to submit audit request');
        }
        return data;
    } catch (error) {
        console.error('Audit API Error:', error);
        throw error;
    }
};

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
            throw new Error(data.message || 'Failed to submit contact message');
        }
        return data;
    } catch (error) {
        console.error('Contact API Error:', error);
        throw error;
    }
};
