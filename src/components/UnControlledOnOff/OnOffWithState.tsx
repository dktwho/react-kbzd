import React, {useState} from 'react';
import styled from './OnOffWithState.module.css'


export type PropsType = {
    defaultOn?: boolean
}
export const OnOffWithState = (props: PropsType) => {
    const [indicator, setIndicator] = useState(props.defaultOn )

    return (
        <div className={styled.container}>
            <button className={indicator ? `${styled.activeBtn}` : `${styled.templateBtn}`}
                    onClick={() => setIndicator(true)}>On
            </button>
            <button className={!indicator ? styled.inActiveBtn : styled.templateBtn} onClick={() => {
                setIndicator(false)
            }}>Off
            </button>
            <div onClick={() => setIndicator(!indicator)}
                 className={indicator ? styled.indicatorActive : styled.indicatorInActive}></div>

        </div>
    );
};

