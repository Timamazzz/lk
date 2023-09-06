import React, {useState} from "react";
import styles from "./styles";
import  "./stylePlaceHolder.css";
import InputMask from "react-input-mask";
import { logo } from "../../constants/images";
import globalStyles from "../../constants/globalStyles";
import BlueButton from "../../components/ui/button/BlueButton";
import Modal from "../../components/ui/Modal/Modal";
import { getPersonId } from "../../api/getPersonId/getPersonId";
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    setIsAuthorized: (isAuthorized: boolean) => void;
}

function Login({ setIsAuthorized }: LoginProps) {
    const [inn, setInn] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [errorTitle, setErrorTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isInnValid, setIsInnValid] = useState(false);
    const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(false);

    const navigate = useNavigate();

    const handleCheck = async () => {
        const dateParts = dateOfBirth.split('.');
        const formattedDateOfBirth = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

        let data = await getPersonId(inn, formattedDateOfBirth);
        if (data != null) {
            setIsAuthorized(true);
        } else {
            setErrorTitle("информация по патенту для текущего лица не найдена");
            setErrorMessage("проверьте правильность ИНН и ДАТЫ РОЖДЕНИЯ");
            setErrorModalOpen(true);
        }
    };
    const handleModalClick = () => {
        setErrorModalOpen(false);
    };
    const isInputValid = (input: string) => input.length > 0;
    const handleInnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInn(inputValue);
        setIsInnValid(isInputValid(inputValue));
    };
    const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setDateOfBirth(inputValue);
        setIsDateOfBirthValid(isInputValid(inputValue));
    };

    return (
        <div style={styles.container}>
            <img src={logo} alt="Logo" style={styles.logo} />
            <p style={{ ...globalStyles.textWhite, ...globalStyles.textBold, ...globalStyles.text24, ...globalStyles.textCenter }}>
                Личный кабинет мигранта.<br />
                Патенты московской области
            </p>
            <div style={styles.formContainer}>
                <InputMask
                    mask="999999999999"
                    maskChar=""
                    placeholder="ИНН"
                    style={{
                        ...styles.input,

                    }}
                    value={inn}
                    onChange={handleInnChange}
                    onFocus={(e) => {
                        e.target.style.outline = 'none';
                    }}
                />
                <InputMask
                    mask="99.99.9999"
                    maskChar=""
                    placeholder="Дата рождения"
                    style={{
                        ...styles.input,
                    }}
                    value={dateOfBirth}
                    onChange={handleDateOfBirthChange}
                    onFocus={(e) => {
                        e.target.style.outline = 'none';
                    }}
                />
            </div>
            <BlueButton text="Проверить" onClick={handleCheck} myStyles={{width: "320px"}} disabled={!isInnValid || !isDateOfBirthValid} />
            <Modal isOpen={errorModalOpen} onClose={handleModalClick} title={errorTitle} message={errorMessage} />
        </div>
    );
}

export default Login;
