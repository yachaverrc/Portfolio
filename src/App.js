import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Perfil from './components/Perfil';
import ExperienceAndLanguages from './components/ExperienceAndLanguages'; // Importa el nuevo componente
import './App.css'; // Asegúrate de que tu CSS esté correctamente importado

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid"> {/* Ajusta el padding según la altura del Navbar */}
        <div className="row">
          <div className="main-content">
            <Main />
            <div className="separator-gradient"></div> {/* Separador entre Main y Perfil */}
            <Perfil />
            <div className="separator-gradient"></div> {/* Separador entre Skills y ExperienceAndLanguages */}
            <ExperienceAndLanguages /> {/* Agrega el nuevo componente aquí */}
            <div className="separator-gradient"></div> {/* Separador entre Perfil y Projects */}
            <Projects />
            <div className="separator-gradient"></div> {/* Separador entre Projects y Skills */}
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
