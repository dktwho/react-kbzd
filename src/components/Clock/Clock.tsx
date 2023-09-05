import React, {useEffect, useState} from "react";


type PropsType = {}
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date)

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    const secondStrings = date.getSeconds() < 10 ? `0 ${date.getSeconds()}` : date.getSeconds()
    const minutesStrings = date.getMinutes() < 10 ? `0 ${date.getMinutes()}` : date.getMinutes()
    const hoursStrings = date.getHours() < 10 ? `0 ${date.getHours()}` : date.getHours()
    return <div>
        <span>{hoursStrings}</span>
        :
        <span>{minutesStrings}</span>
        :
        <span>{secondStrings}</span>
    </div>
}