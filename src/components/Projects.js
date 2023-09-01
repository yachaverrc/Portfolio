// Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center text-white mb-4">Proyectos</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 project-card">
                <img
                  src="https://drive.google.com/uc?export=view&id=1_rBdzc2MDSZUXs-8JpackEB3-hvZDEBI"
                  alt="Proyecto 1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title project-title">Proxy Inverso + Balanceador de Carga</h5>
                  <p className="card-text project-description">Implementacion de un servidor proxy con 
                  AWS y Instancias EC2 para conectar multiples servicios a multiples clientes.</p>
                  <a href="https://github.com/esyepesv/PILB/tree/main" className="btn btn-primary">Ver Detalles</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 project-card">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1vZQ2OgXYs932dfzy7h9rsIuVuwSjbA9w"
                  alt="Proyecto 2"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title project-title">Middleware de Mensajería Asincrónica</h5>
                  <p className="project-description">Implementación de un MOM 
                  el cual debe permitir la conexión de múltiples 
                  clientes a estos servicios utilizando comunicación asíncrona.</p>
                  <a href="https://github.com/esyepesv/MOM" className="btn btn-primary">Ver Detalles</a>
                </div>
              </div>
            </div>
            {/* Puedes agregar más tarjetas de proyectos aquí */}
          </div>
        </div>
      </section>
  );
}

export default Projects;
