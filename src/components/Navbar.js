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
    color: '#fff',
    zIndex: 1000,
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    borderBottom: '2px solid #f06',
    backgroundColor: '#05161A'
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
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    border: '2px solid transparent',
    transition: 'background-color 0.3s',
  };

  const hoverStyle = {
    backgroundColor: '#444', // Fondo gris oscuro en hover
  };

  return (
    <nav style={navStyle}>
      <h1 style={{ margin: 0 }}>Welcome</h1>
      <ul style={ulStyle}>
        {['inicio', 'perfil', 'proyectos', 'skills'].map((item, index) => (
          <li key={item} style={liStyle}>
            <Link 
              to={item} 
              smooth={true} 
              duration={500} 
              className="nav-link"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {index === 0 && <FaHome style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />}
              {index === 1 && <FaUser style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />}
              {index === 2 && <FaProjectDiagram style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />}
              {index === 3 && <FaCode style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />}
              <span className="d-none d-md-inline">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
