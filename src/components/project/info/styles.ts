import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: 'center',
        padding: 50,
        paddingRight: 59,
        paddingLeft: 59
    },
    headerContainerInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontSize: 40,
        marginTop: '2.5%',
        marginBottom: '2.5%'
    },
    text1: {
        color: colors.gray,
        fontSize: 20,
        margin: 0,
        marginRight: 24,
    },
    text2: {
        color: colors.lightBlue,
        fontSize: 42,
        fontFamily: "Exo 2",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: 3,
        margin: 0,
    },
    text3: {
        color: colors.lightBlue,
        fontSize: 20,
        margin: 0,
    },
    text4: {
        color: colors.lightBlue,
        fontSize: 16,
        fontFamily: "Exo 2",
        fontStyle: "normal",
        fontWeight: 400,
        margin: 0,
        marginTop: 12,
        marginBottom: 30
    },
    main: {
        display: "flex",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    column: {
        display: "flex",
        flexDirection: "column",
    },
    columnName: {
        marginRight: 124
    },
    progress: {
        width: '100%',
        borderRadius: 0,
        position: 'relative',
        height: 20,
        background: "red", // Set the background color for the unfilled portion
    },

    progressBar: {
        height: '100%',
        borderRadius: 0,
        background: colors.green, // Set the color for the filled portion
        position: 'absolute',
        top: 0,
        left: 0,
    },
    containerSchet: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%"
    },
    containerButt: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textButt: {
        color: "#5D5D5D",
        fontFamily: "Exo 2",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: 400,
    },
    buttonClick: {
        borderRadius: 2,
        backgroundColor: '#fff',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 19,
        height: 19,
        cursor: 'pointer'
    },
    containerBlue: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue,
        padding: 2,
        borderRadius: 3,
        marginLeft: 23
    },
    fontWhite: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        fontFamily: "Exo 2",
        margin: 0,
        marginRight: 17,
        marginLeft: 17
    },
    mainQR: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    mainQrItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerQRMain: {
        display: 'flex',
        background: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',

        padding: 33,
        paddingLeft: 58,
        paddingRight: 58
    },
    containerQR: {
        marginRight: 27,
        display: 'flex',

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text3Sum: {
        color: "#2EB1E5",
        textAlign: "right",
        fontFamily: "Exo 2",
        fontSize: 32,
        fontStyle: "normal",
        fontWeight: 600,
    },
    flexCol: {
        display: 'flex',
        flexDirection: 'column'
    },
    footerButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 132,
        paddingRight: 132
    },
    infoQr: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text1Qr: {
        color: colors.gray,
        fontSize: 20,
        margin: 0,
    },
    text2Qr: {
        margin: 0,
        color: colors.lightBlue,
        fontSize: 42,
        fontFamily: "Exo 2",
        fontStyle: "normal",
        fontWeight: 600,
        marginBottom: 57
    },
    newsContainer: {
        backgroundColor: colors.white,
    }
};

export default styles;
