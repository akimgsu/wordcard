import { useEffect, useRef } from "react";

/*
Storing space
Changing state -> rendering -> init valuable in component
Changing Ref -> No Rendering -> keep valuable 
Ref is working with DOM
*/

/*
Context is static valuables in App.
prop vs Context
*/


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