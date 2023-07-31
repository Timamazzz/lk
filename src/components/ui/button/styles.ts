import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    button: {
        backgroundColor: colors.blue,
        color: colors.white,
        fontSize: 16,
        borderWidth: 0,
        padding: 8,
        paddingRight: 11,
        paddingLeft: 11,
        fontFamily: " Exo 2",
        fontStyle: "normal",
        fontWeight: 400,
        textTransform: "uppercase",
        cursor: 'pointer',
    }
};

export default styles;
