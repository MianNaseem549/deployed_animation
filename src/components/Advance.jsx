import React from 'react'
import './Advance.css'
import img4 from '../images/99.webp';
import img5 from '../images/88.jpg';
import img6 from '../images/77.jpg';
// import { Link } from 'react-router-dom';

function Advance() {
    return (
        <>
            <h1 data-text="Image Animation" className='title'>Image Animation</h1>
            <div className="images">
                <div className="image-container">
                    <img src={img5} alt="" />
                    <img className='transition-image' src={img6} alt="" />
                </div>

                <div className="image-container fadee">
                    <img src={img4} alt="" />
                </div>
            </div>
        </>
    )
}

export default Advance
