import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles';
import globalStyles from "../../constants/globalStyles";
import BlueButton from "../../components/ui/button/BlueButton";
import {getQRCode} from "../../api/getQr/getQr";
import {QRCodeCanvas} from 'qrcode.react';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {logo} from "../../constants/images";
import {colors} from "../../constants/colors";
import cyrillicRegularFont from "../../assets/fonts/Exo_2/static/Exo2-Regular.ttf";

function QR() {
    const { patentNumber, price } = useParams();
    const [patent, setPatent] = useState<any>();
    const [amount, setAmount] = useState<any>(0);
    const [qr, setQr] = useState('')
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

        const pageWidth = doc.internal.pageSize.getWidth();
        doc.addFileToVFS("Cyrillic-Regular.ttf", cyrillicRegularFont);
        doc.addFont("Cyrillic-Regular.ttf", "Cyrillic", "normal");


        const logoUrl = logo;
        const logoWidth = 632 / 100 * 2.5;
        const logoHeight = 791 / 100 * 2.5;
        const logoX = (pageWidth - logoWidth) / 4;
        const logoY = 24;
        doc.addImage(logoUrl, 'PNG', logoX, 24, logoWidth, logoHeight);

        doc.setFontSize(48);
        doc.setTextColor(colors.lightBlue)
        let text = 'oplatipatent.ru';
        let textY = logoY + (logoHeight * 3/ 4);
        let textX = logoX + logoWidth + 15;
        doc.text(text, textX,  textY);

        doc.setFontSize(20);
        doc.setTextColor(colors.gray)
        text = 'QR код для оплаты патента';
        textY = logoY + 100;
        textX = (pageWidth - logoWidth) / 2;
        doc.text(text, textX,  textY);

        const pdfDataUrl = doc.output('datauristring');
        savePDF(pdfDataUrl, 'patent.pdf');
    };







    useEffect(()=>{
            if (patent) {
                getQRCode(patent?.patentId, amount).then((resp:any)=>{
                    setQr(resp.payInfo)
                })
            }
    },[patent])

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
            <text style={{ ...globalStyles.text32, ...globalStyles.textWhite, ...globalStyles.textUpperCase }}>QR КОД ДЛЯ ОПЛАТЫ ПАТЕНТА</text>
            <div style={styles.content}>
                <div style={{ ...styles.patentContainer }}>
                    <div style={styles.buttonsContainer}>
                            <QRCodeCanvas size={500}  id="qrcode-canvas" value={qr}  style={styles.qrImage}/>
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
