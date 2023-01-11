import { useState } from "react";

const heavyWork = () => {
    console.log("heavy working...");
    return ["Jack", "Bob"];
}

/*
useState
*/

export default function UseSate({ age }) {
    // const [names, setNames] = useState(heavyWork());
    const [names, setNames] = useState(() => {
        return heavyWork();
    });
    const [input, setInput] = useState("");
    const btnClick = () => {
        setNames((pre) => {
            return [input, ...pre];
        });
    }
    return (
        <div>
            <input type="text" onChange={(e) => {
                setInput(e.target.value);
            }} />
            <button onClick={btnClick}>
                Upload
            </button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>
            })}
        </div>
    );
}