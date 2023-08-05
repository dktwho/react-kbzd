import React, {useReducer} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)


    const collapsedClick = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
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