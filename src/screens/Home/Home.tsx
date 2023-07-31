import React, { useState } from 'react';
import styles from "./styles";
import Info from "../../components/project/info/info";


function Home() {
  
    return (
        <div style={styles.container}>
            <Info/>
        </div>
    );
}

export default Home;
