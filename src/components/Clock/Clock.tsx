import React, {useEffect, useState} from "react";


type PropsType = {}

const  getTwoDigitsString = (num: number) => num < 10 ? `0 + ${num}` : num
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date)

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])



    const secondStrings = getTwoDigitsString(date.getSeconds())
    const minutesStrings = getTwoDigitsString(date.getMinutes())
    const hoursStrings = getTwoDigitsString(date.getHours())
    return <div>
        <span>{hoursStrings}</span>
        :
        <span>{minutesStrings}</span>
        :
        <span>{secondStrings}</span>
    </div>
}