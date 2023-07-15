import React from 'react';
import styled from './OnOff.module.css'

type OnOffPropsType = {
    indicator: boolean
    setIndicator: () => void
}
export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={styled.container}>
            <span>
               <button onClick={props.setIndicator} className={props.indicator ? styled.activeBtn : styled.templateBtn}>On</button>
               <button onClick={props.setIndicator} className={!props.indicator ? styled.inActiveBtn : styled.templateBtn}>Off</button>
            </span>
            <div onClick={props.setIndicator} className={props.indicator ? styled.indicatorActive : styled.indicatorInActive}></div>
        </div>


    );
};

