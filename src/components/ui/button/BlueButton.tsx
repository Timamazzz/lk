import React from 'react';
import styles from "./styles";

interface ButtonProps {
    text: string;
    onClick: () => void;
    myStyles?: React.CSSProperties;
    disabled?: boolean;
}


function BlueButton({ text, onClick, myStyles, disabled = false }: ButtonProps) {
    const buttonStyle = disabled ? { ...styles.button, ...myStyles, backgroundColor: 'gray', cursor: 'not-allowed' } : { ...styles.button, ...myStyles };

    return (
        <button style={buttonStyle} onClick={onClick} disabled={disabled}>{text}</button>
    );
}


export default BlueButton;
