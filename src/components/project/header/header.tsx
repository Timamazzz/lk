import React from 'react';
import {logo, profile} from "../../../constants/images";
import styles from "./styles";

function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.headerContainer}>

                <div style={styles.itemContainer}>
                    <img src={logo} />
                    <text style={styles.headerTitle}>Личный кабинет мигранта</text>
                </div>

                <div style={styles.itemContainer}>
                    <img src={profile}/>
                    <text style={styles.headerTitle}>вход</text>
                </div>
            </div>
        </header>
    );
}

export default Header;
