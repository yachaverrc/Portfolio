import React, { useState } from 'react'; // Importa React y useState

import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Perfil from './components/Perfil';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="barra">
        <Sidebar />
        <div className='page'>
          <Main />
          <Perfil />
          <Projects />
          <Skills />
        </div>
      </div>   
      
    </div>
  );
}

export default App;




