import { useEffect, useRef } from "react";

const UseRef = () => {
    const inputRef = useRef();
    useEffect(() => {
        console.log("Calling use effect");
        inputRef.current.focus();
    }, []);
    const login = () => {
        alert(`Wecome $(inputRef.current.value)`);
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default UseRef