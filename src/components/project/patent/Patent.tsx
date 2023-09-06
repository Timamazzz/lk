import React, {useEffect, useState} from 'react';
import styles from "./styles";
import BlueButton from "../../ui/button/BlueButton";
import {getQRCode} from '../../../api/getQr/getQr';
import {QRCodeCanvas} from 'qrcode.react';
import {colors} from "../../../constants/colors";
import atteintionInfo from '../../../assets/images/Info/atteintionInfo.png'
import badInfo from '../../../assets/images/Info/badIinfo.png'
import goodInfo from '../../../assets/images/Info/goodInfo.png'

interface PatentProps {
    patent: boolean;
}

function Patent({patent}: PatentProps) {

    return (
        <div>
         <text>Данные по патенту</text>
        </div>
    );
}

export default Patent;
