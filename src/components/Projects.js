// components/Projects.js
import React from 'react';

function Projects() {
  // Estilos en línea
  const sectionStyle = {
    padding: '5rem 0',
    backgroundColor: 'transparent', // Fondo oscuro para la sección
  };

  const titleStyle = {
    color: '#f06', // Título blanco
    marginBottom: '2rem',
  };

  const cardStyle = {
    backgroundColor: 'transparent', // Fondo transparente para la tarjeta
    border: '2px solid #f06', // Borde rosado
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra
  };

  const cardBodyStyle = {
    padding: '1.5rem',
  };

  const cardTitleStyle = {
    color: '#f06', // Título de la tarjeta rosado
    marginBottom: '1rem',
  };

  const cardTextStyle = {
    color: '#fff', // Texto blanco
  };

  const buttonStyle = {
    backgroundColor: '#f06', // Botón rosado
    borderColor: '#f06',
    color: '#fff',
  };

  const imgStyle = {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    width: '100%', // Ancho del 100% del contenedor
    height: '200px', // Altura fija
    objectFit: 'cover', // Ajuste de imagen
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div className="container">
        <h2 className="text-center" style={titleStyle}>Proyectos</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card project-card" style={cardStyle}>
              <img
                src="https://imgur.com/2VR24O2.jpg"
                alt="Proxy Inverso + Balanceador de Carga"
                className="card-img-top"
                style={imgStyle}
              />
              <div className="card-body" style={cardBodyStyle}>
                <h5 className="card-title" style={cardTitleStyle}>Proxy Inverso + Balanceador de Carga</h5>
                <p className="card-text" style={cardTextStyle}>
                  Implementación de un servidor proxy con 
                  AWS y Instancias EC2 para conectar múltiples servicios a múltiples clientes ademas de balancear cargas.
                </p>
                <a href="https://github.com/esyepesv/PILB/tree/main" className="btn" style={buttonStyle}>Ver Detalles</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card project-card" style={cardStyle}>
              <img 
                src="https://imgur.com/2m9fttd.jpg"
                alt="Middleware de Mensajería Asincrónica"
                className="card-img-top"
                style={imgStyle}
              />
              <div className="card-body" style={cardBodyStyle}>
                <h5 className="card-title" style={cardTitleStyle}>Middleware de Mensajería Asincrónica</h5>
                <p className="card-text" style={cardTextStyle}>
                  Implementación de un MOM 
                  el cual debe permitir la conexión de múltiples 
                  clientes a estos servicios utilizando comunicación asíncrona.
                </p>
                <a href="https://github.com/esyepesv/MOM" className="btn" style={buttonStyle}>Ver Detalles</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card project-card" style={cardStyle}>
              <img 
                src="https://imgur.com/9OsqRp9.jpg"
                alt="Pockeneas"
                className="card-img-top"
                style={imgStyle}
              />
              <div className="card-body" style={cardBodyStyle}>
                <h5 className="card-title" style={cardTitleStyle}>Pockeneas - Despliegue con Docker Swarm</h5>
                <p className="card-text" style={cardTextStyle}>
                  Despliegue de una aplicación distribuida utilizando 
                  Docker Swarm para orquestar múltiples contenedores en un clúster de nodos.
                </p>
                <a href="https://github.com/yachaverrc/pockeneas" className="btn" style={buttonStyle}>Ver Detalles</a>
              </div>
            </div>
          </div>
          {/* Agrega más tarjetas de proyectos aquí */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
