import React, {useState} from 'react';
import './App.css';
import {Accordion, AccordionPropsType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import OnOffWithState from "./components/OnOff/OnOffWithState";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordion, setAccordion] = useState<boolean>(false)
    return (
        <div className="App">
            <div>
                <PageTitle title={'This is App component!!!'}/>
                Article 1
                <Accordion titleValue={'---Menu--click-'} accordion={accordion} setAccordion={setAccordion} />
                <br/>
                <hr/>
                <h2>Uncontrolled accordion with state inside for collapsed</h2>
                <UnControlledAccordion titleValue={'---Frontend Stack--click-'}/>
                <h2>Uncontrolled rating without props, used useState</h2>
                Article 2
                <UnControlledRating/>
                <hr/>
                <OnOff status={true}/>
                <OnOff status={false}/>
                <hr/>
                <OnOffWithState/>
                <br/>
                <hr/>
                <h2>Controlled component with outside props and data</h2>
                <Rating value={ratingValue} setRatingValue={setRatingValue}/>
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
