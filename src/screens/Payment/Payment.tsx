import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import styles from './styles';
import globalStyles from "../../constants/globalStyles";
import Patent from "../../components/project/patent/Patent";

function Payment() {
    const { patentNumber } = useParams();
    const [patent, setPatent] = useState<any>();
    useEffect(() => {
        // @ts-ignore
        const storedPatents = JSON.parse(localStorage.getItem('patents'));
        const selectedPatent = storedPatents.find((p: { number: string }) => p.number === patentNumber);
        if (selectedPatent) {
            setPatent(selectedPatent);
        }
    }, [patentNumber]);

    return (
        <div style={styles.container}>
            <text style={{...globalStyles.text32, ...globalStyles.textWhite, ...globalStyles.textUpperCase}}>Оплата патента</text>
            {patent && <Patent isPayment patent={patent} />}
        </div>
    );
}

export default Payment;
