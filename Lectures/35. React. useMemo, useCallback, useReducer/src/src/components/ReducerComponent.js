import {useReducer, useState} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'plus':
            return {
                ...state,
                count: state.count + 1
            };
        case 'minus':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

function ReducerComponent() {
    const [num, setNum] = useState(0);
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const {count} = state;

    return (
        <div>
            <button onClick={() => dispatch({ type: 'minus' })}>-</button>
            {count}
            <button onClick={() => dispatch({ type: 'plus' })}>+</button>
        </div>
    )
}

export default ReducerComponent;
