import { CSSProperties } from 'react';
import { colors } from "../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: '5vh',
    },
    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: "900px",
        width: "95vw",
    },
    patentContainer: {
        display: "flex",
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: 'center',
        width: "100%",
        marginBottom: "50px",
        marginTop: "15px",
        paddingBottom: "5%",
        paddingTop: "5%",
    },
    buttonsContainer: {
        display: "flex",
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "15px",
    },
    buttonBack: {
        width: "45%",
        backgroundColor: colors.gray,
    },
    buttonPuy: {
        width: "45%",
    },
    qrImage: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        objectFit: "contain",
        width: "50%",
        height: "50%"
    },
    patentInfoContainer: {
        flex: 1,
        marginLeft: '10px',
    },
    labelDataPair: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
        alignItems: "center"
    },

};

export default styles;
