// components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaProjectDiagram, FaCode } from 'react-icons/fa';

function Navbar() {
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333', // Fondo oscuro similar a los componentes anteriores
    color: '#fff',
    zIndex: 1000,
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  };

  const liStyle = {
    marginLeft: '1rem',
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    transition: 'background-color 0.3s, border 0.3s',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    border: '2px solid transparent', // Borde transparente por defecto
  };

  const activeLinkStyle = {
    backgroundColor: '#444',
    border: '2px solid #f06', // Borde rosado cuando el enlace está activo
  };

  const iconStyle = {
    marginRight: '0.5rem',
    fontSize: '1.2rem', // Tamaño del icono
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#444';
    e.target.style.border = '2px solid #f06'; // Aplicar borde rosado al pasar el mouse
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.border = '2px solid transparent'; // Quitar borde al dejar el mouse
  };

  return (
    <nav style={navStyle}>
      <h1 style={{ margin: 0 }}>Welcome</h1>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link 
            to="inicio" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            style={linkStyle}
            activeStyle={activeLinkStyle} // Aplicar estilos activos
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaHome style={iconStyle} />
            <span className="d-none d-md-inline">Inicio</span>
          </Link>
        </li>
        <li style={liStyle}>
          <Link 
            to="perfil" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            style={linkStyle}
            activeStyle={activeLinkStyle} // Aplicar estilos activos
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaUser style={iconStyle} />
            <span className="d-none d-md-inline">Perfil</span>
          </Link>
        </li>
        <li style={liStyle}>
          <Link 
            to="proyectos" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            style={linkStyle}
            activeStyle={activeLinkStyle} // Aplicar estilos activos
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaProjectDiagram style={iconStyle} />
            <span className="d-none d-md-inline">Proyectos</span>
          </Link>
        </li>
        <li style={liStyle}>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            style={linkStyle}
            activeStyle={activeLinkStyle} // Aplicar estilos activos
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaCode style={iconStyle} />
            <span className="d-none d-md-inline">Skills</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
