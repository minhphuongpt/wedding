import React from 'react';
import NavItem from './../components/NavItem';
import NavToggler from './../components/NavToggler';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Hookup</a>
                    <NavToggler />
                    <NavItem />
                </div>
            </nav>
        );
    }
}
export default Nav;