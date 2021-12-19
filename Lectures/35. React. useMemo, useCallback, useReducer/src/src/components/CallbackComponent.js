import {useEffect} from "react";

export default function CallbackComponent({functionOne, functionTwo}) {
    useEffect(() => {
        functionOne();
    }, [functionOne]);

    useEffect(() => {
        functionTwo();
    }, [functionTwo])
    return (
        <div></div>
    )
}
