import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Accordion, AccordionPropsType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOffWithState} from "./components/UnControlledOnOff/OnOffWithState";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Select} from "./components/Select/Select";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordion, setAccordion] = useState<boolean>(false)
    const [indicator, setIndicator] = useState<boolean>(true)
    // const [select, setSelect] = useState('3')
    return (
        <div className="App">
            <div>
                <PageTitle title={'This is App component!!!'}/>
                <h2>Controlled accordion with outside props used useState</h2>
                <Accordion titleValue={'---Menu--click-'} accordion={accordion} setAccordion={setAccordion}/>
                <br/>
                <hr/>
                <h2>Uncontrolled accordion with state inside for collapsed</h2>
                <UnControlledAccordion titleValue={'---Frontend Stack--click-'}/>
                <h2>Uncontrolled rating without props, used useState</h2>
                <UnControlledRating/>
                <hr/>
                <h2>Controlled Rating component with outside props and data</h2>
                <Rating value={ratingValue} setRatingValue={setRatingValue}/>
                <hr/>
                <h3>Controlled On/Off toggle with props </h3>
                <OnOff indicator={indicator} setIndicator={() => setIndicator(!indicator)}/>
                <hr/>
                <h3 className='App'>Uncontrolled On/Off toggle with local state</h3>
                <OnOffWithState/>
                <br/>
            </div>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h2>{props.title}</h2>
    )
}

export default App;
