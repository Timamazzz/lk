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
    textCenter: {
        textAlign: "center",
    },
    textBold: {
        fontWeight: "bold",
    },
    text32: {
        fontSize: "32px",
    },
    text24: {
        fontSize: "24px",
    },
    text16: {
        fontSize: "16px",
    },
    text12: {
        fontSize: "12px",
    },
    text8: {
        fontSize: "8px",
    },
};

export default styles;
