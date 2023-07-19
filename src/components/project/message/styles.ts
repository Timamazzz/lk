import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        backgroundColor: colors.white,
        width: '100%'
    },
    head: {
        color: colors.lightBlue,
        fontSize:14
    },
};

export default styles;
