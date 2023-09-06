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
        zIndex:1000
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        paddingRight: '5vw',
        paddingLeft: '5vw',
    },
    logo: {
        width: 48,
    },
    avatarImg: {
        width: 36,
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        marginLeft: "20px",
    },
    headerName: {
        marginLeft: "10px",
    },
    exit: {
        display: "flex",
    },
    exitButton: {
        marginRight: "30px"
    }
};



export default styles;