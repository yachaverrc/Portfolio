// Header.js
import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="main" smooth={true} duration={500} className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="perfil" smooth={true} duration={500} className="nav-link">Perfil</Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} className="nav-link">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link to="skills" smooth={true} duration={500} className="nav-link">Habilidades</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
