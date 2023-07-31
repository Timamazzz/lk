import { CSSProperties } from 'react';
import { colors } from "../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    text: {
        color: colors.white,
        fontSize: 40,
        marginTop: 130,
    },
};

// Стили для мобильной версии
const mobileStyles: { [key: string]: CSSProperties } = {
    text: {
        fontSize: 30, // Новый размер шрифта для мобильного вида
        marginTop: 80, // Новый отступ сверху для мобильного вида
    },
};

// Медиа-запрос для мобильного вида
const mediaQueryMobile = "@media (max-width: 768px)";

// Объединяем основные стили и стили мобильной версии
styles.text = { ...styles.text, ...mobileStyles.text };

export default styles;
