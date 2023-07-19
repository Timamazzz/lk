import React from 'react';
import styles from "./styles";
import {goodInfo} from "../../../constants/images";

function Message() {
    return (
        <div style={styles.container}>
            <img src={goodInfo}/>
            <text style={styles.head}>Заголовок</text>
        </div>
    );
}

export default Message;
