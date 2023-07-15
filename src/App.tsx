import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import OnOffWithState from "./components/OnOff/OnOffWithState";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div className="App">
            <div>
                <PageTitle title={'This is App component!!!'}/>
                Article 1
                <Accordion titleValue={'---Menu---'} collapsed={true}/>
                <Accordion titleValue={'---Users---'} collapsed={false}/>
                {/*<Rating value={0}/>*/}
                {/*<Rating value={1}/>*/}
                {/*<Rating value={2}/>*/}
                {/*<Rating value={3}/>*/}
                {/*<Rating value={4}/>*/}
                {/*<Rating value={5}/>*/}
                <br/>
                <hr/>
                <h2>Uncontrolled accordion with state inside for collapsed</h2>
                <UnControlledAccordion titleValue={'---Frontend Stack---'}/>
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
