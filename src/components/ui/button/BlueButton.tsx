import React from 'react';
import styles from "./styles";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

function BlueButton({ text, onClick }: ButtonProps) {
    return (
        <button style={styles.button} onClick={onClick}>{text}</button>
    );
}

export default BlueButton;
