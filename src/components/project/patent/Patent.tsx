import React, {useEffect, useState} from 'react';
import Message from "../message/message";
import styles from "./styles";
import BlueButton from "../../ui/button/BlueButton";
import globalStyles from "../../../constants/globalStyles";
import {colors} from "../../../constants/colors";
import {useNavigate} from "react-router-dom";

interface PatentProps {
    patent: any;
    isPayment?: boolean;
}

function Patent({patent, isPayment = false}: PatentProps) {
    const [payedDays, setPayedDays] = useState(0)
    const progressPercentage = (payedDays / 365) * 100;
    const [month, setMonth] = useState(1);
    const [sum, setSum] = useState<any>(0)
    const [isDebtEnabled, setIsDebtEnabled] = useState(false);
    const [debtPrice, setDebtPrice] = useState(0);
    const navigate = useNavigate()
    useEffect(() => {
        let currentDate = new Date();
        let payedDate = new Date(patent.payed_to_date);
        let timeDifference = payedDate.getTime() - currentDate.getTime();
        setPayedDays(Math.ceil(timeDifference / (1000 * 3600 * 24)));
    }, []);
    useEffect(()=>{
        if(patent)
            if(isDebtEnabled)
                setSum(month * patent?.price + patent?.debt)
            else
                setSum(month * patent?.price)
        else
            setSum(0)

    },[month, debtPrice, patent])
    const goToPayment = () => {
        if (!isPayment)
            navigate(`payment/${patent.number}`)
    }
    const getColor = (payedDays: number): string => {
        if (payedDays <= 10) {
            return colors.red;
        } else {
            return colors.lightBlue;
        }
    };
    const getTextColor = (payedDays: number): string => {
        if (payedDays < 0) {
            return colors.gray;
        } else {
            return colors.lightBlue;
        }
    };
    const getColorProgress = (payedDays: number): string => {
        if (payedDays <= 10) {
            return "red";
        } else if (payedDays <= 20) {
            return colors.yellow;
        } else {
            return colors.green;
        }
    };
    const handleDebtToggle = () => {
        isDebtEnabled? setDebtPrice(0) : setDebtPrice(patent?.debt)
        setIsDebtEnabled(!isDebtEnabled);
    };
    const handleMonthClick = () => {
        if(month < 12){
            setMonth(month + 1);
        }
    };
    const handleMonthClickMinus = () => {
        if(month > 1){
            setMonth(month - 1);
        }
    };
    function formatDate(dateString: string) {
        if(dateString)
        {
            const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('ru-RU', options);
        }
        return ""
    }



    return (
        <div style={styles.container}>
            {(patent?.messages.length > 0 && !isPayment) &&
                patent.messages.map((message: any, index: number) => (<Message message={message} />))
            }
            <div style={isPayment? styles.patentContainer : styles.paymentPatentContainer}>
                <div style={isPayment? {...styles.headerContainerInfo} : {...styles.headerContainerInfo, cursor: "pointer"}} onClick={goToPayment}>
                    <p style={{...globalStyles.text16 }}>патент №</p>
                    <p style={{...globalStyles.text32, ...globalStyles.textBold, ...globalStyles.textLightBlue, marginLeft: "10px"}}>{patent.number}</p>
                </div>
                <div style={{ ...styles.main}}>
                    <div style={{ ...styles.column}}>
                        <p style={{...globalStyles.text24, ...globalStyles.textBold, color: getTextColor(payedDays)}}>{ patent.firstName + " " + patent.lastName + " " + patent.patronymic.charAt(0) + "."}</p>
                    </div>
                    <div style={{...styles.column, ...styles.payedDaysContainer}}>
                        <div style={{ ...styles.radius, backgroundColor: getColorProgress(payedDays)}}>
                            <p style={{...globalStyles.textWhite, ...globalStyles.text20}}>{payedDays}</p>
                        </div>
                        <p style={{...globalStyles.textBlack, ...globalStyles.text16, ...globalStyles.textCenter}}>оплачено дней</p>
                    </div>
                    <div style={{ ...styles.column}}>
                        <div style={styles.row}>
                            <p style={{...globalStyles.text16}}>Выдан: </p>
                            <p style={{...globalStyles.text16, ...globalStyles.textBold, color: getTextColor(payedDays)}}>{formatDate(patent.issued)}</p>
                        </div>
                        <div style={styles.row}>
                            <p style={{...globalStyles.text16}}>Дата выдачи: </p>
                            <p style={{...globalStyles.text16, ...globalStyles.textBold, color: getTextColor(payedDays)}}>{formatDate(patent.dateOfIssue)}</p>
                        </div>
                        <div style={styles.row}>
                            <p style={{ ...globalStyles.text16}}>Срок действия до: </p>
                            <p style={{...globalStyles.text16, ...globalStyles.textBold, color: getTextColor(payedDays)}}>{formatDate(patent.expirationDate)}</p>
                        </div>
                        <div style={styles.row}>
                            <p style={{...globalStyles.text16}}>Стоимость патента: </p>
                            <p style={{...globalStyles.text16, ...globalStyles.textBold, color: getTextColor(payedDays)}}>{patent.price / 100}р</p>
                        </div>
                        {payedDays < 0?
                            <div style={styles.row}>
                                <p style={{...globalStyles.text16, ...globalStyles.textRed, ...globalStyles.textBold}}>Задолжность дней: </p>
                                <p style={{...globalStyles.text16, ...globalStyles.textRed, ...globalStyles.textBold}}>{Math.abs(payedDays)}</p>
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
                <div style={styles.progress}>
                    <div style={{ ...styles.progressBar, width: `${progressPercentage}%` , background: getColorProgress(payedDays)}} />
                </div>
                {payedDays >= 0?
                    <p style={{ ...styles.text16, color: getColor(payedDays) }}>
                        срок действия истекает через {payedDays}
                    </p>
                    :
                    <p style={{ ...styles.text16, color: getColor(payedDays) }}>
                        срок действия патента истек
                    </p>
                }
                {!isPayment && <BlueButton text={'Подробнее'} onClick={() => {navigate(`payment/${patent.number}`)}} /> }
                {isPayment &&
                    <div style={{ ...styles.paymentContainer }}>
                        <div style={styles.paymentContent}>
                            <div style={styles.paymentContentCol}>
                                <div style={styles.row}>
                                    <p style={{...globalStyles.text16}}>Стоимость патента</p>
                                    <p style={{...globalStyles.text24, ...globalStyles.textBold, ...globalStyles.textLightBlue}}>{patent?.price / 100}р</p>
                                </div>
                                <div style={styles.row}>
                                    <p style={{...globalStyles.text16}}>Количество месяцев</p>
                                    <div style={styles.containerBlue}>
                                        <div onClick={()=>{handleMonthClickMinus()}} style={styles.buttonClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="3" viewBox="0 0 11 3" fill="none">
                                                <path d="M0 3V0H11V3H0Z" fill="url(#paint0_linear_320_215)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_320_215" x1="5.5" y1="-4" x2="5.5" y2="7" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#5E5E5E"/>
                                                        <stop offset="1" stop-color="#D9D9D9"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p style={{...globalStyles.textWhite, ...globalStyles.textBold, ...globalStyles.text16}}>{month}</p>
                                        <div onClick={()=>{handleMonthClick()}} style={styles.buttonClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                <path d="M0 7V4H4V0H7V4H11V7H7V11H4V7H0Z" fill="url(#paint0_linear_320_213)"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_320_213" x1="5.5" y1="0" x2="5.5" y2="11" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#5E5E5E"/>
                                                        <stop offset="1" stop-color="#D9D9D9"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={styles.paymentContentCol}>
                                <div style={styles.row}>
                                    <p style={{...globalStyles.text16}}>Задолженность по патенту </p>
                                    <p style={{...globalStyles.text24, ...globalStyles.textBold, ...globalStyles.textRed}}>{patent?.debt / 100}р</p>
                                </div>
                                <div style={styles.row}>
                                    <p style={{ ...globalStyles.text16}}>Включить задолженность</p>
                                    <div onClick={handleDebtToggle} style={!isDebtEnabled? styles.buttonSwitchGrey : styles.buttonSwitch}>
                                        {!isDebtEnabled?
                                            <div style={styles.buttonClickLeft}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                                    <circle cx="2.5" cy="2.5" r="2.5" fill="url(#paint0_linear_386_77)"/>
                                                    <defs>
                                                        <linearGradient id="paint0_linear_386_77" x1="2.5" y1="0" x2="2.5" y2="5" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#5E5E5E"/>
                                                            <stop offset="1" stop-color="#D9D9D9"/>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            :
                                            <div style={styles.buttonClickRight}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                                    <circle cx="2.5" cy="2.5" r="2.5" fill="url(#paint0_linear_386_77)"/>
                                                    <defs>
                                                        <linearGradient id="paint0_linear_386_77" x1="2.5" y1="0" x2="2.5" y2="5" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#5E5E5E"/>
                                                            <stop offset="1" stop-color="#D9D9D9"/>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{...styles.row, justifyContent: "center"}}>
                            <p style={{...globalStyles.text16, }}>Сумма к оплате</p>
                            <p style={{...globalStyles.text24, ...globalStyles.textLightBlue, ...globalStyles.textBold, marginLeft: 10}}>{sum / 100}р</p>
                        </div>
                        <div style={styles.buttonsContainer}>
                            <BlueButton text={'Назад'} myStyles={styles.buttonBack} onClick={() => {navigate(`/profile`)}} />
                            <BlueButton text={'Оплатить'} myStyles={styles.buttonPuy} onClick={() => {navigate(`${sum}`)}} />
                        </div>
                    </div>
                }
            </div>

            {(patent?.messages.length > 0 && isPayment) &&
                patent.messages.map((message: any, index: number) => (<Message message={message} />))
            }
        </div>
    );
}

export default Patent;
