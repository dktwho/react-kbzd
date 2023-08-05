import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'
const reducer = (state: boolean, action: ActionType ) => {
    if(action.type === TOGGLE_CONSTANT ) {
        return  !state
    }
    return state
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