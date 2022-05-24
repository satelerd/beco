import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* change public to update this */}
        <title>Beco - Configura tu espacio</title>
        <link rel="stylesheet" href="./styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </head>

      <body>

        {/* Loading screen */}
        <div id="preloader">
          <div class="loader-key">
            <div class="ux-text">
              <h1 class="loader-h1">Bienvenido <span class="bold">Ingevec</span> 👋</h1>
              <h2 class="loader-h2">
                Tu showroom personalizado está listo, aqui podras probar nuestros productos y diseños en tu
                propio espacio</h2>


              {/* create a list with the rules to how to use the showroom */}
              <p class="loader-p"> ¿Como usar?</p>
              <ul>
                <li>
                  <p class="loader-p">
                    Explora tu espacio con el mouse
                  </p>
                </li>
                <li>
                  <p class="loader-p">
                    Experimenta con las texturas y colores <span class="bold">BECO</span>™</p>
                </li>
                <li>
                  <p class="loader-p">
                    Finalmente, ingresa tu correo y tu cotizacion estará en camino
                  </p>
                </li>
              </ul>
            </div>
            <div id="loader-input">
              <input type="text" id="key-input" placeholder="Ingresa tu clave" />
              <button id="loader-button" onclick="loaderSubmit()">Comenzar</button>
            </div>
          </div>
          <div class="loader-logos">
            <img class="loader-img" src="./Assets/Logo_ingevec_white.png" alt="" />

            <img class="loader-img" src="./Assets/Logo_ingevec_white.png" alt="" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
