import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        backgroundColor: colors.white,
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "10px",
        paddingTop: "10px",
        marginBottom: "15px",
        marginTop: "15px",
        width: "100%"
    },
    head: {
        display: "flex",
        alignItems: "center"
    },
    info: {
        width: "30px"
    }
};

export default styles;
