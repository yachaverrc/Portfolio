// components/Perfil.js
import React from 'react';

function Perfil() {
  // Estilos en línea
  const sectionStyle = {
    padding: '5rem 0',
    display: 'flex',
    alignItems: 'center',
  };

  const cardStyle = {
    backgroundColor: 'transparent', // Sin color de fondo
    border: '2px solid #f06', // Borde rosado
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra
    borderRadius: '8px',
    width: '100%',
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
  };

  const titleStyle = {
    color: '#f06', // Título rosado
    marginBottom: '1rem',
  };

  const textStyle = {
    color: '#fff', // Texto blanco
  };

  const imageContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const polaroidStyle = {
    marginBottom: '1rem',
  };

  const imgStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <section id="perfil" style={sectionStyle}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Card con el perfil de texto */}
          <div className="col-md-7 mb-4 d-flex">
            <div className="card" style={cardStyle}>
              <div className="card-body" style={cardBodyStyle}>
                <h2 className="card-title" style={titleStyle}>Mi Perfil</h2>
                <p className="card-text" style={textStyle}>
                Soy estudiante de Ingeniería de Sistemas con experiencia en desarrollo de software y metodologías ágiles. Tengo conocimientos en frontend y backend para crear y estructurar páginas web. Mi interés principal es en DevOps, integrando proyectos de software en infraestructura de TI.
                <br />
                <br />
                Me considero empático, responsable y sociable, con habilidades de diálogo y participación en equipos de trabajo. Estoy comprometido a aprender y mejorar continuamente en mi desempeño profesional.
              </p>
              </div>
            </div>
          </div>

          {/* Imágenes en estilo polaroid */}
          <div className="col-md-5">
            <div style={imageContainerStyle}>
              <div className="polaroid" style={polaroidStyle}>
                <a href="#" title="">
                  <img
                    className="img-fluid rounded"
                    src="https://imgur.com/vWNTgr8.jpg"
                    alt="Perfil"
                    style={imgStyle}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
