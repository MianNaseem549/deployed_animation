import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Animation.css'
import img1 from '../images/1.jpg';
import { Link } from 'react-router-dom';

function Animation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className='App'>
      <h1>Animations on Fade</h1>
      <div className="grids">
        <div><Link to="/slide" className="btn btn-primary">Sign up</Link></div>
        <br />
        <Link to="/zoom"><img src={img1} alt="" /></Link>
        <div className="boxes">1</div>
        <div className="boxes">2</div>
        <div className="boxes">3</div>

        <div data-aos='fade' className="boxes">Fade</div>
        <div data-aos='fade-up' className="boxes">Fade up</div>
        <div data-aos='fade-left' className="boxes">Fade left</div>
        <div data-aos='fade-up-right' className="boxes">fade-up-right</div>
        <div data-aos='fade-down-right' className="boxes">fade-down-right</div>
        <div data-aos='fade-up-left' className="boxes">fade-up-left</div>
        <div data-aos='fade-down-left' className="boxes">fade-down-left</div>

      </div>
    </div>
  )
}

export default Animation