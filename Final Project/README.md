Murky clouds obscured the sun.
========
#### Name：SHEN YIWEN ####
#### Student Number：B161006080 ####

### Source of Ideas ###

The idea came from a rainy evening, the smell of grass permeating the campus, the dark clouds in the sky hazy, this feeling I think should be recorded. So I created this scene, the ground is grass, the ground will not stop floating. The clouds in the sky are accompanied by thunder, and the sky can be dimmed slowly by pressing buttons.



### Usage ####

This code uses a number of JS documents to control the mouse, keyboard and some special effects.

```html
<script src="js/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
<script src="js/BufferGeometryUtils.js"></script>
<script src="js/NormalMapShader.js"></script>
<script src="js/ShaderTerrain.js"></script>
<script src="js/WebGL.js"></script>
<script src="js/index.js"></script>
```

### Code structure ####

The code first imports a moving lawn scene and a camera, uses the keyboard's "m" to control his float up and down, and adds annotations to the bottom of the screen. Then the whole background color was changed to match the rain scene. In order to create the misty feeling of rain, a layer of fog was added to the scene. A map of a dark cloud was then imported and placed over the scene, forming a group of them.

In order to create the effect of fading the sky in the rainy day, I added a background color change process, which can be controlled by the "n" of the keyboard, and the annotation is also added under the screen.

Background sound is the continuous circulation of thunder, making the whole scene lifelike.

A slogan was added to the bottom of the entire screen. Change the domain name of the web page.

```javascript
var renderer, container, stats;

var camera, scene, controls;
var cameraOrtho, sceneRenderTarget;

var uniformsNoise, uniformsNormal, uniformsTerrain,
    heightMap, normalMap,
    quadTarget;

var directionalLight, pointLight;

var terrain;

var animDelta = 0, animDeltaDir = - 1;
var lightVal = 0, lightDir = 1;

var clock = new THREE.Clock();

var updateNoise = true;

var mlib = {};

var planecloud;
var cloudsAll = new THREE.Group();
if (cloudsAll.isGroup === true) {
    console.log(1212)
}

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();

// create a global audio source
var sound = new THREE.Audio(listener);

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();


init();
animate();

function onKeyDown(event) {

    switch (event.keyCode) {

        case 78: /*N*/ lightDir *= - 1; break;
        case 77: /*M*/ animDeltaDir *= - 1; break;

    }

}

clouds()
function clouds() {
    let map = new THREE.TextureLoader().load('img/wuyun.png');
    map.wrapT = THREE.ClampToEdgeWrapping;

    let material = new THREE.MeshBasicMaterial({
        map: map,
        transparent: true,
        opacity: .9,
        // blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
        color: 0xB1C7DE
    });


```
###  Add attachment ###

IMAGE:   wuyun.png

Background sound effect:  thunder.wav


###  Consult ###

https://threejs.org/examples/?q=terr#webgl_terrain_dynamic

### GitHub LINK ####
https://github.com/845558128/DAT505_GitHub

### Preview ####
[image](https://github.com/845558128/DAT505_GitHub/blob/master/images/day.png)
[image](https://github.com/845558128/DAT505_GitHub/blob/master/images/night.png)
