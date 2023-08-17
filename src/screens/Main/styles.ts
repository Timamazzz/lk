import { CSSProperties } from 'react';
import { colors } from "../../constants/colors";

const styles: { [key: string]: CSSProperties } = {
    text: {
        color: colors.white,
        fontSize: 40,
        marginTop: '16vh',
    },
    label: {
        fontSize: "16px",
        fontWeight: "bold",
        alignSelf: "center", // Выравнивание по левому краю
        marginTop: 20,
        marginBottom: 30
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
};

export default styles;
