// styles.js
import { CSSProperties } from 'react';
import { colors } from "../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "95vh",
    },
    logo: {
        width: "240px",
        height: "auto",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5%",
        marginBottom: "5%"
    },
    input: {
        width: "360px",
        marginBottom: "5%",
        padding: "5px",
        color: colors.white,
        border: 'none',
        borderBottom: '1px solid white',
        background: 'transparent',
    },
};


export default styles;
