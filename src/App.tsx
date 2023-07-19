import React from 'react';
import Header from "./components/project/header/header";
import styles from "./styles";
import Main from "./screens/Main/Main";
import Home from "./screens/Home/Home";

function App() {
  return (
      <div style={styles.App}>
        <Header />

        {/*<Main/>*/}
        <Home/>
      </div>
  );
}

export default App;
