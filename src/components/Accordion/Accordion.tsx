import React from "react";

export type AccordionPropsType = {
    titleValue: string
    accordion: boolean
    setAccordion: (value: boolean) => void

}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} setAccordion={props.setAccordion} accordion={props.accordion}/>
            {!props.accordion && <AccordionBody/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    accordion: boolean
    setAccordion: (value: boolean) => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.setAccordion(!props.accordion)}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}