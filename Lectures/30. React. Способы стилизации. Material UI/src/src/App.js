import './App.css';
import React from 'react';
import Inline from "./components/Inline/Inline";
import Styled from "./components/Styled/Styled";
import Modules from "./components/Modules/Modules";
import MaterialUI from "./components/MaterialUI/MaterialUI";

function App() {
    return (
        <div className="App">
            {/*<Inline type={'red'}/>*/}
            {/*<Inline type={'green'}/>*/}
            {/*<Styled/>*/}
            {/*<Modules/>*/}
            <MaterialUI/>
        </div>
    );
}

export default App;
