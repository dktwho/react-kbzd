import React from "react";

export function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle accTitle={props.accTitle} />
            <AccordionBody  />
        </div>
    )
}

function AccordionTitle(props: any) {
    return (
        <h3>{props.accTitle}</h3>
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