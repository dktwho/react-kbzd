import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <div>
                <PageTitle title={'This is App component!!!'}/>
                <PageTitle title={'My friends'}/>
                Article 1
                <Rating value={1}/>
                <Accordion titleValue={'---Menu---'}/>
                <Accordion titleValue={'---Users---'}/>
                Article 2
                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
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
