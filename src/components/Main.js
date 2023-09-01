// Main.js
import { Icon } from '@iconify/react';
import React from 'react';
import Typical from 'react-typical'
function Main() {
  return (
    <main>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-5">
              <img
                src="https://drive.google.com/uc?export=view&id=15sDejVe5p1l95Ll6j07FCH7fry3816Xh&rl"
                alt="Imagen personal"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className = "col-md-6">   
              <div>

                <h2 className="">
                  Yhilmar Andres Chaverra Castaño.
                </h2>
                <br></br>

                <p>
                <Typical
                    steps={[
                      'Bienvenido 😊', 1000,
                      'A mi Portafolio 😎', 1000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </p>
                
                
                <br></br>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"/></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 20q-2.275 0-3.888-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.313 3.188T18.5 20h-12Zm0-2h12q1.05 0 1.775-.725T21 15.5q0-1.05-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6Q9.925 6 8.462 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5q0 1.45 1.025 2.475T6.5 18Zm5.5-6Z"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M21.65 2.24a1 1 0 0 0-.8-.23l-13 2A1 1 0 0 0 7 5v10.35A3.45 3.45 0 0 0 5.5 15A3.5 3.5 0 1 0 9 18.5v-7.64l11-1.69v4.18a3.45 3.45 0 0 0-1.5-.35a3.5 3.5 0 1 0 3.5 3.5V3a1 1 0 0 0-.35-.76ZM5.5 20A1.5 1.5 0 1 1 7 18.5A1.5 1.5 0 0 1 5.5 20Zm13-2a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5ZM20 7.14L9 8.83v-3l11-1.66Z"/></svg>

                    <Icon icon="simple-icons:linux" width="45" height="45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Main;