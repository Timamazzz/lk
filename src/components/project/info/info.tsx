import React, {useEffect, useState} from 'react';
import styles from "./styles";
import BlueButton from "../../ui/button/BlueButton";
import {Patent} from "../../../Classes/Patent";
import {getPatent} from "../../../api/getPatent/getPatent";
import {getQRCode} from '../../../api/getQr/getQr';
import {QRCodeCanvas} from 'qrcode.react';
import {colors} from "../../../constants/colors";
import atteintionInfo from '../../../assets/images/Info/atteintionInfo.png'
import badInfo from '../../../assets/images/Info/badIinfo.png'
import goodInfo from '../../../assets/images/Info/goodInfo.png'

function Info() {

const [patent, setPatent] = useState<Patent | null>(null);
const [patentInfo, setPatentInfo] = useState<any>(null); // Установите начальное значение в null
const [screens, setScreens] = useState(1);

const [isDebtEnabled, setIsDebtEnabled] = useState(false);
const [sliderValue, setSliderValue] = useState(0);
const [mounth, setMounth] = useState(1);
const [debtPrice, setDebtPrice] = useState(0);


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
        console.log(patentInfo)
        console.log(debtPrice)
        setSum(mounth * price + debtPrice / 100)
    }
},[mounth, debtPrice, patentInfo])

const [qr, setQr] = useState('')

useEffect(()=>{
    if(screens === 3){
        if (patentInfo) {
            getQRCode(patentInfo[0]?.patentId, sum * 100 + debtPrice).then((resp:any)=>{
                setQr(resp.payInfo)
            })
        }
    }
},[screens])


