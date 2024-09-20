// components/ExperienceAndLanguages.js
import React from 'react';

function ExperienceAndLanguages() {
  const languages = [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Básico - Intermedio' },
  ];

  const experiences = [
    { role: 'Coordinador Semillero de Investigación y creación sonora Acústica', company: 'EAFIT', year: 2021 },
    { role: 'Monitor Administrativo en Desarrollo Estudiantil', company: 'EAFIT', year: 2020 },
    { role: 'Monitor Administrativo en la Universidad de los Niños', company: 'EAFIT', year: 2022 },
    { role: 'Desarrollador Full stack y gestor de infraestructura', company: 'BPO Consultores', year: 2024 },
    { role: 'Desarrollador Back y despliegue de aplicaciones', company: 'Acacia Dev', year: 2024}
  ];

  const sectionStyle = {
    padding: '1rem',
    borderRadius: '8px',
    margin: '1rem 0',
  };

  const titleStyle = {
    marginBottom: '0.5rem',
    color: '#f06', // Color de los títulos
    textAlign: 'left',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f06', // Color de los separadores
  };

  const textStyle = {
    color: 'white', // Color del texto
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Idiomas</h2>
      <ul style={listStyle}>
        {languages.map((lang, index) => (
          <li key={index} style={itemStyle}>
            <span style={textStyle}>{lang.language}</span>
            <span style={textStyle}>{lang.level}</span>
          </li>
        ))}
      </ul>

      <h2 style={titleStyle}>Experiencia</h2>
      <ul style={listStyle}>
        {experiences.map((exp, index) => (
          <li key={index} style={itemStyle}>
            <span style={textStyle}>{exp.role}</span>
            <span style={textStyle}>({exp.company}, {exp.year})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceAndLanguages;
