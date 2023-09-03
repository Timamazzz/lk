import React from 'react';
import styles from './styles';
import globalStyles from "../../../constants/globalStyles"; // Файл со стилями модального окна

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

function Modal({ isOpen, onClose, title, message }: ModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            style={styles.modalOverlay}
            onClick={onClose}
        >
            <div style={styles.modalContent}>
                <p style={{ ...globalStyles.text16, ...globalStyles.textBlack, ...globalStyles.textBold, ...globalStyles.textCenter}}>{title}</p>
                <p style={{ ...globalStyles.text16, ...globalStyles.textBlack, ...globalStyles.textCenter}}>{message}</p>
            </div>
        </div>
    );
}

export default Modal;
