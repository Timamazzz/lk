import React from 'react';
import styles from "./styles";
import Info from "../../components/project/info/info";

function Home() {
    return (
        <div style={styles.container}>
            <text style={styles.text}>Данные по патенту</text>
            <Info />
        </div>
    );
}

export default Home;
