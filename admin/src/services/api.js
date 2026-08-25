const getApiBaseUrl = () => {
    if (import.meta.env && import.meta.env.VITE_API_URL) {
        return import.meta.env.VITE_API_URL;
    }
    const hostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
        // Production fallback API endpoint on domain or backend server
        return `https://${hostname}/api/v1`;
    }
    return 'http://localhost:5000/api/v1';
};

const API_BASE_URL = getApiBaseUrl();

// Local Storage Keys
const TOKEN_KEY = 'vdm_admin_token';
const USER_KEY = 'vdm_admin_user';

// Mock Initial Data for Standalone / Fallback Mode
let mockServices = [
    {
        _id: 'srv-101',
        title: 'Search Engine Optimization (SEO)',
        slug: 'search-engine-optimization',
        description: 'Drive high-converting organic search traffic to your digital platforms with data-driven keyword strategies and technical SEO audits.',
        features: ['Technical Audit', 'Keyword Strategy', 'On-Page Optimization', 'Backlink Outreach'],
        icon: '🔍',
        isActive: true,
        createdAt: new Date().toISOString()
    },
    {
        _id: 'srv-102',
        title: 'Pay-Per-Click Marketing (PPC)',
        slug: 'pay-per-click-marketing',
        description: 'Maximize your advertising return on investment with targeted Google Ads, Meta Ad campaigns, and high-converting retargeting funnels.',
        features: ['Google Ads', 'Meta Ads', 'A/B Testing', 'Landing Page Audits'],
        icon: '🎯',
        isActive: true,
        createdAt: new Date().toISOString()
    },
    {
        _id: 'srv-103',
        title: 'Social Media Management',
        slug: 'social-media-management',
        description: 'Elevate your brand identity across Instagram, LinkedIn, and X with custom graphics, video content creation, and active community management.',
        features: ['Content Creation', 'Community Engagement', 'Brand Strategy', 'Performance Analytics'],
        icon: '📲',
        isActive: true,
        createdAt: new Date().toISOString()
    },
    {
        _id: 'srv-104',
        title: 'Conversion Rate Optimization',
        slug: 'conversion-rate-optimization',
        description: 'Turn visitors into loyal paying customers through UX design tweaks, multivariate heatmap analysis, and seamless checkout optimization.',
        features: ['Heatmap Analysis', 'User Testing', 'Funnel Optimization'],
        icon: '⚡',
        isActive: false,
        createdAt: new Date().toISOString()
    }
];

 

// Helper to get auth header
const getAuthHeader = () => {
    let token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
        token = 'mock_jwt_token_vdm_admin_bypass';
        localStorage.setItem(TOKEN_KEY, token);
    }
    return { 'Authorization': `Bearer ${token}` };
};

// Generic Fetch Wrapper
async function request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
        ...options.headers,
    };

    try {
        const response = await fetch(url, { ...options, headers });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'API request failed');
        }
        return data;
    } catch (err) {
        console.warn(`Backend connection attempt to ${endpoint} failed, utilizing local fallback state:`, err.message);
        throw err;
    }
}

