import React, {useEffect, useRef, useState} from 'react';
import styles from "./styles";
import BlueButton from "../../ui/button/BlueButton";
import {Patent} from "../../../Classes/Patent";
import {getPatent} from "../../../api/getPatent/getPatent";
import {getQRCode} from '../../../api/getQr/getQr';
import {QRCodeCanvas} from 'qrcode.react';
import {colors} from "../../../constants/colors";

function Info() {

const [patent, setPatent] = useState<Patent | null>(null);
const [patentInfo, setPatentInfo] = useState<any>(null); // Установите начальное значение в null
const [screens, setScreens] = useState(1);

const [isDebtEnabled, setIsDebtEnabled] = useState(false);
const [sliderValue, setSliderValue] = useState(0);
const [mounth, setMounth] = useState(1);


const storedData = localStorage.getItem('patent');
useEffect(() => {
  if (storedData) {
    setPatentInfo(JSON.parse(storedData));
  }
}, [storedData]);

useEffect(() => {
  const personId = localStorage.getItem('personId');
  if (personId) {
    getPatent(personId)
      .then((patentObj) => {
        setPatent(patentObj);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}, []);

let price:any = 0;
const [sum, setSum] = useState<any>(0)

useEffect(()=>{
    if(patentInfo){
        setSum(mounth * price)
    }
},[mounth, patentInfo])

const [qr, setQr] = useState('')

useEffect(()=>{
    if(screens === 3){
        if (patentInfo) {
            getQRCode(patentInfo[0]?.patentId, sum).then((resp:any)=>{
            
                setQr(resp.payInfo)
            })
        }
    }
},[screens])

    // Проверьте, что patentInfo существует и имеет данные
    if (!patentInfo) {
    return <div>Loading...</div>;
    }

    const downloadQRCode = () => {
        const canvas = document.querySelector("#qrcode-canvas") as HTMLCanvasElement;
        if (canvas) {
            const dataURL = canvas.toDataURL('image/png');
            const anchor = document.createElement('a');
            anchor.href = dataURL;
            anchor.download = 'qr_code.png';
            anchor.click();
        }
    };
    price = patentInfo[0]?.price != undefined && patentInfo[0].price / 100;
    function daysRemainingBetweenDates(endDate: Date): number {
        const oneDayMilliseconds = 24 * 60 * 60 * 1000; // количество миллисекунд в одном дне
        const today = new Date();
        const startTime = today.getTime();

/*        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        const endTime = yesterday.getTime();*/

        const endTime = endDate.getTime();

        const timeDiff = endTime - startTime;
        return Math.ceil(timeDiff / oneDayMilliseconds);
    }
  
    const endDate = new Date(patentInfo[0].expirationDate);

    const remainingDays = daysRemainingBetweenDates(endDate);

    const getTextColor = (remainingDays: number): string => {
        if (remainingDays <= 10) {
            return "red";
        } else if (remainingDays <= 20) {
            return "yellow";
        } else {
            return colors.lightBlue;
        }
    };

    const handleButtonClick = () => {
        setScreens(2)
    };
    const handleButtonClickTwo = () => {
        setScreens(3);
    };

  
    const handleSliderChange = (event: { target: { value: React.SetStateAction<number>; }; }) => {
      setSliderValue(event.target.value);
    };
  
    const handleDebtToggle = () => {
      setIsDebtEnabled(!isDebtEnabled);
    };


    
  const handleMounthClick = () => {
    if(mounth < 12){
        setMounth(mounth + 1);
    }
  };
  const handleMounthClickMinus = () => {
    if(mounth > 0){
        setMounth(mounth - 1);
    }
  };

  console.log('====================================');
  console.log(patentInfo);
  console.log('====================================');

    return (
        <>
         <text style={styles.title}>
                {screens === 1?
                    "Данные по патенту"
                    : 
                    screens === 2?
                        'Оплата патента'
                        :
                        'QR код для оплаты патента'
                }
            </text>
        <div>
           
            {screens !== 3?
                <div style={styles.container}>
                <div style={styles.headerContainerInfo}>
                    <p style={styles.text1}>патент №</p>
                    <p style={styles.text2}>{patentInfo[0]?.number != undefined && patentInfo[0]?.number}</p>
                </div>
                <div style={styles.main}>
                    <div style={styles.columnName}>
                        <p style={styles.text2}>{patentInfo[0]?.name != undefined? patentInfo[0].name : 'Имени нет в ответе!'}</p>
                    </div>
                    <div style={styles.column}>
                        <div style={styles.main}>
                            <p style={styles.text1}>Выдан: </p>
                            <p style={styles.text3}>{patentInfo[0]?.issued != undefined && patentInfo[0].issued}</p>
                        </div>
                        <div style={styles.main}>
                            <p style={styles.text1}>Дата выдачи: </p>
                            <p style={styles.text3}>{patentInfo[0]?.dateOfIssue != undefined && patentInfo[0].dateOfIssue}</p>
                        </div>
                        <div style={styles.main}>
                            <p style={styles.text1}>Срок действия до: </p>
                            <p style={styles.text3}>{patentInfo[0]?.expirationDate != undefined && patentInfo[0].expirationDate}</p>
                        </div>
                        <div style={styles.main}>
                            <p style={styles.text1}>Стоимость патента: </p>
                            <p style={styles.text3}>{patentInfo[0]?.price != undefined && patentInfo[0].price / 100}р</p>
                        </div>
                        {patentInfo[0]?.debt < 0?
                            <div style={styles.main}>
                                <p style={{...styles.text1, color: "red"}}>Задолжность дней: </p>
                                <p style={{...styles.text3, color: "red"}}>{Math.abs(patentInfo[0]?.debt)}</p>
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
                {screens === 1?
                    <>
                        <progress style={styles.progress} value={remainingDays} max={365} />
                        <p style={{ ...styles.text4, color: getTextColor(remainingDays) }}>
                            срок действия истекает через {remainingDays}
                        </p>
                    </>
                    :
                    <>
                        <div style={styles.containerSchet}>
                            <div>
                                <div style={styles.containerButt}>
                                    <p style={styles.textButt}>Количество месяцев</p>
                                    <div style={styles.containerBlue}>
                                        <div onClick={()=>{handleMounthClickMinus()}} style={styles.buttonClick}>
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
                                        <p style={styles.fontWhite}>{mounth}</p>
                                        <div onClick={()=>{handleMounthClick()}} style={styles.buttonClick}>
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
                            <div>
                                <div style={styles.containerButt}>
                                    <p style={styles.textButt}>Включить задолженность</p>
                                    <div>
                                    <input
                                        type='checkbox'
                                        checked={isDebtEnabled}
                                        onChange={handleDebtToggle}
                                    />
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                       <p style={styles.textButt}>Сумма к оплате {sum}</p>
                    </>
                }
                {screens === 1?
                    <BlueButton text={'перейти к оплате'} onClick={handleButtonClick} />
                    : 
                    <BlueButton text={'оплатить'} onClick={handleButtonClickTwo} />
                    
                }
            </div>
            :
            <div style={styles.containerQRMain}>
                <div style={styles.flexCol}>
                <div style={{display: 'flex'}}>
                    <div style={styles.containerQR}>
                        <QRCodeCanvas  id="qrcode-canvas" value={qr} size={391} style={{ marginBottom: 31 }} />
                        <BlueButton text={'РЕДАКТИРОВАТЬ'} onClick={handleButtonClick} />
                    </div>
                    <div style={styles.infoQr}>
            
                        <div style={styles.mainQR}>
                            <div style={styles.columnQR}>
                                <div style={styles.headerQR}>
                                    <p style={styles.text1Qr}>патент №</p>
                                    <p style={styles.text2Qr}>{patentInfo[0]?.number != undefined && patentInfo[0]?.number}</p>
                                </div>
                                <div style={styles.mainQrItem}>
                                    <p style={styles.text1}>Выдан: </p>
                                    <p style={styles.text3}>{patentInfo[0]?.issued != undefined && patentInfo[0].issued}</p>
                                </div>
                                <div style={styles.mainQrItem}>
                                    <p style={styles.text1}>Дата выдачи: </p>
                                    <p style={styles.text3}>{patentInfo[0]?.dateOfIssue != undefined && patentInfo[0].dateOfIssue}</p>
                                </div>
                                <div style={styles.mainQrItem}>
                                    <p style={styles.text1}>Срок действия до: </p>
                                    <p style={styles.text3}>{patentInfo[0]?.expirationDate != undefined && patentInfo[0].expirationDate}</p>
                                </div>
                                <div style={styles.mainQrItem}>
                                    <p style={styles.text1}>Сумма оплаты: </p>
                                    <p style={styles.text3Sum}>{sum}р</p>
                                </div>
                            </div>
                        </div>
                        <BlueButton text={'Сохранить'} onClick={downloadQRCode} />
                    </div>
                </div>
            </div>
            </div>
            
                }
                {/*<div style={styles.newsContainer}>
                    {patentInfo[0]?.number != undefined && 
                        patentInfo[0]?.messages.map((item:any)=>{
                            return (
                                <div>
                                    <img src={item.type === 'attemption' ?
                                        atteintionInfo
                                        : item.type === 'bad'?
                                            badInfo
                                            :
                                            goodInfo
                                    }></img>
                                    поправь тут
                                    <h1>{item.title}</h1>
                                    <h1>{item.message}</h1>
                                </div>
                            )
                        })
                    }
                </div>*/}
        </div>
        </>
    );
}

export default Info;
