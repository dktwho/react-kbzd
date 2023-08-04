import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: any
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }


    return (
        <>
            <div className={s.select}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active && <div className={s.items}>
                    {props.items.map(el => <div onMouseEnter={() => {setHoveredElementValue(el.value)}} className={s.item + ' ' + (hoveredItem === el ? s.selected: '')} onClick={() => onItemClick(el.value)} key={el.value}>{el.title}</div>)}
                </div>}
            </div>
        </>
    );
};

