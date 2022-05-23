import React from 'react'
import './Slide.css';
import Animation from './Animation';

function Slide() {
    return (
        <div className="App">
            <h1>Animation on Slide</h1>
            <div className="grids">
                <div className="boxes2">1</div>
                <div className="boxes2">2</div>
                <div className="boxes2">3</div>
                <div data-aos="slide-up" className="boxes2">Slide-up</div>
                <div data-aos="slide-down" className="boxes2">Slide-down</div>
                <div data-aos="slide-right" className="boxes2">Slide-right</div>
                <div data-aos="slide-left" className="boxes2">Slide-left</div>
            </div>
            <Animation/>
        </div>
    )
}

export default Slide