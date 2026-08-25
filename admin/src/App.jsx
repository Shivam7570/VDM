import React, { useState, useEffect } from 'react';
import { apiService } from './services/api';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardOverview from './components/DashboardOverview';
import ServicesManager from './components/ServicesManager';
import AuditManager from './components/AuditManager';
import ContactManager from './components/ContactManager';
import LoginForm from './components/LoginForm';
import DeleteModal from './components/DeleteModal';
import Toast from './components/Toast';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Entity Datasets
  const [services, setServices] = useState([]);
  const [audits, setAudits] = useState([]);
  const [contacts, setContacts] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);

  // Toast Notifications State
  const [toasts, setToasts] = useState([]);

  // Delete Confirmation Modal State
  const [deleteConfig, setDeleteConfig] = useState({
    isOpen: false,
    title: '',
    itemName: '',
    onConfirm: null,
  });

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Check stored auth session
  useEffect(() => {
    const currentUser = apiService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  // Fetch data when authenticated
  const loadAllData = async () => {
    setIsLoading(true);
    try {
      const [servicesData, auditsData, contactsData] = await Promise.all([
        apiService.getServices(),
        apiService.getAudits(),
        apiService.getContacts(),
      ]);

      setServices(servicesData || []);
      setAudits(auditsData || []);
      setContacts(contactsData || []);
      setIsLive(true);
    } catch (err) {
      console.warn('Backend server offline, running with responsive fallback state', err);
      setIsLive(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      loadAllData();
    }
  }, [user]);

  // Auth Handlers
  const handleLogin = async (email, password) => {
    try {
      const authResult = await apiService.login(email, password);
      setUser(authResult.user);
      addToast(`Welcome back, ${authResult.user.name || 'Admin'}!`, 'success');
    } catch (err) {
      addToast(err.message || 'Login failed', 'danger');
    }
  };

  const handleLogout = () => {
    apiService.logout();
    setUser(null);
    addToast('Logged out successfully', 'info');
  };

  // --- SERVICES CRUD HANDLERS ---
  const handleSaveService = async (id, serviceData) => {
    try {
      if (id) {
        // UPDATE SERVICE
        const updated = await apiService.updateService(id, serviceData);
        setServices((prev) => prev.map((s) => (s._id === id ? updated : s)));
        addToast(`Service "${updated.title}" updated successfully!`, 'success');
      } else {
        // CREATE SERVICE
        const created = await apiService.createService(serviceData);
        setServices((prev) => [created, ...prev]);
        addToast(`Service "${created.title}" created successfully!`, 'success');
      }
    } catch (err) {
      addToast(`Failed to save service: ${err.message}`, 'danger');
    }
  };

  const confirmDeleteService = (service) => {
    setDeleteConfig({
      isOpen: true,
      title: 'Delete Service',
      itemName: service.title,
      onConfirm: async () => {
        try {
          await apiService.deleteService(service._id);
          setServices((prev) => prev.filter((s) => s._id !== service._id));
          addToast(`Service "${service.title}" has been deleted.`, 'danger');
        } catch (err) {
          addToast(`Delete failed: ${err.message}`, 'danger');
        } finally {
          setDeleteConfig((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  // --- AUDIT REQUESTS CRUD HANDLERS ---
  const handleUpdateAuditStatus = async (id, status) => {
    try {
      const updated = await apiService.updateAuditStatus(id, status);
      setAudits((prev) => prev.map((a) => (a._id === id ? updated : a)));
      addToast(`Audit request status updated to "${status}"!`, 'success');
    } catch (err) {
      addToast(`Failed to update status: ${err.message}`, 'danger');
    }
  };

  const confirmDeleteAudit = (audit) => {
    setDeleteConfig({
      isOpen: true,
      title: 'Delete Audit Request',
      itemName: `Audit from ${audit.name}`,
      onConfirm: async () => {
        try {
          await apiService.deleteAudit(audit._id);
          setAudits((prev) => prev.filter((a) => a._id !== audit._id));
          addToast(`Audit request deleted successfully.`, 'danger');
        } catch (err) {
          addToast(`Delete failed: ${err.message}`, 'danger');
        } finally {
          setDeleteConfig((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  // --- CONTACT MESSAGES CRUD HANDLERS ---
  const handleToggleContactRead = async (id, isRead) => {
    try {
      const updated = await apiService.markContactRead(id, isRead);
      setContacts((prev) => prev.map((c) => (c._id === id ? updated : c)));
      addToast(isRead ? 'Message marked as read' : 'Message marked as unread', 'info');
    } catch (err) {
      addToast(`Failed to update message: ${err.message}`, 'danger');
    }
  };

  const confirmDeleteContact = (contact) => {
    setDeleteConfig({
      isOpen: true,
      title: 'Delete Contact Inquiry',
      itemName: `Message from ${contact.name}`,
      onConfirm: async () => {
        try {
          await apiService.deleteContact(contact._id);
          setContacts((prev) => prev.filter((c) => c._id !== contact._id));
          addToast(`Contact message deleted successfully.`, 'danger');
        } catch (err) {
          addToast(`Delete failed: ${err.message}`, 'danger');
        } finally {
          setDeleteConfig((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  if (!user) {
    return (
      <>
        <Toast toasts={toasts} onClose={removeToast} />
        <LoginForm onLogin={handleLogin} />
      </>
    );
  }

  const navCounts = {
    services: services.length,
    auditsPending: audits.filter((a) => a.status === 'pending').length,
    contactsUnread: contacts.filter((c) => !c.isRead).length,
  };

  return (
    <div className="app-container">
      <Toast toasts={toasts} onClose={removeToast} />

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteConfig.isOpen}
        title={deleteConfig.title}
        itemName={deleteConfig.itemName}
        onConfirm={deleteConfig.onConfirm}
        onCancel={() => setDeleteConfig((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        counts={navCounts}
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Content Workspace */}
      <main className="main-content">
        <Header
          activeTab={activeTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onRefresh={loadAllData}
          isLive={isLive}
        />

        {activeTab === 'dashboard' && (
          <DashboardOverview
            services={services}
            audits={audits}
            contacts={contacts}
            setActiveTab={setActiveTab}
            onEditService={() => setActiveTab('services')}
            onDeleteService={confirmDeleteService}
            onUpdateAuditStatus={handleUpdateAuditStatus}
            onDeleteAudit={confirmDeleteAudit}
          />
        )}

        {activeTab === 'services' && (
          <ServicesManager
            services={services}
            onSaveService={handleSaveService}
            onDeleteService={confirmDeleteService}
            searchTerm={searchTerm}
          />
        )}

        {activeTab === 'audits' && (
          <AuditManager
            audits={audits}
            onUpdateStatus={handleUpdateAuditStatus}
            onDeleteAudit={confirmDeleteAudit}
            searchTerm={searchTerm}
          />
        )}

        {activeTab === 'contacts' && (
          <ContactManager
            contacts={contacts}
            onToggleRead={handleToggleContactRead}
            onDeleteContact={confirmDeleteContact}
            searchTerm={searchTerm}
          />
        )}
      </main>
    </div>
  );
}
