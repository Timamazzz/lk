import { CSSProperties } from 'react';
import { colors } from "../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    text: {
        color: colors.white,
        fontSize: 40,
        marginTop: '2.5%',
        marginBottom: '2.5%'
    },
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        marginTop: 72,
    }
};

export default styles;
