import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
 import { faBars} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
  <a className="navbar-brand logo" href="https://google.com"><i className="fas fa-user-alt"></i> Skander Msalmi</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color:'#FFF'}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="https://google.com">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://google.com">about me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://google.com">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://google.com">how work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://google.com">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://google.com">Contacts</a>
      </li>
    </ul>
    
  </div>
  </div>
</nav>
    )
}

export default Navbar
