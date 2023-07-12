import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <div>
                <AppTitle/>
                <Rating/>
                <Accordion/>
            </div>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    )
}


function Star() {
    return (
        <div>star</div>
    )
}

function AppTitle() {
    return (
        <>This is App component</>
    )
}

export default App;
