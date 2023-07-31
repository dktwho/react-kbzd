import React, {useState} from 'react';
import {OnOff, OnOffPropsType} from "./OnOff";
import { action } from '@storybook/addon-actions';


export default  {
    title: 'OnOff',
    component: OnOff,
}

const testAction = action('click')

export const OnModeTest = () => <OnOff indicator={true} setIndicator={testAction}  />
export const OnMode = () => <OnOff indicator={true} setIndicator={() => {}}  />
export const OffMode = () => <OnOff indicator={false}  setIndicator={() => {}}  />


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff indicator={value} setIndicator={setValue} />

}
