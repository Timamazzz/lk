import React from 'react';
import styles from "./styles";

interface ButtonProps {
    text: string;
    onClick: () => void;
    myStyles?: React.CSSProperties;
}

function BlueButton({ text, onClick, myStyles }: ButtonProps) {
    return (
        <button style={{...styles.button, ...myStyles}} onClick={()=>{onClick()}}>{text}</button>
    );
}

export default BlueButton;
