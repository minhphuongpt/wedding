import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

class NavItem extends React.Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav nav ml-auto">
                    <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
                    <li className="nav-item"><a href="#groom-bride-section" className="nav-link"><span>Groom &amp; Bride</span></a></li>
                    <li className="nav-item"><a href="#lovestory-section" className="nav-link"><span>Love Story</span></a></li>
                    <li className="nav-item"><a href="#greeting-section" className="nav-link"><span>Greetings</span></a></li>
                    <li className="nav-item"><a href="#people-section" className="nav-link"><span>People</span></a></li>
                    <li className="nav-item"><a href="#when-where-section" className="nav-link"><span>When &amp; Where</span></a></li>
                    <li className="nav-item"><a href="#rsvp-section" className="nav-link"><span>RSVP</span></a></li>
                    <li className="nav-item"><a href="#gallery-section" className="nav-link"><span>Gallery</span></a></li>
                </ul>
          </div>
        );
    }
}
export default NavItem;