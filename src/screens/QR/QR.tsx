import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles';
import globalStyles from "../../constants/globalStyles";
import BlueButton from "../../components/ui/button/BlueButton";
import {getQRCode} from "../../api/getQr/getQr";
import {QRCodeCanvas} from 'qrcode.react';
import jsPDF from "jspdf";
import {logo} from "../../constants/images";
import {colors} from "../../constants/colors";
import "../../assets/fonts/AlumniSans-Regular-normal"
interface QRProps {
    isMobile: boolean;
}

function QR({ isMobile }:QRProps) {
    const { patentNumber, price } = useParams();
    const [patent, setPatent] = useState<any>();
    const [amount, setAmount] = useState<any>(0);
    const [qr, setQr] = useState('')
    const [qrData, setQrData] = useState<any>({});
    const savePDF = (pdfDataUrl: string, fileName: string) => {
        const anchor = document.createElement('a');
        anchor.href = pdfDataUrl;
        anchor.download = fileName;
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };
    const generatePdf = () => {
        const doc = new jsPDF();
        doc.setFont('AlumniSans-Regular');

        const pageWidth = doc.internal.pageSize.getWidth();

        const logoUrl = logo;
        const logoWidth = 632 / 100 * 2.5;
        const logoHeight = 791 / 100 * 2.5;
        const logoX = (pageWidth - logoWidth) / 4;
        const logoY = 24;
        doc.addImage(logoUrl, 'PNG', logoX, 24, logoWidth, logoHeight);

        doc.setFontSize(64);
        doc.setTextColor(colors.lightBlue)
        let text = 'oplatipatent.ru';
        let textY = logoY + (logoHeight * 3/ 4);
        let textX = logoX + logoWidth + 15;
        doc.text(text, textX,  textY);

        doc.setFontSize(64);
        doc.setTextColor(colors.gray)
        text = 'QR код для оплаты патента';
        textY = logoY + logoHeight + 20;
        let textWidth = doc.getTextWidth(text);
        textX = (pageWidth - textWidth) / 2;
        doc.text(text, textX,  textY);

        // Рассчитываем X и Y координаты для размещения QR-кода по центру
        const qrWidth = 100;
        const qrHeight = 100;
        const qrX = (pageWidth - qrWidth) / 2;
        const qrY = textY + 20;

        // Вставляем QR-код
        const qrCanvas = document.getElementById('qrcode-canvas') as HTMLCanvasElement;
        const qrDataUrl = qrCanvas.toDataURL('image/png');
        doc.addImage(qrDataUrl, 'PNG', qrX, qrY, qrWidth, qrHeight);

        // Информация о патенте
        const patentInfoY = qrY + qrHeight + 20;
        doc.setFontSize(36);

// Патент №
        doc.setTextColor(colors.black) // Черный цвет текста
        doc.text('Патент №', 20, patentInfoY);
        doc.setTextColor(colors.blue) // Синий цвет текста
        doc.text(`${patent.number}`, pageWidth - 20, patentInfoY, { align: 'right' });

// Выдан
        doc.setTextColor(colors.black)
        doc.text('Выдан:', 20, patentInfoY + 15);
        doc.setTextColor(colors.blue)
        doc.text(`${formatDate(patent.issued)}`, pageWidth - 20, patentInfoY + 15, { align: 'right' });

// ФИО
        doc.setTextColor(colors.black)
        doc.text('ФИО:', 20, patentInfoY + 30);
        doc.setTextColor(colors.blue)
        doc.text(`${patent.name}`, pageWidth - 20, patentInfoY + 30, { align: 'right' });

// Дата выдачи
        doc.setTextColor(colors.black)
        doc.text('Дата выдачи:', 20, patentInfoY + 45);
        doc.setTextColor(colors.blue)
        doc.text(`${formatDate(patent.dateOfIssue)}`, pageWidth - 20, patentInfoY + 45, { align: 'right' });

// Срок действия до
        doc.setTextColor(colors.black)
        doc.text('Срок действия до:', 20, patentInfoY + 60);
        doc.setTextColor(colors.blue)
        doc.text(`${formatDate(patent.expirationDate)}`, pageWidth - 20, patentInfoY + 60, { align: 'right' });

// Сумма к оплате
        doc.setTextColor(colors.black)
        doc.text('Сумма к оплате:', 20, patentInfoY + 75);
        doc.setTextColor(colors.blue)
        doc.text(`${(amount / 100).toLocaleString('ru-RU')} руб.`, pageWidth - 20, patentInfoY + 75, { align: 'right' });


        const pdfDataUrl = doc.output('datauristring');
        savePDF(pdfDataUrl, 'patent.pdf');
    };

    useEffect(()=>{
            if (patent) {
                getQRCode(patent?.patentId, amount).then((resp:any)=>{
                    setQr(resp.payInfo)
                })
            }
    },[amount, patent, qr])

    useEffect(() => {
        if (price) setAmount(price);
    }, [price]);

    useEffect(() => {
        // @ts-ignore
        const storedPatents = JSON.parse(localStorage.getItem('patents'));
        const selectedPatent = storedPatents.find((p: { number: string }) => p.number === patentNumber);
        if (selectedPatent) {
            setPatent(selectedPatent);
        }
    }, [patentNumber]);

    useEffect(() => {
        if (qr) {
            // Разбиваем строку qr по символу "|"
            const qrFields = qr.split('|');

            // Создаем объект qrData, заполняя его данными из строки qr
            const data = {};
            qrFields.forEach(field => {
                const [key, value] = field.split('=');
                // @ts-ignore
                data[key] = value;
            });

            // Устанавливаем qrData в состояние
            setQrData(data);
        }
    }, [qr]);


    const navigate = useNavigate();

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
            <text style={isMobile? {...globalStyles.text24, ...globalStyles.textWhite, ...globalStyles.textUpperCase} : { ...globalStyles.text32, ...globalStyles.textWhite, ...globalStyles.textUpperCase }}>QR КОД ДЛЯ ОПЛАТЫ ПАТЕНТА</text>
            <div style={styles.content}>
                <div style={{ ...styles.patentContainer }}>
                    <div style={styles.buttonsContainer}>
                        <QRCodeCanvas size={500} id="qrcode-canvas" value={qr} style={styles.qrImage} />
                        {!isMobile &&
                            <div style={styles.patentInfoContainer}>
                                <div style={styles.labelDataPair}>
                                    <p style={{...globalStyles.text20, ...globalStyles.textBold, ...globalStyles.textGray}}>Патент №:</p>
                                    <p style={{...globalStyles.text32, ...globalStyles.textBold, ...globalStyles.textLightBlue}}>{patentNumber}</p>
                                </div>
                                <div style={styles.labelDataPair}>
                                    <p style={{...globalStyles.text20, ...globalStyles.textGray}}>Выдан:</p>
                                    <p style={{...globalStyles.text20, ...globalStyles.textLightBlue}}>{formatDate(patent?.issued)}</p>
                                </div>
                                <div style={styles.labelDataPair}>
                                    <p style={{...globalStyles.text20, ...globalStyles.textGray}}>Срок действия до:</p>
                                    <p style={{...globalStyles.text20, ...globalStyles.textLightBlue}}>{formatDate(patent?.expirationDate)}</p>
                                </div>
                                <div style={styles.labelDataPair}>
                                    <p style={{...globalStyles.text20, ...globalStyles.textGray}}>Сумма к оплате:</p>
                                    <p style={{...globalStyles.text20, ...globalStyles.textLightBlue}}>{amount / 100} р</p>
                                </div>
                            </div>
                        }
                    </div>
                    <div style={{...styles.patentInfoContainer, width: "90%"}}>
                        {isMobile &&
                            <>
                                <div style={styles.labelDataPair}>
                                    <p style={{...globalStyles.text20, ...globalStyles.textBold, ...globalStyles.textGray}}>Патент №:</p>
                                    <p style={{...globalStyles.text32, ...globalStyles.textBold, ...globalStyles.textLightBlue}}>{patentNumber}</p>
                                </div>
                                <div style={styles.labelDataPair}>
                                    <p style={{...globalStyles.text20, ...globalStyles.textGray}}>Выдан:</p>
                                    <p style={{...globalStyles.text20, ...globalStyles.textLightBlue}}>{formatDate(patent?.issued)}</p>
                                </div>
                                <div style={styles.labelDataPair}>
                                    <p style={{...globalStyles.text20, ...globalStyles.textGray}}>Срок действия до:</p>
                                    <p style={{...globalStyles.text20, ...globalStyles.textLightBlue}}>{formatDate(patent?.expirationDate)}</p>
                                </div>
                                <div style={styles.labelDataPair}>
                                    <p style={{...globalStyles.text20, ...globalStyles.textGray}}>Сумма к оплате:</p>
                                    <p style={{...globalStyles.text20, ...globalStyles.textLightBlue}}>{amount / 100} р</p>
                                </div>
                            </>
                        }
                        <div style={styles.labelDataPair}>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textBold, ...globalStyles.textGray }}>Получатель:</p>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textLightBlue }}>{qrData?.Name}</p>
                        </div>
                        <div style={styles.labelDataPair}>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textGray }}>ИНН получателя:</p>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textLightBlue }}>{qrData?.PayeeINN}</p>
                        </div>
                        <div style={styles.labelDataPair}>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textGray }}>КБК:</p>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textLightBlue }}>{qrData?.CBC}</p>
                        </div>
                        <div style={styles.labelDataPair}>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textGray }}>БИК:</p>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textLightBlue }}>{qrData?.BIC}</p>
                        </div>
                        <div style={styles.labelDataPair}>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textGray }}>ОКТМО:</p>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textLightBlue }}>{qrData?.OKTMO}</p>
                        </div>
                        <div style={styles.labelDataPair}>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textGray }}>ФИО плательщика:</p>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textLightBlue }}>{qrData?.LASTNAME} {qrData?.FIRSTNAME} {qrData?.MIDDLENAME}</p>
                        </div>
                        <div style={styles.labelDataPair}>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textGray }}>ИНН плательщика:</p>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textLightBlue }}>{qrData?.PayerINN}</p>
                        </div>
                        <div style={styles.labelDataPair}>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textGray }}>Сумма:</p>
                            <p style={{ ...globalStyles.text20, ...globalStyles.textLightBlue }}>{qrData?.Sum / 100} р</p>
                        </div>
                    </div>
                    <div style={styles.buttonsContainer}>
                        <BlueButton text={'Редактировать'} myStyles={styles.buttonBack} onClick={() => { navigate(`/profile/payment/${patentNumber}`) }} />
                        <BlueButton text={'Сохранить'} myStyles={styles.buttonPuy} onClick={generatePdf} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default QR;
