// components/project/header/header.tsx
import React from 'react';
import { logo, profile } from '../../../constants/images';
import styles from './styles';
import './style.css';

interface HeaderProps {
    isAuthorized: boolean;
    setIsAuthorized: (isAuthorized: boolean) => void;
    isMobile: boolean;
}

function Header({ isAuthorized, setIsAuthorized, isMobile }: HeaderProps) {
    return (
        <header style={{...styles.header}}>
            <div style={{...styles.headerContainer, display: isMobile? 'none' : 'flex'}}>
                <div style={styles.itemContainer}>
                    <img style={styles.logo} src={logo} alt="Логотип" />
                    <span style={styles.headerTitle}>Личный кабинет мигранта</span>
                </div>

                {isAuthorized ? (
                    <div style={styles.itemContainer}>
                        <img
                            src={profile}
                            alt="Профиль"
                            style={styles.avatarImg}
                        />
                        <span style={{ ...styles.headerName, cursor: 'pointer' }}>{localStorage.getItem('name') !== undefined? localStorage.getItem('name') : 'Имени нет в ответе!'}</span>
                    </div>
                ) : (
                    <div style={styles.itemContainer}>
                        <img src={profile} alt="Профиль" style={styles.avatarImg} />
                        <span style={styles.headerTitle}>вход</span>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
