import { CSSProperties } from 'react';
import { colors } from "../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    text: {
        color: colors.white,
        fontSize: 40,
        marginTop: '16vh',
    },
    label: {
        color: "#FFF",
        textAlign: "center",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
        letterSpacing: "0.96px",
        textTransform: "uppercase",
    },
    inputField: {
        // Стили для поля ввода
        width: '85%', // Занимает всю доступную ширину
        padding: "8px 12px", // Отступы внутри поля, чтобы создать визуальное отделение от границ
        borderRadius: "4px",
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: "1px solid #007bff",
        backgroundColor: "inherit",
        borderColor: colors.blue,
        marginBottom: 20
    },
    modalButton: {
        // Стили для кнопки "Вход"
        padding: "10px 16px",
        background: "#007bff", // Синий цвет кнопки
        color: "#fff", // Белый цвет текста на кнопке
        borderRadius: "4px",
        border: "none", // Удаляем рамку, чтобы кнопка выглядела плоской
        cursor: "pointer",
    },
        logo: {
        width: 120,
        height: 156,
    },
};

export default styles;
