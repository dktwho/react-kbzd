import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

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


function AppTitle() {
    return (
        <>This is App component</>
    )
}

export default App;