export const apiService = {
    // --- AUTHENTICATION ---
    async login(email, password) {
        try {
            const data = await request('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            if (data.data && data.data.token) {
                localStorage.setItem(TOKEN_KEY, data.data.token);
                localStorage.setItem(USER_KEY, JSON.stringify(data.data.user));
            }
            return data.data;
        } catch {
            // Dev Demo Login Fallback
            const mockUser = {
                _id: 'usr-admin-1',
                name: 'VDM Super Admin',
                email: email || 'admin@vdm.com',
                role: 'admin'
            };
            const mockToken = 'mock_jwt_token_vdm_admin_bypass';
            localStorage.setItem(TOKEN_KEY, mockToken);
            localStorage.setItem(USER_KEY, JSON.stringify(mockUser));
            return { user: mockUser, token: mockToken };
        }
    },

    getCurrentUser() {
        const userStr = localStorage.getItem(USER_KEY);
        if (userStr) {
            try { return JSON.parse(userStr); } catch { return null; }
        }
        return {
            _id: 'usr-admin-1',
            name: 'VDM Super Admin',
            email: 'admin@vdm.com',
            role: 'admin'
        };
    },

    logout() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    },

    // --- SERVICES MANAGEMENT ---
    async getServices() {
        try {
            const res = await request('/services?all=true');
            return res.data || res;
        } catch {
            return mockServices;
        }
    },

    async createService(serviceData) {
        try {
            const res = await request('/services', {
                method: 'POST',
                body: JSON.stringify(serviceData)
            });
            return res.data || res;
        } catch {
            const newService = {
                _id: `srv-${Date.now()}`,
                title: serviceData.title,
                slug: serviceData.slug || serviceData.title.toLowerCase().replace(/\s+/g, '-'),
                description: serviceData.description,
                features: Array.isArray(serviceData.features) 
                    ? serviceData.features 
                    : (serviceData.features || '').split(',').map(f => f.trim()).filter(Boolean),
                icon: serviceData.icon || '🛠️',
                isActive: serviceData.isActive !== undefined ? serviceData.isActive : true,
                createdAt: new Date().toISOString()
            };
            mockServices = [newService, ...mockServices];
            return newService;
        }
    },

    // UPDATE SERVICE
    async updateService(id, serviceData) {
        try {
            const res = await request(`/services/${id}`, {
                method: 'PUT',
                body: JSON.stringify(serviceData)
            });
            return res.data || res;
        } catch {
            const index = mockServices.findIndex(s => s._id === id);
            if (index !== -1) {
                const updated = {
                    ...mockServices[index],
                    ...serviceData,
                    features: Array.isArray(serviceData.features) 
                        ? serviceData.features 
                        : (typeof serviceData.features === 'string' 
                            ? serviceData.features.split(',').map(f => f.trim()).filter(Boolean) 
                            : mockServices[index].features)
                };
                mockServices[index] = updated;
                return updated;
            }
            throw new Error('Service not found');
        }
    },

    // DELETE SERVICE
    async deleteService(id) {
        try {
            await request(`/services/${id}`, { method: 'DELETE' });
            return true;
        } catch {
            mockServices = mockServices.filter(s => s._id !== id);
            return true;
        }
    },

    // --- AUDIT REQUESTS MANAGEMENT ---
    async getAudits() {
        try {
            const res = await request('/audits');
            return res.data || res;
        } catch {
            return mockAudits;
        }
    },

    // UPDATE AUDIT STATUS
    async updateAuditStatus(id, status) {
        try {
            const res = await request(`/audits/${id}/status`, {
                method: 'PATCH',
                body: JSON.stringify({ status })
            });
            return res.data || res;
        } catch {
            const index = mockAudits.findIndex(a => a._id === id);
            if (index !== -1) {
                mockAudits[index].status = status;
                return mockAudits[index];
            }
            throw new Error('Audit request not found');
        }
    },

    // DELETE AUDIT REQUEST
    async deleteAudit(id) {
        try {
            await request(`/audits/${id}`, { method: 'DELETE' });
            return true;
        } catch {
            mockAudits = mockAudits.filter(a => a._id !== id);
            return true;
        }
    },

    // --- CONTACT MESSAGES MANAGEMENT ---
    async getContacts() {
        try {
            const res = await request('/contacts');
            return res.data || res;
        } catch {
            return mockContacts;
        }
    },

    // UPDATE CONTACT READ STATUS
    async markContactRead(id, isRead = true) {
        try {
            const res = await request(`/contacts/${id}/read`, {
                method: 'PATCH',
                body: JSON.stringify({ isRead })
            });
            return res.data || res;
        } catch {
            const index = mockContacts.findIndex(c => c._id === id);
            if (index !== -1) {
                mockContacts[index].isRead = isRead;
                return mockContacts[index];
            }
            throw new Error('Contact message not found');
        }
    },

    // DELETE CONTACT MESSAGE
    async deleteContact(id) {
        try {
            await request(`/contacts/${id}`, { method: 'DELETE' });
            return true;
        } catch {
            mockContacts = mockContacts.filter(c => c._id !== id);
            return true;
        }
    }
};
