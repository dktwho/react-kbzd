import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type PropsType = {
    mode?: 'analog' | 'digital'
}


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

export type ClockViewPropsType = {
    date: Date
}

