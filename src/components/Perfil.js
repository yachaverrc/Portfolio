// components/Perfil.js
import React from 'react';

function Perfil() {
  return (
    <section id="perfil" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="perfil-text">
              <h2>Mi Perfil</h2>
              <p>Soy un estudiante de Ingeniería de sistemas con conocimientos en lo que 
                respecta al desarrollo de software, uso de frontend y backend para estructurar 
                páginas web, además poseo conocimiento en metodologías ágiles, mi área de mayor 
                interés es el mundo de los DevOps, integrar proyectos de software en infraestructura de T.I.
                <br></br> 
                <br></br> 
                Me considero una persona empática, con habilidades de diálogo, responsable, sociable, soy una persona muy participativa en equipos de trabajo, entregado a dar lo mejor de mi en cada aspecto de la vida e interesado en aprender diariamente para mejorar mi desempeño en un entorno laboral.
                </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="perfil-images">
              {/* Aquí irán las 4 imágenes */}
              <div className="image-grid">
                <div class="polaroid">
                    <a href="#" title="A good day!">
                        <img height="30" src="https://drive.google.com/uc?export=view&id=1U_RsVyE8OskTKqdcKv8o00fSpmRYtXCE"/>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
