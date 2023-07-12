import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                This App component
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

function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Star() {
    return (
        <div>star</div>
    )
}

export default App;
