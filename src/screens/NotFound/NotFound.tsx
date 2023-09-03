import React from "react";
import styles from "./styles";
import globalStyles from "../../constants/globalStyles";
import BlueButton from "../../components/ui/button/BlueButton";
import { useNavigate } from 'react-router-dom';


function NotFound({ isAuthorized }: { isAuthorized: boolean }) {
    const navigate = useNavigate();

    const redirectToHomePage = () => {
        if (isAuthorized) {
            navigate('/profile', { replace: true });
        } else {
            navigate('/', { replace: true });
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={globalStyles.textWhite}>Страница не найдена</h2>
            <p style={globalStyles.textWhite}>Возможно, адрес введен неверно или страница была удалена.</p>
            <BlueButton text="На главную" myStyles={{ marginTop: '10px' }} onClick={redirectToHomePage} />
        </div>
    );
}


export default NotFound;
