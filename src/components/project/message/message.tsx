import React from 'react';
import styles from "./styles";
import {goodInfo, atteintionInfo, badIinfo} from "../../../constants/images";
import globalStyles from "../../../constants/globalStyles";

interface MessageProps {
    message: any;
}

function Message({message}: MessageProps) {
    function getImage(type:number) {
        if (type == 1){
            return badIinfo
        }
        else if (type == 2) {
            return atteintionInfo
        }
        else {
            return goodInfo
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.head}>
                <img style={styles.info} src={getImage(message.type)} alt={''}/>
                <text style={{...globalStyles.textLightBlue, ...globalStyles.textCenter, ...globalStyles.text12, ...globalStyles.textBold}}>{message.title}</text>
            </div>
            <text style={{...globalStyles.textBlack, ...globalStyles.text12, ...globalStyles.textCenter}}>{message.text}</text>
        </div>
    );
}

export default Message;
