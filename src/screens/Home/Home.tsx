import React, { useState } from 'react';
import styles from "./styles";
import Info from "../../components/project/info/info";

interface HomeProps {
    isAuthorized: boolean;
    setIsAuthorized: (isAuthorized: boolean) => void;
    isMobile: boolean;
}

function Home({ isAuthorized, setIsAuthorized, isMobile }: HomeProps) {

    const handleLogout = () => {
        localStorage.removeItem('personId');
        localStorage.removeItem('name');
        localStorage.removeItem('patent');
        setIsAuthorized(false);
        setIsAuthorized(false);
    };

    return (
        <div style={styles.container}>
            <Info/>
            {isMobile &&
                <button onClick={() => handleLogout()} style={styles.modalButton}>
                    Выход
                </button>
            }
        </div>
    );
}

export default Home;
