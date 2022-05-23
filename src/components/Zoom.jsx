import React from 'react'
import './Zoom.css';

function Zoom() {
  return (
    <div className="App">
        <h1>Animations on Zoom</h1>
        <div className="grids">
            <div className="boxes3">1</div>
            <div className="boxes3">2</div>
            <div className="boxes3">3</div>
            <div data-aos='zoom-in' className="boxes3">zoom-in</div>
            <div data-aos='zoom-in-up' className="boxes3">zoom-in-up</div>
            <div data-aos='zoom-in-down' className="boxes3">zoom-in-down</div>
            <div data-aos='zoom-in-right' className="boxes3">zoom-in-right</div>
            <div data-aos='zoom-in-left' className="boxes3">zoom-in-left</div>
            <div data-aos='zoom-out' className="boxes3">zoom-out</div>
            <div data-aos='zoom-out-up' className="boxes3">zoom-out-up</div>
            <div data-aos='zoom-out-down' className="boxes3">zoom-out-down</div>
            <div data-aos='zoom-out-left' className="boxes3">zoom-out-left</div>
            <div data-aos='zoom-out-right' className="boxes3">zoom-out-right</div> 
        </div>
    </div>
  )
}

export default Zoom