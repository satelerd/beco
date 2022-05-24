// import react
import React from "react";
import './styles.css'
// import ScriptTag from 'react-script-tag';



function Test() {
    // <!-- SCRIPTS -->

    // <!-- Loader key submit -->
    function loaderSubmit() {
        var user_input = document.getElementById('key-input').value;
        console.log(user_input)
        // if (user_input.length == 4) {
        //     document.getElementById('loader-button').disabled = false;
        // } else {
        //     document.getElementById('loader-button').disabled = true;
        // }

        var loader = document.getElementById('preloader');
        var title = document.getElementById('title-pers');
        if (user_input === "1") {
            loader.style.display = 'none'

            title.innerHTML = "Pisos Ingevec";
            document.getElementById("viewer").alt = "f12eb4bb124d4d4faf9257b7c91c1742";
        }
        else if (user_input === "2") {
            loader.style.display = 'none'

            title.innerHTML = "Banitorios Ingevec";
            document.getElementById("viewer").alt = "2";

        }
        else {
            alert('Clave incorrecta');
        }


    }

    // add event listener if the enter key is pressed, execute loaderSubmit()
    document.getElementById('key-input').addEventListener('keyup', function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            loaderSubmit();
        }
    });


    // // <!-- Funcion que cambia la imagen de referencia -->
    // function change_texture(texture) {
    //     console.log(texture);
    //     if (texture === "1") {
    //         document.getElementById("imageid").src = "https://i.ibb.co/qdNdhwW/Wood-Floor040-2-K-Color.jpg";    // aqui va la imagen asociada con la textura 1
    //         document.getElementById("imageid").alt = "1";
    //     } else if (texture === "2") {
    //         document.getElementById("imageid").src = "https://i.ibb.co/Rh0ksQs/Wood041-1-K-Color.jpg";
    //         document.getElementById("imageid").alt = "2";
    //     } else if (texture === "3") {
    //         document.getElementById("imageid").src = "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg";
    //         document.getElementById("imageid").alt = "3";
    //     } else if (texture === "4") {
    //         document.getElementById("imageid").src = "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg";
    //         document.getElementById("imageid").alt = "4";
    //     } else if (texture === "5") {
    //         document.getElementById("imageid").src = "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg";
    //         document.getElementById("imageid").alt = "5";
    //     } else if (texture === "6") {
    //         document.getElementById("imageid").src = "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg";
    //         document.getElementById("imageid").alt = "6";
    //     } else if (texture === "7") {
    //         document.getElementById("imageid").src = "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg";
    //         document.getElementById("imageid").alt = "7";
    //     }
    // }

    //     // <!-- Scripts para hacer funcionar sketchfab y cambiar las texturas -->
    //     {/* <script type=" text/javascript" src="https://static.sketchfab.com/api/sketchfab-viewer-1.3.2.js"></script>
    // <script type="text/javascript" src="./SketchfabConfigurator-1.0.6.js"></script> */}
    //     var alt = document.getElementById('viewer').alt;
    //     console.log(alt)

    //     var config = {
    //         "model": alt,
    //         "params": {
    //             "camera": 0,
    //             "preload": 1,
    //             "ui_controls": 0,
    //             "ui_infos": 0,
    //             "ui_watermark": 0
    //         },
    //         // Aqui puedes agregar o quitar funciones/opciones (texturas, colores, toggles, etc)
    //         "config": [

    //             // Opcion 1. para cambiar las texturas
    //             {
    //                 "name": "Texturas",
    //                 "material": "Material.001",
    //                 "channels": [
    //                     "AlbedoPBR"
    //                 ],
    //                 "type": "texture",
    //                 // Aqui se pueden modificar las texturas
    //                 "options": [
    //                     { "name": "Madera 01", "url": "https://i.ibb.co/qdNdhwW/Wood-Floor040-2-K-Color.jpg", "texture": 1 }, { "name": "Madera 02", "url": "https://i.ibb.co/Rh0ksQs/Wood041-1-K-Color.jpg", "texture": 2 }, { "name": "Madera 03", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 3 }, { "name": "Madera 04", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 4 }, { "name": "Madera 05", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 5 }, { "name": "Madera 06", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 6 }, { "name": "Madera 07", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 7 }, { "name": "Madera 08", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 8 }, { "name": "Madera 09", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 9 }, { "name": "Madera 10", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 10 }, { "name": "Madera 11", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 11 }, { "name": "Madera 12", "url": "https://i.ibb.co/DGgKXgL/Wood-Floor011-2-K-Color.jpg", "texture": 12 },
    //                 ],
    //                 "default": 0
    //             },

    //             // Opcion 2. para cambiar colores
    //             {
    //                 "name": "Color",
    //                 "type": "color",
    //                 "material": "COLOR VARIABLE ",
    //                 "default": "#628cac"
    //             },

    //             // // Opcion 3. toggle
    //             // {
    //             //     "name": "Toggle",
    //             //     "type": "visible",
    //             //     "selector": "[instance=\"1652\"]",
    //             //     "default": true
    //             // },

    //             // // Opcion 4. Select
    //             // {
    //             //     "name": "Select",
    //             //     "type": "select",
    //             //     "options": [],
    //             //     "default": 0
    //             // }

    //         ]
    //     };
    //     var iframeEl = document.getElementById('api-frame');
    //     var optionsEl = document.querySelector('.options');
    //     var configurator = new SketchfabConfigurator.Configurator(iframeEl, optionsEl, config);


    return (
        <body>
            <div id="preloader">
                <div className="loader-key">
                    <div class="ux-text">
                        <h1 class="loader-h1">Bienvenido <span class="bold">Ingevec</span> 👋</h1>
                        <h2 class="loader-h2">
                            Tu showroom personalizado está listo, aqui podras probar nuestros productos y diseños en tu
                            propio espacio</h2>


                        {/* <!-- create a list with the rules to how to use the showroom --> */}
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

            {/* <!-- APP --> */}
            <div class="app">
                {/* <!-- Primer container principal: Viewer --> */}
                <div class="viewer" alt="f12eb4bb124d4d4faf9257b7c91c1742">
                    <div class="business">
                        <img class="logo" src="" alt="logo" />
                        <h2 id="title-pers" class="title">Pisos Ingevec (banitorios)</h2>
                    </div>

                    {/* <iframe src="" id="api-frame" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                        preload="true"></iframe> */}
                </div>


                {/* <!-- Segundo container principal: Diseño --> */}
                <div class="design">
                    {/* <!-- Estas son las opciones de material (si se quiere editar hay que ir al script de sketchfab) --> */}
                    <div class="options"></div>

                    <div class="details">
                        <div class="actual">
                            <h4>
                                Diseño actual
                            </h4>
                            <img class="actual-img" id="imageid" src="https://i.ibb.co/qdNdhwW/Wood-Floor040-2-K-Color.jpg"
                                alt="1" />
                            <div class="zoom-text">
                                Acerca el mouse para hacer zoom
                            </div>
                        </div>
                        <div class="description">
                            <h4>
                                Piso SPC
                            </h4>
                            <p>Ultima generación de pisos vinilicos.</p>
                            <ul>
                                <li>
                                    100% Resistente al agua
                                </li>
                                <li>
                                    Resistente a la radiación UV
                                </li>
                                <li>
                                    Instalación rápida con sistema de “click”
                                </li>
                                <li>
                                    Excelente resistencia térmica
                                </li>
                            </ul>

                            <p>Descarga <a href="google.com">aquí</a> la ficha tecnica</p>
                        </div>
                    </div>

                    <div class="mail">
                        <h4>Cotiza la configuración actúal</h4>
                        <p>Te contactaremos a tu mail para entrar en detalles</p>
                        {/* <!-- <div class="submit">
                        <input class="mail-input" type="text" placeholder="ingresa tu mail">
                        <button class="submit-btn">enviar</button>
                    </div> --> */}
                        <div class="submit">
                            {/* <!-- modify this form HTML and place wherever you want your form --> */}
                            <form action="https://formspree.io/f/mgedrndl" method="POST">
                                <div class="submit-container">
                                    <div class="inputs">
                                        <label>
                                            <input class="mail-input" type="email" name="email" placeholder="Ingresa tu mail" />
                                        </label>
                                        <label>
                                            <textarea class="textarea" name="message"
                                                placeholder="Que textura(s) te gustaria cotizar"></textarea>
                                        </label>
                                    </div>
                                    <button class="submit-btn" type="submit">Enviar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Time delay for loader --> */}
            {/* <!-- <script>
            // loader.style.display = 'none';
            function doTimeout(ms) {
                setTimeout(function () {
                    var ids = window.ids; //is non empty
                }, ms);
            }

            function sleep(ms, callback) {
                var start = new Date().getTime(), expire = start + ms;
                while (new Date().getTime() < expire) { }
                callback(ms);
            }

            function start() {
                console.log("yoooo he")
                sleep(3000, doTimeout);
                console.log("timeees")
                var loader = document.getElementById('loader-input');
                loader.style.display = 'content';

                // alert('myframe is loaded');
            }; -->
        </script> */}

        </body>

    );
}

export default Test;