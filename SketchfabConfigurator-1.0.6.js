// Sketchfab Viewer API: Change Texture/material
var version = '1.12.0';
var uid = '96f558dea845400495e03e64d053b517';
var iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 2;
canvas.height = 2;
var myMaterials;

var getColorAsTextureURL = function getColorAsTextureURL(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 2, 2);
    return canvas.toDataURL('image/png', 1.0);
};

var blackTextureURL = getColorAsTextureURL('black');
var blackTextureUID;

var error = function error() {
    console.error('Sketchfab API error');
};

var success = function success(api) {
    api.start(function () {
        api.addEventListener('viewerready', function () {
            var textures = [];
            api.addTexture(blackTextureURL, function (err, textureId) {
                blackTextureUID = textureId;
            });
            api.getMaterialList(function (err, materials) {
                myMaterials = materials;

                for (var i = 0; i < myMaterials.length; i++) {
                    var m = myMaterials[i];
                    textures[m.name] = m.channels.AlbedoPBR.texture;
                    console.log(m.name, m);
                }
            });

            function makeMyModelBlue(enabled) {
                for (var i = 0; i < myMaterials.length; i++) {
                    var m = myMaterials[i]; // here change only the channel you need to change

                    m.channels.EmitColor.factor = 1;
                    m.channels.EmitColor.enable = enabled;
                    m.channels.EmitColor.color = [0.0, 0.0, 1.0];
                    api.setMaterial(m);
                }
            }

            document.getElementById('blue').addEventListener('click', function () {
                makeMyModelBlue();
            });

            function makeMyModelTextured(enabled) {
                for (var i = 0; i < myMaterials.length; i++) {
                    var m = myMaterials[i];
                    m.channels.AlbedoPBR.enable = true;

                    if (enabled) {
                        console.log(textures[m.name]);
                        m.channels.AlbedoPBR.texture = textures[m.name];
                        m.channels.AlbedoPBR.color = false; //api.updateTexture(url, m.channels.AlbedoPBR.texture.uid,
                        // function(  ) {
                        //   api.setMaterial(m);
                        //}
                        //);
                    } else {
                        m.channels.AlbedoPBR.texture = false;
                        m.channels.AlbedoPBR.color = [1, 0, 0, 0];
                    }

                    api.setMaterial(m);
                }
            }

            function makeMyModelNormalMapped(enabled) {
                for (var i = 0; i < myMaterials.length; i++) {
                    var m = myMaterials[i];
                    m.channels.NormalMap.enable = enabled;
                    api.setMaterial(m);
                }
            }

            function makeMyModelWithMetalMap(enabled) {
                for (var i = 0; i < myMaterials.length; i++) {
                    var m = myMaterials[i];

                    if (enabled) {
                        m.channels.MetalnessPBR = {
                            enable: true,
                            factor: 1.0,
                            texture: {
                                internalFormat: 'LUMINANCE',
                                magFilter: 'LINEAR',
                                minFilter: 'LINEAR_MIPMAP_LINEAR',
                                texCoordUnit: 0,
                                textureTarget: 'TEXTURE_2D',
                                uid: 'cb645b638d7d4241a5c56e1554ce2628',
                                wrapS: 'REPEAT',
                                wrapT: 'REPEAT'
                            }
                        };
                    } else {
                        m.channels.MetalnessPBR = {
                            enable: true,
                            factor: 1.0,
                            texture: {
                                internalFormat: 'LUMINANCE',
                                magFilter: 'LINEAR',
                                minFilter: 'LINEAR_MIPMAP_LINEAR',
                                texCoordUnit: 0,
                                textureTarget: 'TEXTURE_2D',
                                uid: blackTextureUID,
                                wrapS: 'REPEAT',
                                wrapT: 'REPEAT'
                            }
                        };
                    }

                    api.setMaterial(m);
                }
            }

            function makeMyModelWithMetal(enabled) {
                for (var i = 0; i < myMaterials.length; i++) {
                    var m = myMaterials[i];
                    m.channels.MetalnessPBR.enable = enabled;
                    api.setMaterial(m);
                }
            }

            function makeMyModelWithOpacity(enabled) {
                for (var i = 0; i < myMaterials.length; i++) {
                    var m = myMaterials[i];

                    if (enabled) {
                        m.channels.Opacity = {
                            enable: true,
                            factor: 1.0,
                            texture: {
                                internalFormat: 'ALPHA',
                                magFilter: 'LINEAR',
                                minFilter: 'LINEAR_MIPMAP_LINEAR',
                                texCoordUnit: 0,
                                textureTarget: 'TEXTURE_2D',
                                uid: 'c3666f6c10bf4acab98aca21dce7dd12',
                                wrapS: 'REPEAT',
                                wrapT: 'REPEAT'
                            }
                        };
                    } else {
                        m.channels.Opacity = {
                            enable: true,
                            factor: 1.0,
                            texture: {
                                internalFormat: 'ALPHA',
                                magFilter: 'LINEAR',
                                minFilter: 'LINEAR_MIPMAP_LINEAR',
                                texCoordUnit: 0,
                                textureTarget: 'TEXTURE_2D',
                                uid: blackTextureUID,
                                wrapS: 'REPEAT',
                                wrapT: 'REPEAT'
                            }
                        };
                    }

                    api.setMaterial(m);
                }
            }

            (function () {
                var switched = false;
                var button = document.getElementById('blue');
                button.addEventListener('click', function () {
                    if (switched) {
                        button.textContent = 'not Blue';
                        makeMyModelBlue(switched);
                    } else {
                        button.textContent = 'Blue';
                        makeMyModelBlue(switched);
                    }

                    switched = !switched;
                });
            })();

            (function () {
                var switched = false;
                var button = document.getElementById('texture');
                button.addEventListener('click', function () {
                    if (switched) {
                        button.textContent = 'no texture';
                        makeMyModelTextured(switched);
                    } else {
                        button.textContent = 'Texture';
                        makeMyModelTextured(switched);
                    }

                    switched = !switched;
                });
            })();

            (function () {
                var switched = false;
                var button = document.getElementById('nmap');
                button.addEventListener('click', function () {
                    if (switched) {
                        button.textContent = 'no nmap';
                        makeMyModelNormalMapped(switched);
                    } else {
                        button.textContent = 'nmap';
                        makeMyModelNormalMapped(switched);
                    }

                    switched = !switched;
                });
            })();

            (function () {
                var switched = false;
                var button = document.getElementById('metal map');
                button.addEventListener('click', function () {
                    if (switched) {
                        button.textContent = 'no metal map';
                        makeMyModelWithMetalMap(switched);
                    } else {
                        button.textContent = 'metal map';
                        makeMyModelWithMetalMap(switched);
                    }

                    switched = !switched;
                });
            })();

            (function () {
                var switched = false;
                var button = document.getElementById('metal');
                button.addEventListener('click', function () {
                    if (switched) {
                        button.textContent = 'no metal';
                        makeMyModelWithMetal(switched);
                    } else {
                        button.textContent = 'metal';
                        makeMyModelWithMetal(switched);
                    }

                    switched = !switched;
                });
            })();

            (function () {
                var switched = false;
                var button = document.getElementById('opacity map');
                button.addEventListener('click', function () {
                    if (switched) {
                        button.textContent = 'no opacity map';
                        makeMyModelWithOpacity(switched);
                    } else {
                        button.textContent = 'opacity map';
                        makeMyModelWithOpacity(switched);
                    }

                    switched = !switched;
                });
            })();
        });
    });
};

client.init(uid, {
    success: success,
    error: error,
    autostart: 1,
    preload: 1
}); //////////////////////////////////
// GUI Code
//////////////////////////////////

function initGui() {
    var controls = document.getElementById('controls');
    var buttonsText = '';
    buttonsText += '<button id="blue">blue</button>';
    buttonsText += '<button id="texture">texture</button>';
    buttonsText += '<button id="nmap">normal map</button>';
    buttonsText += '<button id="metal map">metal map</button>';
    buttonsText += '<button id="opacity map">opacity map</button>';
    buttonsText += '<button id="metal">metal</button>';
    controls.innerHTML = buttonsText;
}

initGui(); //////////////////////////////////
// GUI Code end
//////////////////////////////////