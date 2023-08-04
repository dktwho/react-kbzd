import React from 'react';
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => <>
    <Select
        onChange={() => {
        }}
        value={'2'}
        items={[{title: 'React', value: 1}, {title: 'Vue', value: 2}, {title: 'Angular', value: 3}]}/>


</>

export const WithoutValue = () => <>
    <Select
        onChange={() => {
        }}
        items={[{title: 'React', value: 1}, {title: 'Vue', value: 2}, {title: 'Angular', value: 3}]}/>
</>



