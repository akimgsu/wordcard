import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
    const [name, setName] = useState("Mike");
    const [old, setAge] = useState(age);
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    return (
        <div>
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name={name} old={old} />
            <button
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                    setAge(old + 1);
                }}
            >
                Change
            </button>
        </div>
    );
}