// components/project/header/LogoutModal.tsx
import React from 'react';
import styles from './styles';

interface LogoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogout: () => void;
}

function LogoutModal({ isOpen, onClose, onLogout }: LogoutModalProps) {
    return (
        <>
            {isOpen && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modal}>
                        <div style={styles.modalHeader}>
                            <span style={styles.modalTitle}>Выход</span>
                            <span style={styles.modalCloseButton} onClick={onClose}>
                                &times;
                            </span>
                        </div>
                        <div style={styles.modalContent}>
                            <p>Вы действительно хотите выйти из приложения?</p>
                            <button onClick={onLogout} style={styles.modalButton}>
                                Выйти
                            </button>
                            <button onClick={onClose} style={styles.modalButton}>
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LogoutModal;