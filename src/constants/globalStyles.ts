import { CSSProperties } from 'react';
import {colors} from "./colors";

const styles: { [key: string]: CSSProperties } = {
    textWhite: {
        color: colors.white,
    },
    textBlack: {
        color: colors.black,
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
};

export default styles;
