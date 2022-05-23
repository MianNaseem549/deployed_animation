import React from 'react';

import './Flip.css';

function Flip() {
    return (

        <div className="App">
            <h1>Animations on Flip</h1>
            <div className="grids">
                <div className="boxes1">1</div>
                <div className="boxes1">2</div>
                <div className="boxes1">3</div>
                <div data-aos="flip-up" className="boxes1">Flip-up</div>
                <div data-aos="flip-down" className="boxes1">Flip-down</div>
                <div data-aos="flip-right" className="boxes1">Flip-right</div>
                <div data-aos="flip-left" className="boxes1">Flip-left</div>
            </div> 
            
        </div>
        

    )
}

export default Flip