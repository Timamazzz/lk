import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";
import { media } from '../../../constants/media';

const styles: { [key: string]: CSSProperties } = {
    header: {
        backgroundColor: colors.white,
        position: 'fixed',
        top: 0,
        left: 0,
        width: "100%",

    },

    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        paddingRight: '10vw',
        paddingLeft: '10vw',
    },

    logo: {
        width: 45,
        height: 58,
    },

    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: "pointer",
    },

    headerTitle: {
        color: colors.blue,
        fontSize: 32,
        fontFamily: "Exo 2",
        textTransform: 'uppercase',
        marginLeft: 10,
    },

    headerName: {
        color: colors.blue,
        textAlign: 'right',
        fontFamily: 'Exo 2',
        fontSize: 24,
    },

    avatarImg: {
        width: 55,
        height: 55,
    },

    modalOverlay: {
        // Стили для оверлея модального окна
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)", // Полупрозрачный фон, чтобы затемнить остальную часть страницы
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

};



export default styles;