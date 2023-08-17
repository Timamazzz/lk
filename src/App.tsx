import React, { useEffect, useState } from 'react';
import styles from './styles';
import Header from './components/project/header/header';
import Main from './screens/Main/Main';
import Home from './screens/Home/Home';

function App() {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(window.innerWidth);
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
        const savedPersonId = localStorage.getItem('personId');
        if (savedPersonId) {
            setIsAuthorized(true);
        }
    }, []);

    return (
        <div style={styles.App}>
            <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} isMobile={isMobile} />
            {isAuthorized ?
                <Home isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} isMobile={isMobile} />
                : <Main isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} isMobile={isMobile} />}
        </div>
    );
}

export default App;
