import React, {useEffect, useState} from "react";


type PropsType = {
    mode?: 'analog' | 'digital'
}

const getTwoDigitsString = (num: number) => num < 10 ? `0${num}` : num
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date)

    useEffect(() => {
        const intevalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intevalId)
        }
    }, [])


    let view;
    switch (props.mode) {
        case 'analog': {
            view = <AnalogClockView date={date}/>
            break;
        }
        case 'digital': {
            view = <DigitalClockView date={date}/>
            break;
        }
    }

    return (
        <div>
            {view}
        </div>
    )
}

type ClockViewPropsType = {
    date: Date
}
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <><span>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span></>
    )
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <span>Analog</span>
    )
}