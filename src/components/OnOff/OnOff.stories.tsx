import React, {useState} from 'react';
import {OnOff, OnOffPropsType} from "./OnOff";


export default  {
    title: 'OnOff',
    component: OnOff
}


export const OnMode = () => <OnOff indicator={true} setIndicator={() => {}}  />
export const OffMode = () => <OnOff indicator={false}  setIndicator={() => {}}  />


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff indicator={value} setIndicator={setValue} />

}
