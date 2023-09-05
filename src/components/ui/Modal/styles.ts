import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: 'white',
        maxWidth: "360px",
        width: '85%',
        height: '20%',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center"
    },
};

export default styles;
