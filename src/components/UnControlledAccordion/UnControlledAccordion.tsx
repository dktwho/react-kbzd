import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

export function UnControlledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    const collapsedClick = () => {
        setCollapsed(prev => !collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsedClick={collapsedClick}/>
            {collapsed ? <AccordionBody/> : ''}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsedClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.collapsedClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>React</li>
            <li>Vue</li>
            <li>Angular</li>
        </ul>
    )
}