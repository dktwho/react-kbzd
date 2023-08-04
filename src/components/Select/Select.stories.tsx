import React, {useState} from 'react';
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return (
        <>
            <Select
                onChange={setValue}
                value={value}
                items={[{title: 'React', value: '1'}, {title: 'Vue', value: '2'}, {title: 'Angular', value: '3'}]}/>
        </>
    )
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={[{title: 'React', value: '1'}, {title: 'Vue', value: '2'}, {title: 'Angular', value: '3'}]}/>
        </>
    )
}