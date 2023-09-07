import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";
import { media } from '../../../constants/media';

const styles: { [key: string]: CSSProperties } = {
    footer: {
        backgroundColor: colors.white,
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
    },
    footerContent: {
        maxWidth: "1600px",
        margin: "0 auto",
    },
    tel: {
        textDecoration: 'none'
    }
};

export default styles;
