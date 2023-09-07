import { CSSProperties } from 'react';
import {colors} from "./colors";


const styles: { [key: string]: CSSProperties } = {
    textWhite: {
        color: colors.white,
    },
    textBlack: {
        color: colors.black,
    },
    textBlue: {
        color: colors.blue,
    },
    textLightBlue: {
        color: colors.lightBlue,
    },
    textRed: {
        color: colors.red,
    },
    textGray: {
        color: colors.gray,
    },
    textCenter: {
        textAlign: "center",
    },
    textBold: {
        fontWeight: "bold",
    },
    text32: {
        fontSize: "32px",
        fontFamily: 'Alumni Sans, sans-serif',
    },
    text28: {
        fontSize: "28px",
        fontFamily: 'Alumni Sans, sans-serif',
    },
    text24: {
        fontSize: "24px",
        fontFamily: 'Alumni Sans, sans-serif',
    },
    text20: {
        fontSize: "20px",
        fontFamily: 'Alumni Sans, sans-serif',
    },
    text16: {
        fontSize: "16px",
        fontFamily: 'Exo 2, sans-serif'
    },
    text12: {
        fontSize: "12px",
        fontFamily: 'Exo 2, sans-serif'
    },
    text8: {
        fontSize: "8px",
        fontFamily: 'Exo 2, sans-serif'
    },
    textUpperCase: {
        textTransform: "uppercase"
    }
};

export default styles;