const [width, setWidth] = useState<number>(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;
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

    //v1
/*    const handleMailToClick = () => {
        const subject = 'Тема вашего письма';

        // Получаем текущее изображение QR-кода из холста
        const canvas = document.querySelector("#qrcode-canvas") as HTMLCanvasElement;
        const qrCodeBase64 = canvas.toDataURL('image/png').split(',')[1];

        // Формируем тело письма с переносами строк и необходимыми данными
        const body = `
    <div>
        <p>logo.png Заголовок</p>
        <p>QRCode</p>
        <img src="data:image/png;base64, ${qrCodeBase64}" alt="QR Code" style="display: block; margin: 0 auto; width: 150px; height: 150px;" />
        <p>patent №: ${patentInfo[0]?.number != undefined ? patentInfo[0]?.number : ''}</p>
        <p>выдан: ${patentInfo[0]?.issued != undefined ? patentInfo[0]?.issued : ''}</p>
        <p>дата выдачи: ${patentInfo[0]?.dateOfIssue != undefined ? patentInfo[0]?.dateOfIssue : ''}</p>
        <p>срок действия до: ${patentInfo[0]?.expirationDate != undefined ? patentInfo[0]?.expirationDate : ''}</p>
        <p>сумма к оплате: ${sum}р</p>
    </div>
`;

        // Создаем ссылку с протоколом "mailto"
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        console.log("mailtoLink", mailtoLink)
        // Открываем ссылку в новой вкладке
        window.open(mailtoLink);
    };*/

    //v2
    const handleMailToClick = () => {
        const subject = 'Тема вашего письма';

        // Формируем тело письма с необходимыми данными
        const body = `
    <div>
        <p>logo.png Заголовок</p>
        <p>QRCode</p>
        <p>patent №: ${patentInfo[0]?.number != undefined ? patentInfo[0]?.number : ''}</p>
        <p>выдан: ${patentInfo[0]?.issued != undefined ? patentInfo[0]?.issued : ''}</p>
        <p>дата выдачи: ${patentInfo[0]?.dateOfIssue != undefined ? patentInfo[0]?.dateOfIssue : ''}</p>
        <p>срок действия до: ${patentInfo[0]?.expirationDate != undefined ? patentInfo[0]?.expirationDate : ''}</p>
        <p>сумма к оплате: asdadsa${sum}р</p>
    </div>
  `;

        // Создаем ссылку с протоколом "mailto"
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Открываем ссылку в новой вкладке
        window.open(mailtoLink);
    };




    price = patentInfo[0]?.price != undefined && patentInfo[0].price / 100;
    function daysRemainingBetweenDates(endDate: Date): number {
        const oneDayMilliseconds = 24 * 60 * 60 * 1000; // количество миллисекунд в одном дне
        const today = new Date();
        const startTime = today.getTime();

/*        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() + 12);

        const endTime = yesterday.getTime();*/

        const endTime = endDate.getTime();

        const timeDiff = endTime - startTime;
        return Math.ceil(timeDiff / oneDayMilliseconds);
    }
  
    const endDate = new Date(patentInfo[0].payed_to_date);

    const remainingDays = daysRemainingBetweenDates(endDate);
    const progressPercentage = (remainingDays / 365) * 100;

    const getTextColor = (remainingDays: number): string => {
        if (remainingDays <= 10) {
            return "red";
        } else {
            return colors.lightBlue;
        }
    };

    const getTextColorProgress = (remainingDays: number): string => {
        if (remainingDays <= 10) {
            return "red";
        } else if (remainingDays <= 20) {
            return "yellow";
        } else {
            return colors.green;
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
        isDebtEnabled? setDebtPrice(0) : setDebtPrice(patentInfo[0]?.debt)
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


    return (
        <>
         <text style={{...styles.title, marginTop: isMobile? '40px' : '', textAlign: 'center', marginBottom: isMobile? 0 : ''}}>
                {screens === 1?
                    "Данные по патенту"
                    : 
                    screens === 2?
                        'Оплата патента'
                        :
                        'QR код для оплаты патента'
                }
            </text>
            <div style={{...styles.newsContainer, width: isMobile? '90%' : '100%', marginBottom: 15}}>
                    {patentInfo[0]?.number != undefined && 
                        
                                <div style={{marginTop: 14, backgroundColor: colors.white, padding: isMobile? '17px 30px' : '17px 61px'}}>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  marginBottom: 12,}}>
                                        <img src={patentInfo[0]?.messages[0].type === 1 ?
                                            goodInfo
                                            : patentInfo[0]?.messages[0].type === 3?
                                                badInfo
                                                :
                                                atteintionInfo
                                        }
                                            style={{width: 31}}
                                        ></img>
                                        <h1 style={{...styles.text3, textAlign: 'center', fontSize: 14, alignSelf: 'center', width: "100%"}}>{patentInfo[0]?.messages[0].title}</h1>
                                    </div>
                                    <h1 style={{...styles.text1, fontSize: isMobile? '12px': '12px'}}>{patentInfo[0]?.messages[0].text}</h1>
                                </div>
                            
                    }
                </div>
        <div style={{width: isMobile? "90%" : '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '1138px',}}>
           
            {screens !== 3?
                <div style={{...styles.container, width: isMobile? '100%' : '100%', padding: isMobile? '26px' : '5vh'}}>
                <div style={styles.headerContainerInfo}>
                    <p style={{...styles.text1, fontSize: isMobile? "18px" : '20px'}}>патент №</p>
                    <p style={{...styles.text2, fontSize: isMobile? "28px" : '40px'}}>{patentInfo[0]?.number != undefined && patentInfo[0]?.number}</p>
                </div>
                <div style={{...styles.main, flexDirection: isMobile? 'column': 'row'}}>
                    <div style={{...styles.columnName, width: isMobile? '100%' : ''}}>
                        
                        <p style={{...styles.text2, fontSize: isMobile? "26px" : '42px'}}>{patentInfo[0]?.name != undefined? patentInfo[0]?.firstName : 'Имени нет в ответе!'}</p>
                        <div>
                            <p style={{...styles.text2, fontSize: isMobile? "26px" : '42px'}}>{patentInfo[0]?.name != undefined? patentInfo[0]?.patronymic : 'Имени нет в ответе!'}</p>
                            <p style={{...styles.text2, fontSize: isMobile? "26px" : '42px'}}>{patentInfo[0]?.name != undefined? patentInfo[0]?.lastName[0] + '.' : 'Имени нет в ответе!'}</p>
                        </div>
                       
                    </div>
                    <div style={{...styles.column, width: isMobile? '100%' : '', justifyContent: isMobile? 'space-between' : '', flexDirection: isMobile? 'row-reverse' : 'column'}}>
                        <div style={{ ...styles.radius, backgroundColor: getTextColorProgress(remainingDays)}}>
                            <p style={styles.radiusText}>{remainingDays}</p>
                        </div>
                        <p style={styles.radiusSubtext}>оплачено дней</p>
                    </div>

                    <div style={{...styles.column, width: isMobile? '100%' : ''}}>
                        <div style={styles.main}>
                            <p style={{...styles.text1, fontSize: isMobile? '16px': '20px'}}>Выдан: </p>
                            <p style={styles.text3}>{patentInfo[0]?.issued != undefined && patentInfo[0].issued}</p>
                        </div>
                        <div style={styles.main}>
                            <p style={{...styles.text1, fontSize: isMobile? '16px': '20px'}}>Дата выдачи: </p>
                            <p style={styles.text3}>{patentInfo[0]?.dateOfIssue != undefined && patentInfo[0].dateOfIssue}</p>
                        </div>
                        <div style={styles.main}>
                            <p style={{...styles.text1, fontSize: isMobile? '16px': '20px'}}>Срок действия до: </p>
                            <p style={styles.text3}>{patentInfo[0]?.expirationDate != undefined && patentInfo[0].expirationDate}</p>
                        </div>
                        <div style={styles.main}>
                            <p style={{...styles.text1, fontSize: isMobile? '16px': '20px'}}>Стоимость патента: </p>
                            <p style={styles.text3}>{patentInfo[0]?.price != undefined && patentInfo[0].price / 100}р</p>
                        </div>
                        {remainingDays < 0?
                            <div style={styles.main}>
                                <p style={{...styles.text1,color: 'red', fontSize: isMobile? '16px': '20px'}}>Задолжность дней: </p>
                                <p style={{...styles.text3, color: "red"}}>{Math.abs(remainingDays)}</p>
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
                {screens === 1?
                    <>
                        <div style={styles.progress}>
                            <div style={{ ...styles.progressBar, width: `${progressPercentage}%` , background: getTextColorProgress(remainingDays)}} />
                        </div>
                        {remainingDays >= 0?
                            <p style={{ ...styles.text4, color: getTextColor(remainingDays) }}>
                                срок действия истекает через {remainingDays}
                            </p>
                            :
                            <p style={{ ...styles.text4, color: getTextColor(remainingDays) }}>
                                срок действия патента истек
                            </p>
                        }
                    </>
                    :
                    <>
                        <div style={{...styles.containerSchet, flexDirection: isMobile? 'column' : 'row', alignItems: isMobile? '' : 'center'}}>
                            <div>
                                <div style={{...styles.containerButt, marginLeft: isMobile? '0' : '45px'}}>
                                    <p style={{...styles.textButt, fontSize: isMobile? '16px': '20px'}}>Количество месяцев</p>
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
                                <div style={{...styles.containerButt, marginLeft: isMobile? '0' : '45px'}}>
                                    <p  style={{...styles.textButt, fontSize: isMobile? '16px': '20px'}}>Включить задолженность</p>
                                    <div>
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
                        
                        </div>
                       <p  style={{...styles.textButt, fontSize: isMobile? '16px': '20px'}}>Сумма к оплате <span style={styles.sumText}>{sum}р</span></p>
                    </>
                }
                {screens === 1?
                    <BlueButton text={'перейти к оплате'} onClick={handleButtonClick} />
                    : 
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <BlueButton text={'оплатить'} onClick={handleButtonClickTwo} />
                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                            <BlueButton text={'Назад'} onClick={()=>setScreens(1)} />
                        </div>
                    </div>
                    
                }
            </div>
            :
            <div style={{...styles.containerQRMain, width: isMobile? '100%' : '100%', padding: isMobile? '7px 7px' : '33px 58px', flexDirection: isMobile? 'column' : 'row'}}>
                <div style={{...styles.flexCol, width: isMobile? '90%' : '100%',}}>
                <div style={{display: 'flex', flexDirection: isMobile? 'column' : 'row', alignItems: isMobile? 'center' : '', width: "100%", justifyContent: 'space-around'}}>
                    <div style={{...styles.containerQR, marginRight: isMobile? '0' : '27px'}}>
                        <QRCodeCanvas  id="qrcode-canvas" value={qr} size={isMobile? 250 : 391} style={{ marginBottom: 31 }} />
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
                                    <p style={{...styles.text1, fontSize: isMobile? '16px': '20px'}}>Выдан: </p>
                                    <p style={styles.text3}>{patentInfo[0]?.issued != undefined && patentInfo[0].issued}</p>
                                </div>
                                <div style={styles.mainQrItem}>
                                    <p style={{...styles.text1, fontSize: isMobile? '16px': '20px'}}>Дата выдачи: </p>
                                    <p style={styles.text3}>{patentInfo[0]?.dateOfIssue != undefined && patentInfo[0].dateOfIssue}</p>
                                </div>
                                <div style={styles.mainQrItem}>
                                    <p style={{...styles.text1, fontSize: isMobile? '16px': '20px'}}>Срок действия до: </p>
                                    <p style={styles.text3}>{patentInfo[0]?.expirationDate != undefined && patentInfo[0].expirationDate}</p>
                                </div>
                                <div style={styles.mainQrItem}>
                                    <p style={{...styles.text1, fontSize: isMobile? '16px': '20px'}}>Сумма оплаты: </p>
                                    <p style={styles.text3Sum}>{sum}р</p>
                                </div>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <BlueButton myStyles={styles.buttonSpace} text={'Сохранить'} onClick={downloadQRCode} />
                            <BlueButton text={'Отправить'} onClick={handleMailToClick} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
                }
               
        </div>
        <div style={{...styles.newsContainer, width: isMobile? '90%' : '100%'}}>
                    {patentInfo[0]?.number != undefined && 
                        patentInfo[0]?.messages.slice(1).map((item:any)=>{
                            return (
                                <div style={{marginTop: 14, backgroundColor: colors.white, padding: isMobile? '17px 30px' : '17px 61px'}}>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  marginBottom: 12,}}>
                                        <img src={item.type === 1 ?
                                            goodInfo
                                            : item.type === 3?
                                                badInfo
                                                :
                                                atteintionInfo
                                        }
                                            style={{width: 31}}
                                        ></img>
                                        <h1 style={{...styles.text3, textAlign: 'center', fontSize: 14, alignSelf: 'center', width: "100%"}}>{item.title}</h1>
                                    </div>
                                    <h1 style={{...styles.text1, fontSize: isMobile? '12px': '12px'}}>{item.text}</h1>
                                </div>
                            )
                        })
                    }
                </div>
        </>
    );
}

export default Info;
