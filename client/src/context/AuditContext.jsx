import React, { createContext, useContext, useState } from 'react';
import RequestAuditModal from '../Component/RequestAuditModal';

const AuditContext = createContext();

export function AuditProvider({ children }) {
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

    const openAuditModal = () => setIsAuditModalOpen(true);
    const closeAuditModal = () => setIsAuditModalOpen(false);

    return (
        <AuditContext.Provider value={{ isAuditModalOpen, openAuditModal, closeAuditModal }}>
            {children}
            <RequestAuditModal isOpen={isAuditModalOpen} onClose={closeAuditModal} />
        </AuditContext.Provider>
    );
}

export function useAudit() {
    const context = useContext(AuditContext);
    if (!context) {
        return {
            isAuditModalOpen: false,
            openAuditModal: () => {},
            closeAuditModal: () => {}
        };
    }
    return context;
}
