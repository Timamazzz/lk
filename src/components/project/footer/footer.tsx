import styles from './styles';
import globalStyles from "../../../constants/globalStyles";


function Footer() {
    return (
        <footer style={{ ...styles.footer }}>
            <div style={styles.footerContent}>
                <p style={{...globalStyles.textCenter, ...globalStyles.textBlack, ...globalStyles.text12, }}>
                    Контроль за оплатой НДФЛ иностранными гражданами на территории Московской области осуществляет ГБУ МО "Единый миграционный центр Московской области".
                </p>
                <p style={{...globalStyles.textCenter, ...globalStyles.textBlack, ...globalStyles.text12,  }}>
                    В случае возникновения вопросов просим обращаться по т.
                    <a style={{...styles.tel, ...globalStyles.textLightBlue, ...globalStyles.text12,}} href={"tel:+74996734263"}>
                        +74996734263
                    </a>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
