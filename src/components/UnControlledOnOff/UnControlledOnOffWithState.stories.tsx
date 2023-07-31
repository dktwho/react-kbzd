import React from 'react';
import {OnOffWithState} from "./OnOffWithState";

export default  {
    title: 'OnOffWithState',
    component: OnOffWithState,
}

export const OnMode = () => <OnOffWithState defaultOn={true} />
export const OffMode = () => <OnOffWithState defaultOn={false} />

export const ModeChanging = () => {

     return <OnOffWithState />

}


