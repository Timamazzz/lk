import { CSSProperties } from 'react';
import { colors } from "../../../constants/colors";

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
        paddingTop: 11,
        paddingBottom: 11,
        paddingRight: 150,
        paddingLeft: 150,
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
        fontFamily: 'Alumni Sans',
        fontWeight: 500,
        textTransform: 'uppercase',
        marginLeft: 18,
    },
    headerName: {
        color: colors.blue,
        textAlign: 'right',
        fontFamily: 'Exo 2',
        fontSize: 18,
        fontWeight: 400,
    },
    avatarImg: {
        width: 29,
        height: 29,
        marginRight: 8,
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
    modal: {
        // Обновленные стили для контейнера модального окна
        background: "#fff",
        padding: "40px", // Увеличим размер модального окна в два раза
        borderRadius: "4px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        minWidth: "300px", // Минимальная ширина окна, чтобы не было слишком узким
        display: "flex",
        flexDirection: "column", // Добавляем гибкость для центрирования элементов
        alignItems: "center",
        position: "relative", // Позиционируем, чтобы элементы внутри могли быть позиционированы абсолютно
    },
    modalHeader: {
        // Стили для заголовка модального окна
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px", // Пример отступа, который можно изменить
    },
    modalTitle: {
        // Стили для текста заголовка модального окна
        fontSize: "18px", // Размер шрифта заголовка
        fontWeight: "bold", // Жирный текст
    },
    modalCloseButton: {
        // Стили для кнопки закрытия модального окна
        fontSize: "24px", // Размер шрифта кнопки
        cursor: "pointer", // Добавляем курсор указывающий на то, что кнопка является интерактивной
        position: "absolute",
        top: "10px",
        right: "10px",
        color: "#007bff", // Цвет кнопки такой же как у кнопки "Вход"
    },
    modalContent: {
        // Обновленные стили для содержимого модального окна
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px", // Отступ между элементами внутри модального окна
    },
    label: {
        fontSize: "16px",
        fontWeight: "bold",
        alignSelf: "flex-start", // Выравнивание по левому краю
    },
    inputField: {
        // Стили для поля ввода
        width: "100%", // Занимает всю доступную ширину
        padding: "8px 12px", // Отступы внутри поля, чтобы создать визуальное отделение от границ
        borderRadius: "4px",
        border: "1px solid #ccc", // Простая рамка для визуального отделения поля
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