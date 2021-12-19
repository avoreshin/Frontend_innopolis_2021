import {useMemo, useState} from "react";

const sum = (n) => {
    console.log('SUM', n);
    return n + n;
}

function MemoComponent() {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(false);
    const result = useMemo(() => sum(num), [num]);

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>{num}</button>
            <button
                onClick={() => setIsGreen(!isGreen)}
                style={{backgroundColor: isGreen ? 'green' : 'red'}}
            >
                Кнопка {result}
            </button>
        </div>
    )
}

export default MemoComponent;
