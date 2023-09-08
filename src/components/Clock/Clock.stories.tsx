import React, {useState} from 'react';
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
}

// export const BaseExample = () => {
//     return <Clock/>
// }

export const BaseAnalog = () => {
    return <Clock mode={'analog'}/>
}

export const BaseDigital = () => {
    return <Clock mode={'digital'}/>
}
