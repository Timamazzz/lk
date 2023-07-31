import React, { useEffect, useState } from 'react';
import styles from './styles';
import Header from './components/project/header/header';
import Main from './screens/Main/Main';
import Home from './screens/Home/Home';

function App() {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

    useEffect(() => {
        const savedPersonId = localStorage.getItem('personId');
        if (savedPersonId) {
            setIsAuthorized(true);
        }
    }, []);

    return (
        <div style={styles.App}>
            <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />
            {isAuthorized ? <Home /> : <Main />}
        </div>
    );
}

export default App;
