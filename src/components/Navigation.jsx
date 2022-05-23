import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Animations</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Fade Animations</Link>
                            <Link className="nav-link" to="/flip">Flip Animations</Link>
                            <Link className="nav-link" to="/slide">Slide Animations</Link>
                            <Link className="nav-link" to="/zoom">Zoom Animations</Link>
                            <Link className="nav-link" to="/render">Render Component</Link>
                            <Link className="nav-link" to="/advance">Advance Animation</Link>
                            <Link className="nav-link" to="/testimonial">Testimonial</Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation