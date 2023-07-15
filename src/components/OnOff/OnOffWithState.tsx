import React, {useState} from 'react';
import styled from './OnOffWithState.module.css'


const OnOffWithState = () => {
    const [indicator, setIndicator] = useState(false)

    return (
        <div className={styled.container}>
            <button className={indicator ? `${styled.activeBtn}` : `${styled.templateBtn}`} onClick={() => setIndicator(true)}>On</button>
            <button className={!indicator ? styled.inActiveBtn : styled.templateBtn } onClick={() => {setIndicator(false)}}>Off</button>
            <div onClick={() => setIndicator(!indicator)} className={ indicator ?  styled.indicatorActive : styled.indicatorInActive }></div>

        </div>
    );
};

export default OnOffWithState;