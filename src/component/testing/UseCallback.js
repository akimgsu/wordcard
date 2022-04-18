import { useState, useEffect, useCallback } from "react";
import Box from "./Box";


const UseCallback = () => {
    const [number, setNumber] = useState(1);
    const [toggle, setToggle] = useState(true);

    const someFunction = useCallback(() => {
        console.log(`someFunc: number: ${number}`);
        return;
    }, [number]);

    useEffect(() => {
        console.log("Change Function")
    }, [someFunction]);


    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);
    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'Pink',
            width: `${size}px`,
            height: `${size}px`,
        }
    }, [size])

    return (
        <div style={{ background: isDark ? 'black' : 'white' }}
        >
            <input type="number" value={number} onChange={(e) => setNumber((e.target.value))} />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br />
            <button onClick={someFunction}>Call Func</button>
            <br />
            <input type="number" value={size} onChange={(e) => setSize((e.target.value))} />
            <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
            <Box createBoxStyle={createBoxStyle} />
        </div>
    );
}

export default UseCallback