import React, {useState, KeyboardEvent, useEffect} from 'react';
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

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const prevElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (prevElement) {
                        props.onChange(prevElement.value)
                        return;
                    }
                }
            }
            props.onChange(props.items[0].value )
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }




    return (
        <>
            <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active && <div className={s.items}>
                    {props.items.map(el => <div onMouseEnter={() => {
                        setHoveredElementValue(el.value)
                    }} className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                                                onClick={() => onItemClick(el.value)} key={el.value}>{el.title}</div>)}
                </div>}
            </div>
        </>
    );
};

