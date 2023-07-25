// Header.tsx
import React, { useState } from 'react';
import { logo, profile } from "../../../constants/images";
import styles from "./styles";
import {api} from "../../../api/api";

function Header() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [inn, setInn] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');

    const handleHomeClick = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleInnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInn(event.target.value);
    };

    const handleDateOfBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfBirth(event.target.value);
    };

    const handleLogin = async () => {
/*        try {
            const requestData = {
                inn: inn,
                birthday: dateOfBirth,
            };

            const response = await api("check-inn-birthday", "POST", requestData);

            const personId = response.personId;
            // Обработка personId
            console.log("Person ID:", personId);

            // Закрытие модального окна
            setModalOpen(false);
        } catch (error) {
            // Обработка ошибок
            console.error("Error:", error);
        }*/

    };

    return (
        <header style={styles.header}>
            <div style={styles.headerContainer}>
                <div style={styles.itemContainer}>
                    <img src={logo} alt="Логотип" />
                    <span style={styles.headerTitle}>Личный кабинет мигранта</span>
                </div>

                <div style={styles.itemContainer} onClick={handleHomeClick}>
                    <img src={profile} alt="Профиль" />
                    <span style={styles.headerTitle}>вход</span>
                </div>
            </div>

            {isModalOpen && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modal}>
                        <div style={styles.modalHeader}>
                            <span style={styles.modalTitle}>Вход</span>
                            <span style={styles.modalCloseButton} onClick={handleModalClose}>
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
                            <button onClick={handleLogin} style={styles.modalButton}>Вход</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
