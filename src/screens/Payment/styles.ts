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
        justifyContent: "center",
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: 'center',
        width: "100%",
        paddingBottom: "5%",
        paddingTop: "5%",
    },
    row: {
        display: "flex",
        width: '90%',
        alignItems: "center",
        justifyContent: "space-between",
    },
    containerBlue: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue,
        padding: 2,
        borderRadius: 6,
        width: "88px",
        height: "24px"

    },
    buttonSwitch: {
        backgroundColor: colors.blue,
        width: 48,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        borderRadius: 6,
        position: "relative"
    },
    buttonSwitchGrey: {
        backgroundColor: colors.gray,
        width: 48,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        borderRadius: 6,
        position: "relative"
    },
    buttonClickLeft: {
        left: 2,
        position: 'absolute',
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
    buttonClickRight: {
        right: 2,
        position: 'absolute',
        borderRadius: 2,
        backgroundColor: '#fff',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        cursor: 'pointer'
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
    buttonsContainer: {
        display: "flex",
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "15px",
    },
    buttonBack: {
        width: "45%",
        backgroundColor: colors.gray
    },
    buttonPuy: {
        width: "45%"
    },
};

export default styles;
