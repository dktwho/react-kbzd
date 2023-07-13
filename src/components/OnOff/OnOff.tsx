import React from 'react';
import styled from './OnOff.module.css'

type OnOffPropsType = {
    status: boolean
}
export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={styled.container}>
            <span>
               <button className={props.status ? styled.activeBtn : styled.templateBtn}>On</button>
               <button className={!props.status ? styled.inActiveBtn : styled.templateBtn}>Off</button>
            </span>
            <div className={props.status ? styled.indicatorActive : styled.indicatorInActive}></div>
        </div>
    );
};

