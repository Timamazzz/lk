import React from 'react';
import styles from "./styles";
import BlueButton from "../../ui/button/BlueButton";
import Message from "../message/message";

function Info() {
    return (
        <div style={styles.container}>

            <div style={styles.container2}>

                <div>
                    <text style={styles.text1}>патент №</text>
                    <text style={styles.text2}>3612345678</text>
                </div>

                <div style={styles.main}>

                    <div style={styles.column}>
                        <text style={styles.text2}>Иван</text>
                        <text style={styles.text2}>Иванович И.</text>
                    </div>

                    <div style={styles.column}>

                        <div style={styles.main}>
                            <text style={styles.text1}>Выдан: </text>
                            <text style={styles.text3}>г. Москва - регион ВО</text>
                        </div>

                        <div style={styles.main}>
                            <text style={styles.text1}>Дата выдачи: </text>
                            <text style={styles.text3}>15.06.2023</text>
                        </div>

                        <div style={styles.main}>
                            <text style={styles.text1}>Срок действия до: </text>
                            <text style={styles.text3}>15.06.2024</text>
                        </div>

                        <div style={styles.main}>
                            <text style={styles.text1}>Стоимость патента: </text>
                            <text style={styles.text3}>6600р</text>
                        </div>
                    </div>
                </div>

                <progress style={styles.progress} value={362} max={365} />

                <text style={styles.text4}>срок действия истекает через 362 дня</text>

                <BlueButton text={'перейти к оплате'} onClick={() => {}} />
            </div>

{/*            <div>
                <Message />
            </div>*/}
        </div>
    );
}

export default Info;
