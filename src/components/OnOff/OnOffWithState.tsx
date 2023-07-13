import React, {useState} from 'react';
import styled from './OnOffWithState.module.css'


const OnOffWithState = () => {
    const [indicator, setIndicator] = useState(false)

    const indicatorOff = () => {
        setIndicator(false)
    }
    const indicatorOn = () => {
        setIndicator(true)
    }

    const toggleIndicatorOnOff = () => {
        setIndicator(!indicator)
    }


    return (
        <div className={styled.container}>
            <button className={indicator ? `${styled.activeBtn}` : `${styled.templateBtn}`} onClick={indicatorOn}>On</button>
            <button className={!indicator ? styled.inActiveBtn : styled.templateBtn } onClick={indicatorOff}>Off</button>
            <div onClick={toggleIndicatorOnOff} className={ indicator ?  styled.indicatorActive : styled.indicatorInActive }></div>

        </div>
    );
};

export default OnOffWithState;