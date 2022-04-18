import { useState, useEffect } from "react";


const Box = ({ createBoxStyle }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log("Change Box");
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    return (
        <div style={style}></div>
    );
}

export default Box