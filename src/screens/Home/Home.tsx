import React, { useState } from 'react';
import styles from "./styles";
import Info from "../../components/project/info/info";
import BlueButton from '../../components/ui/button/BlueButton';

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
        <div style={{...styles.container, marginTop: isMobile? 0 : 122}}>
            <Info/>
            {isMobile &&
              
                  <div style={{marginTop: 20}}>
                    <BlueButton text={'Выход'} onClick={handleLogout} />
                  </div>
            }
        </div>
    );
}

export default Home;
