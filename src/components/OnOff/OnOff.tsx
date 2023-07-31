import React from 'react';
import styled from './OnOff.module.css'

export type OnOffPropsType = {
    indicator: boolean
    setIndicator: (indicator: boolean) => void
}
export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={styled.container}>
            <span>
               <button onClick={() => props.setIndicator(true)} className={props.indicator ? styled.activeBtn : styled.templateBtn}>On</button>
               <button onClick={() => props.setIndicator(false)} className={!props.indicator ? styled.inActiveBtn : styled.templateBtn}>Off</button>
            </span>
            <div onClick={() => props.setIndicator(!props.indicator)} className={props.indicator ? styled.indicatorActive : styled.indicatorInActive}></div>
        </div>
    );
};

