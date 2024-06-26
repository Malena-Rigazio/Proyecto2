import React, { useState } from 'react';
import './estilo.css';


import rest1 from './imgGastronomia/bar1.jpg';
import rest2 from './imgGastronomia/bar2.jpg';
import rest3 from './imgGastronomia/bar3.jpg';
import rest4 from './imgGastronomia/bar4.jpg';
import turis1 from './imgTurismo/turismo1.jpeg';
import turis2 from './imgTurismo/turismo2.jpg';
import turis3 from './imgTurismo/turismo3.jpg';
import turis4 from './imgTurismo/turismo4.jpg';
import hospe1 from './imgHospedaje/hospedaje1.jpg';
import hospe2 from './imgHospedaje/hospedaje2.jpg';
import hospe3 from './imgHospedaje/hospedaje3.jpg';
import hospe4 from './imgHospedaje/hospedaje4.jpeg';
import atracc1 from './imgAtracciones/atraccion1.jpg';
import atracc2 from './imgAtracciones/atraccion2.jpg';
import atracc3 from './imgAtracciones/atraccion3.jpg';
import atracc4 from './imgAtracciones/atraccion4.jpg';


function App() {
  const [cajaSeleccionada, setCajaSeleccionada] = useState(null);
  const [mostrarCajaNueva, setMostrarCajaNueva] = useState(false);
  const [imagenesMostradas, setImagenesMostradas] = useState([]);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([
    { usuario: 'admin', contrasena: 'admin' }, // Usuario de ejemplo
  ]);
  const [error, setError] = useState('');


  const handleClickCaja = (nombreCaja) => {
    if (nombreCaja === cajaSeleccionada) {
      setMostrarCajaNueva(false);
      setTimeout(() => {
        setCajaSeleccionada(null);
        setImagenesMostradas([]);
      }, 600);
    } else {
      setCajaSeleccionada(nombreCaja);
      setMostrarCajaNueva(true);

      switch (nombreCaja) {
        case "Lugares turísticos":
          setImagenesMostradas([turis1, turis2, turis3, turis4]);
          break;

        case "Hospedaje":
          setImagenesMostradas([hospe1, hospe2, hospe3, hospe4]);
          break;

        case "Atracciones":
          setImagenesMostradas([atracc1, atracc2, atracc3, atracc4]);
          break;

        case "Restaurantes":
          setImagenesMostradas([rest1, rest2, rest3, rest4]);
          break;

        default:
          setImagenesMostradas([]);
          break;
      }

      setMenuVisible(false); // Cerrar el menú al seleccionar una categoría
    }
  };

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleVolverClick = () => {
    setMostrarCajaNueva(false);
    setTimeout(() => {
      setCajaSeleccionada(null);
      setImagenesMostradas([]);
    }, 600);
  };

  const handleSobreNosotrosClick = () => {
    setCajaSeleccionada("Sobre Nosotros");
    setMostrarCajaNueva(true);
    setImagenesMostradas([]);
    setMenuVisible(false); // Cerrar el menú al seleccionar "Sobre Nosotros"
  };

  const handleresenasClick = () => {
    setCajaSeleccionada("Reseñas");
    setMostrarCajaNueva(true);
    setImagenesMostradas([]);
    setMenuVisible(false); // Cerrar el menú al seleccionar "Sobre Nosotros"
  };


  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!usuario || !contrasena) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Validación del inicio de sesión
    const usuarioValido = usuariosRegistrados.find(
      (user) => user.usuario === usuario && user.contrasena === contrasena
    );

    if (usuarioValido) {
      setSesionIniciada(true);
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  const descripciones = {
    "Lugares turísticos": [
      "Tafí del Valle",
      "Catedral, Capital",
      "Museo, Casa Histórica Independencia",
      "Parque, Sierra de San Javier"
    ],
    "Hospedaje": [
      "Hotel Sheraton",
      "Hotel Sol, San Javier",
      "Hotel Garden Plaza, Capital",
      "Hotel Bicentenario Suites & Spa"
    ],
    "Atracciones": [
      "Aerosillas, El Cadillal",
      "Museo Miguel Lillo De Ciencias Naturales",
      "Reserva Experimental, Horco Molle",
      "Parque Aéreo, Tirolesa y Palestra"
    ],
    "Restaurantes": [
      "Mora Bistró Argentino",
      "Los Naranjos",
      "Postino Restobar, Capital",
      "El Portal"
    ]
  };

const sobreNosotrosText = `¡Bienvenido a nuestro mundo de la programación!
Somos un equipo formado por tres apasionados estudiantes de programación unidos por nuestra 
curiosidad y amor a la tecnología. Nuestros nombres son Malena, Lautaro y Facundo. Juntos, 
estamos emocionados de compartir nuestro conocimiento y experiencia a través de esta plataforma.

Como estudiantes de programación, hemos dedicado horas a dominar el lenguaje de JavaScript, 
y nos encanta explorar nuevas tecnologías emergentes como inteligencia artificial y desarrollo web.
Nuestra formación académica en la Universidad Tecnológica Nacional, nos ha equipado con las 
bases sólidas necesarias para enfrentar desafíos técnicos complejos.

Nos destacamos por nuestra capacidad para trabajar en equipo y nuestra pasión por la innovación.
Creemos firmemente en la importancia de la calidad del código y la experiencia del usuario. 
Cada proyecto que emprendemos es una oportunidad para mejorar nuestras habilidades y ofrecer 
soluciones creativas y efectivas. Nuestra misión con esta página web es proporcionar una plataforma 
intuitiva y útil para entusiastas de la tecnología y programación. Nos comprometemos a mantener 
altos estándares de excelencia y a seguir aprendiendo y mejorando continuamente.

¡Únete a nosotros en este viaje! Estamos emocionados por el futuro y esperamos expandir nuestros 
horizontes junto a nuestra creciente comunidad de desarrolladores y aficionados a la tecnología.
`;

const resenasText = `No se encontraron reseñas por el momento.`;

 // Redireccionar si la sesión está iniciada
 if (sesionIniciada) {
  return (
    <div>
      <h1>Bienvenido al panel de administración</h1>
      {/* Aquí puedes colocar el contenido de la página de administración */}
    </div>
  );
}

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="estilo.css" />
        <title>Explora Tuc</title>
      </head>
      <body>

      <h1 class="titLogin">Explora Tuc</h1>
      <div className='Login'>

      <h2 className='title'>INICIO DE SESIÓN</h2>
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <div className='elemento'>
          <label className='user' htmlFor='usuario'>Usuario</label>
          <input type="text" placeholder="ejemplo:Ronaldo123" value={usuario}
            onChange={(e) => setUsuario(e.target.value)} />
        </div>

        <div className='elemento'>
          <label className='pasw' htmlFor="usuario">Contraseña</label>
          <input type="password" placeholder="ejemplo:Sanchez321" value={contrasena}
            onChange={(e) => setContrasena(e.target.value)} />
        </div>
        
        {error && <p className="error-message">{error}</p>}

        <div className='elemento'>
          <button className='btnIniciar' type="submit">Iniciar</button>
        </div>
        </form>

      </div>


          <div className="iniciado">
            <nav>
              <div className="nav-left">
                <h1>Explora Tuc</h1>
              </div>
              <details className="contOp" open={menuAbierto}>
                <summary onClick={handleMenuClick}>Menú</summary>
                <ul className={`rtl ${menuVisible ? 'visible' : 'oculto'}`} >
                  <li onClick={handleresenasClick}><a href="#">Reseñas</a></li>
                  <li onClick={() => handleClickCaja("Ayuda")}><a href="#">Ayuda</a></li>
                  <li onClick={handleSobreNosotrosClick}><a href="#">Sobre Nosotros</a></li>
                  <li onClick={() => handleClickCaja("Ajustes")}><a href="#">Ajustes</a></li>
                </ul>
              </details>
            </nav>

            <main>
              {!mostrarCajaNueva && (
                <>
                  <div className="fila">
                    <div className="caja1" onClick={() => handleClickCaja("Lugares turísticos")}>
                      <h2>Lugares turísticos</h2>
                    </div>
                    <div className="caja2" onClick={() => handleClickCaja("Hospedaje")}>
                      <h2>Hospedaje</h2>
                    </div>
                  </div>
                  <div className="fila">
                    <div className="caja3" onClick={() => handleClickCaja("Atracciones")}>
                      <h2>Atracciones</h2>
                    </div>
                    <div className="caja4" onClick={() => handleClickCaja("Restaurantes")}>
                      <h2>Restaurantes</h2>
                    </div>
                  </div>
                </>
              )}

              {mostrarCajaNueva && (
                <div className={`caja-nueva ${mostrarCajaNueva ? 'visible' : 'oculto'}`}>
                  <h2>{cajaSeleccionada}</h2>
                  <button className='btnVolver' onClick={handleVolverClick}>Volver</button>
                  {cajaSeleccionada === "Sobre Nosotros" ? (
                    <div className="sobre-nosotros">
                      <p>{sobreNosotrosText}</p>
                    </div>
                  ) : (
                    <section>
                      {imagenesMostradas.map((imagen, index) => (
                        <div key={index} className="image-container">
                          <img src={imagen} alt={`${descripciones[cajaSeleccionada][index]}`} />
                          <p className="description">{descripciones[cajaSeleccionada][index]}</p>
                        </div>
                      ))}
                    </section>
                  )}
                </div>
              )}
            </main>

            <footer>
              <p>&copy; 2024 Mi Proyecto. Todos los derechos reservados.</p>
            </footer>
          </div>
      </body>
    </html>
  );
}

export default App;