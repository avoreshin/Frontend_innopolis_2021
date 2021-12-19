import './App.css';
import {useCallback, useState} from "react";
import CallbackComponent from "./components/CallbackComponent";

function App() {
    const [counter, setCounter] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const functionOne = () => {
        console.log('Without useCallback');
    }

    const functionTwo = useCallback(() => {
        console.log('With useCallback');
    }, [counter]);
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Counter 1</button>
            <button onClick={() => setCounterTwo(counterTwo + 1)}>Counter 2</button>
            <CallbackComponent functionTwo={functionTwo} functionOne={functionOne}/>
        </div>
    );
}

export default App;
