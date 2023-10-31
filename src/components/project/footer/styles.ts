import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";
import { media } from '../../../constants/media';

const styles: { [key: string]: CSSProperties } = {
    footer: {
        backgroundColor: colors.white,
        position: "relative",
        height: "100%"
    },
    footerContent: {
        maxWidth: "1600px",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center"
    },
    tel: {
        textDecoration: 'none'
    }
};

export default styles;
