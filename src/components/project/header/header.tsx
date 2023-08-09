// components/project/header/header.tsx
import React, { useState, useEffect } from 'react';
import { logo, profile } from '../../../constants/images';
import styles from './styles';
import { usePersonId } from '../../../api/getPersonId/getPersonId';
import AuthModal from "../AuthModal/AuthModal";
import LogoutModal from "../LogoutModal/LogoutModal";
import './style.css';

interface HeaderProps {
    isAuthorized: boolean;
    setIsAuthorized: (isAuthorized: boolean) => void;
}

function Header({ isAuthorized, setIsAuthorized }: HeaderProps) {
    const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState<boolean>(false);
    const { personId, getPersonId } = usePersonId();
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 768;
    useEffect(() => {
        const savedPersonId = localStorage.getItem('personId');
        if (savedPersonId) {
            setIsAuthorized(true);
        }
        else
        {
            setLoginModalOpen(true);
        }
    }, [setIsAuthorized]);

    const openLoginModal = () => {
        setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };

    const openLogoutModal = () => {
        setLogoutModalOpen(true);
    };

    const closeLogoutModal = () => {
        setLogoutModalOpen(false);
    };

    const handleLogin = async (inn: string, dateOfBirth: string) => {
        try {
            await getPersonId(inn, dateOfBirth);
            if (localStorage.getItem('personId') != null) {
                setIsAuthorized(true);
                closeLoginModal();
            } else {
                console.error('Ошибка получения personId');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('personId');
        localStorage.removeItem('name');
        localStorage.removeItem('patent');
        setIsAuthorized(false);
        closeLogoutModal();
    };

    return (
        <header style={{...styles.header, display: isMobile? 'none' : ''}}>
            <div style={styles.headerContainer}>
                <div style={styles.itemContainer}>
                    <img style={styles.logo} src={logo} alt="Логотип" />
                    <span style={styles.headerTitle}>Личный кабинет мигранта</span>
                </div>

                {isAuthorized ? (
                    <div style={styles.itemContainer} onClick={openLogoutModal}>
                        <img
                            src={profile}
                            alt="Профиль"
                            style={styles.avatarImg}
                        />
                        <span style={{ ...styles.headerName, cursor: 'pointer' }}>{localStorage.getItem('name') !== undefined? localStorage.getItem('name') : 'Имени нет в ответе!'}</span>
                    </div>
                ) : (
                    <div style={styles.itemContainer} onClick={openLoginModal}>
                        <img src={profile} alt="Профиль" style={styles.avatarImg} />
                        <span style={styles.headerTitle}>вход</span>
                    </div>
                )}
            </div>

            <AuthModal
                isOpen={isLoginModalOpen}
                onClose={closeLoginModal}
                onLogin={handleLogin}
            />

            <LogoutModal
                isOpen={isLogoutModalOpen}
                onClose={closeLogoutModal}
                onLogout={handleLogout}
            />
        </header>
    );
}

export default Header;
