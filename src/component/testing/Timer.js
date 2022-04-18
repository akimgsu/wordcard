import { useEffect } from "react";


export default function Timer(props) {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("working timer...");
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log("timer is done");
        }
    }, []);

    return (
        <div>
            <span>Timer is starting.</span>
        </div>
    );
}