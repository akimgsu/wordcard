import { useState } from "react";

export default function Hello() {
    // let name = "Mike";
    const [name, tempName] = useState("Mike");

    return (
        <div>
            <h2 id="name">{name}</h2>
            <button
                onClick={() => {
                    tempName(name === "Mike" ? "Jane" : "Mike");
                }}
            >
                Change
            </button>
        </div>
    );
}