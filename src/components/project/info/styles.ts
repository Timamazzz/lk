import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        height: '80%',
        width: '100%',
        padding: '2.5%',
        justifyContent: "center",
    },

    container2: {
        backgroundColor: colors.white,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: '2.5%'
    },
    text1: {
        color: colors.gray,
        fontSize: 20,
        marginRight: 20
    },
    text2: {
        color: colors.lightBlue,
        fontSize: 40
    },
    text3: {
        color: colors.lightBlue,
        fontSize: 20
    },
    text4: {
        color: colors.lightBlue,
        fontSize: 16,
        marginTop: '2.5%',
        marginBottom: '5%'
    },
    main: {
        display: "flex",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: '5%',
        marginBottom: '5%',
    },
    column: {
        display: "flex",
        flexDirection: "column",
    },
    progress: {
        width: '100%',
        borderRadius: 0,
    },
};

export default styles;
