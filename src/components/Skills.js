import React from 'react';

function Skills() {
  const skillsByCategory = {
    "Lenguajes de Programación": [
      { name: 'C', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', link: 'https://www.cprogramming.com/' },
      { name: 'Java', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', link: 'https://www.java.com' },
      { name: 'Python', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', link: 'https://www.python.org' },
      { name: 'JavaScript', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    ],
    "Frontend": [
      { name: 'HTML5', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', link: 'https://www.w3.org/html/' },
      { name: 'React', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', link: 'https://reactjs.org/' },
      { name: 'Next.js', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', link: 'https://nextjs.org/' },
    ],
    "Hardware y Electrónica": [
      { name: 'Arduino', img: 'https://cdn.worldvectorlogo.com/logos/arduino-1.svg', link: 'https://www.arduino.cc/' },
    ],
    "Game Development": [
      { name: 'Unity', img: 'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg', link: 'https://unity.com/' },
      { name: 'Godot', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg', link: 'https://godotengine.org/' },
    ],
    "Desarrollo Web y Backend": [
      { name: 'Django', img: 'https://cdn.worldvectorlogo.com/logos/django.svg', link: 'https://www.djangoproject.com/' },
      { name: 'Flask', img: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg', link: 'https://flask.palletsprojects.com/' },
      { name: 'NodeJS', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', link: 'https://nodejs.org' },
    ],
    "DevOps y Herramientas": [
      { name: 'VS Code', img: 'https://www.returngis.net/wp-content/uploads/2015/11/VS-Code.png', link: 'https://code.visualstudio.com/' },
      { name: 'MySQL', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg', link: 'https://www.mysql.com/' },
      { name: 'AWS', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', link: 'https://aws.amazon.com' },
      { name: 'Docker', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg', link: 'https://www.docker.com/' },
      { name: 'Git', img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', link: 'https://git-scm.com/' },
    ],
  };  

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: 'transparent', color: '#ffffff' }}>
      <div className="container">
        {/* Título de la página */}
        <h1 className="text-center mb-4">Mis Habilidades y Tecnologías</h1>
        <p className="text-center mb-5" style={{ fontSize: '1.2rem' }}>
          A continuación, se muestran mis habilidades y las herramientas que manejo, organizadas por categorías.
        </p>

        {/* Sección de habilidades por categoría */}
        {Object.keys(skillsByCategory).map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-5">
            {/* Título de cada categoría */}
            <h2 className="text-center mb-4" style={{ borderBottom: '2px solid #ffffff', paddingBottom: '10px' }}>
              {category}
            </h2>
            <div className="row">
              {skillsByCategory[category].map((skill, skillIndex) => (
                <div key={skillIndex} className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
                  <div className="card skill-card text-center" style={{backgroundColor: '#333', borderRadius: '8px', border: '2px solid #f06', padding: '20px' }}>
                    <a href={skill.link} target="_blank" rel="noreferrer">
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="skill-icon img-fluid"
                        style={{ width: '60px', height: '60px' }}
                      />
                    </a>
                    <p className="mt-2" style={{ color: '#ffffff', fontWeight: 'bold' }}>{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
