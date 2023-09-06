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
    return (
        <div style={{...styles.container, marginTop: isMobile? 0 : 122}}>
            {/*<Patent/>*/}
        </div>
    );
}

export default Home;
