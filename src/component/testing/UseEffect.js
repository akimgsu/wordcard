import { useEffect, useState } from "react";
import Timer from "./Timer";

/*
useEffect( () => {}); rendering every time
useEffect( () => {}, []); rendering only start
useEffect( () => {}, [value]); rendering when value updates
useEffect( () => { // subscribe 
return () => {
    // unsubscribe
}}, []); clean up
*/

const heavyWork = () => {
    console.log("heavy working...");
    return ["Jack", "Bob"];
}

export default function UseSate({ age }) {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
    const [showTimer, setShowTimer] = useState(false);

    // useEffect(() => { console.log("Always Calling every change") });
    // useEffect(() => { console.log("Just one time") }, []); 
    useEffect(() => { console.log("Calling only change count") }, [count]);
    useEffect(() => { console.log("Calling only change name") }, [name]);

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Update
            </button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value);
            }} />
            <span>name: {name}</span>
            <div>
                {showTimer && <Timer />}
                <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
            </div>
        </div>
    );
}