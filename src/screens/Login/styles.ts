// styles.js
import { CSSProperties } from 'react';
import { colors } from "../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
    logo: {
        width: "240px",
        height: "auto",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2.5%",
        marginBottom: "2.5%",
        maxWidth: "400px",
        width: "85%",
    },
    input: {
        width: "100%",
        marginBottom: "5%",
        padding: "5px",
        color: colors.white,
        border: 'none',
        borderBottom: '1px solid white',
        background: 'transparent',
    }
};


export default styles;
