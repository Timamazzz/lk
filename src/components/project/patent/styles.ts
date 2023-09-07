import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: "1200px",
        width: "95vw",
    },
    patentContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: 'center',
        width: "100%",
        marginBottom: "50px",
        marginTop: "15px",
        paddingBottom: "5%"
    },
    paymentContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%%",
    },
    paymentContent:{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: 'row',
        alignItems: 'center',
        width: "85%",
    },
    paymentContentCol:{
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    paymentPatentContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: 'center',
        width: "100%",
        marginTop: "15px",
        paddingBottom: "5%"
    },
    headerContainerInfo: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    main: {
        display: "flex",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
    },
    row: {
        display: "flex",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
    },
    column: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    columnInfo: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
    },
    payedDaysContainer: {
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    radius: {
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderRadius: 100
    },
    progress: {
        width: '90%',
        borderRadius: 0,
        position: 'relative',
        height: 20,
        background: colors.gray, // Set the background color for the unfilled portion
    },

    progressBar: {
        height: '100%',
        borderRadius: 0,
        background: colors.green, // Set the color for the filled portion
        position: 'absolute',
        top: 0,
        right: 0,
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
