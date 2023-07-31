import React, {useState} from 'react';
import {Accordion} from "./Accordion";

export default  {
    title: 'Accordion',
    component: Accordion,
}

export const CollapsedMode = () => <Accordion titleValue={'User'} accordion={true} setAccordion={() => {}}  />
export const UnCollapsedMode = () => <Accordion titleValue={'User'} accordion={false} setAccordion={() => {}} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion accordion={value} setAccordion={setValue} titleValue={'Users'} />

}
