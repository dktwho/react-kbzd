import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <div>
                <AppTitle/>
                Article 1
                <Rating value={1}/>
                <Accordion/>
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


function AppTitle() {
    return (
        <div>This is App component</div>
    )
}

export default App;
