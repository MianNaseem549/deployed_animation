import React from 'react';
import './Testimonial.css';
import img11 from '../images/t4.jpg';
import { Link } from 'react-router-dom';


const Testimonial = () => {
    return (
        <div class="box">
            <div class="content">
                <img src={img11} alt="" />
                <h2 > Mian Naseem<br /><span>Reat JS Developer</span></h2>
                <Link to="#"> Hire me</Link>
            </div>
        </div>
    )
}

export default Testimonial