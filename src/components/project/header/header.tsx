import { logo, profile } from '../../../constants/images';
import styles from './styles';
import './style.css';
import BlueButton from "../../ui/button/BlueButton";
import globalStyles from "../../../constants/globalStyles";
import {getPersonId} from "../../../api/getPersonId/getPersonId";

interface HeaderProps {
    setIsAuthorized: (isAuthorized: boolean) => void;
    isMobile: boolean;
}

function Header({ setIsAuthorized, isMobile }: HeaderProps) {
    const logout = async () => {
        localStorage.removeItem('personId');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('patronymic');
        localStorage.removeItem('name');
        localStorage.removeItem('fullName');
        localStorage.removeItem('patent');
        setIsAuthorized(false);
    };
    return (
        <header style={{...styles.header}}>
            <div style={{...styles.headerContainer}}>
                <div style={{...styles.itemContainer, cursor: "pointer"}}>
                    <img style={styles.logo} src={logo} alt="Логотип" />
                    {!isMobile && <span style={{...styles.headerTitle, ...globalStyles.textBlue, ...globalStyles.textBold, ...globalStyles.text24}}>Личный кабинет мигранта</span>}
                </div>

                <div style={styles.exit}>
                    <BlueButton text="выход" myStyles={styles.exitButton} onClick={logout} />
                    <div style={styles.itemContainer}>
                        <img
                            src={profile}
                            alt="Профиль"
                            style={styles.avatarImg}
                        />
                        {!isMobile &&
                        (
                            <span style={{ ...styles.headerName, ...globalStyles.textBlue, ...globalStyles.text12 }}>
                                {localStorage.getItem('fullName')}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
