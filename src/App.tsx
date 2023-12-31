import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Helmet } from "react-helmet";
import AppRouter from "./navigation/AppRouter";
import config from "../src/config.json"

function App() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    const isMobile = width <= 768;

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('isMobile', isMobile.toString());
    }, [isMobile]);

    useEffect(() => {
        const savedPersonId = localStorage.getItem('personId');
        if (savedPersonId != null) {
            setIsAuthorized(true);
        }
    }, []);



    return (
        <div style={isMobile? {...styles.AppMobile}: {...styles.App}}>
            <Helmet>
                <title>{config.title}</title>
            </Helmet>
            <AppRouter isAuthorized={isAuthorized} setIsAuthorized={(e)=>setIsAuthorized(e)} isMobile={isMobile} />
        </div>
    );
}

export default App;
