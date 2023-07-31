// components/project/header/AuthModal.tsx
import React, { useState } from 'react';
import styles from './styles';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (inn: string, dateOfBirth: string) => void;
}

function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
    const [inn, setInn] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');

    const handleInnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.slice(0, 12);
        setInn(value);
    };

    const handleDateOfBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfBirth(event.target.value);
    };

    const handleLogin = () => {
        onLogin(inn, dateOfBirth);
    };

    return (
        <>
            {isOpen && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modal}>
                        <div style={styles.modalHeader}>
                            <span style={styles.modalTitle}>Вход</span>
                            <span style={styles.modalCloseButton} onClick={onClose}>
                                &times;
                            </span>
                        </div>
                        <div style={styles.modalContent}>
                            <label style={styles.label}>ИНН</label>
                            <input
                                type="text"
                                placeholder="Введите ваш ИНН"
                                value={inn}
                                onChange={handleInnChange}
                                style={styles.inputField}
                            />
                            <label style={styles.label}>Дата рождения</label>
                            <input
                                type="date"
                                placeholder="Введите вашу дату рождения"
                                value={dateOfBirth}
                                onChange={handleDateOfBirthChange}
                                style={styles.inputField}
                            />
                            <button onClick={handleLogin} style={styles.modalButton}>
                                Вход
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AuthModal;
