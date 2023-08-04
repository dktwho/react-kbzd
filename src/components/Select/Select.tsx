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
    const [active, setActive] = useState(true)

    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <>
            <select>
                <option value=''>React</option>
                <option value=''>Vue</option>
                <option value=''>Angular</option>
            </select>
            <div className={s.select + ' '}>
                <h3>{selectedItem && selectedItem.title}---</h3>
                {active &&     <div className={s.items}>
                    {props.items.map(el => <div key={el.value}>{el.title}</div>)}
                </div> }

            </div>
        </>
    );
};

