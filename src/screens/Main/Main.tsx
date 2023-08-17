import React, {useEffect, useState} from 'react';
import styles from "./styles";
import {logo} from "../../constants/images";
import { usePersonId } from '../../api/getPersonId/getPersonId';

interface MainProps {
    isAuthorized: boolean;
    setIsAuthorized: (isAuthorized: boolean) => void;
    isMobile: boolean;
}

function Main({ isAuthorized, setIsAuthorized, isMobile }: MainProps) {

    const { personId, getPersonId } = usePersonId();
    const [inn, setInn] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');

    useEffect(() => {
        const savedPersonId = localStorage.getItem('personId');
        if (savedPersonId) {
            setIsAuthorized(true);
        }
    }, [setIsAuthorized]);

    const handleLogin = async (inn: string, dateOfBirth: string) => {
        try {
            await getPersonId(inn, dateOfBirth);
            if (localStorage.getItem('personId') != null) {
                setIsAuthorized(true);
            } else {
                console.error('Ошибка получения personId');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.slice(0, 12);
        setInn(value);
    };

    const handleDateOfBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfBirth(event.target.value);
    };

    return (
        <div style={{display: 'flex', alignItems: "center", justifyContent:'center'}}>
            {isMobile &&
                <div>
                    <img style={styles.logo} src={logo} alt="Логотип" />

                    <label style={styles.label}>Дата рождения</label>

                    <input
                        type="text"
                        placeholder="ИНН"
                        value={inn}
                        onChange={handleInnChange}
                        style={styles.inputField}
                    />
                    <input
                        type="date"
                        placeholder="Дата рождения"
                        value={dateOfBirth}
                        onChange={handleDateOfBirthChange}
                        style={styles.inputField}
                    />

                    <button onClick={() => handleLogin(inn, dateOfBirth)} style={styles.modalButton}>
                        Проверить
                    </button>
                </div>
            }
        </div>
    );
}

export default Main;
