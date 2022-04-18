import { useMemo, useState, useEffect } from "react";

const timeConsumeCal = (number) => {
    console.log('take time');
    for (let i = 0; i < 999999999; i++) { }
    return number + 10000;
}
const justCal = (number) => {
    console.log('Just cal');
    return number + 1;
}


const UseMemo = () => {
    const [longNum, setLongNum] = useState(1);
    const [easyNum, setEasyNum] = useState(1);
    const [isKorea, setIsKorea] = useState(true);
    // const longSum = timeConsumeCal(longNum);
    const longSum = useMemo(() => {
        return timeConsumeCal(longNum);
    }, [longNum]);
    const easySum = justCal(easyNum);

    // const location = {
    //     country: isKorea ? 'Korean' : 'Others'
    // }
    const location = useMemo(() => {
        return { country: isKorea ? 'Korean' : 'Others' };
    }, [isKorea])

    useEffect(() => {
        console.log("Call This")
    }, [location])

    return (
        <div>
            <h3>Long time</h3>
            <input type="number" value={longNum} onChange={(e) => setLongNum(parseInt(e.target.value))} />
            <span>+ 10000 = {longSum}</span>
            <h3>Esay Cal</h3>
            <input type="number" value={easyNum} onChange={(e) => setEasyNum(parseInt(e.target.value))} />
            <span>+ 1 = {easySum}</span>
            <h3>Where are you from?</h3>
            <p>Country: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>Fly Out</button>
        </div>
    );
}

export default UseMemo