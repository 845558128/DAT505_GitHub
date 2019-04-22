
var vertexShader = [

    ' varying vec2 vUv;',
    'uniform vec2 scale;',
    'uniform vec2 offset;',

    'void main(void ) {',

    'vUv = uv * scale + offset;',
    'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',

    '}'
].join('\n');

var fragmentShaderNoise = [



'uniform float time;',
'varying vec2 vUv;',

'vec4 permute( vec4 x ) {',

    'return mod( ( ( x * 34.0 ) + 1.0 ) * x, 289.0 );',

'}',

'vec4 taylorInvSqrt( vec4 r ) {',

  '  return 1.79284291400159 - 0.85373472095314 * r;',

'}',

'float snoise( vec3 v ) {',

  '  const vec2 C = vec2( 1.0 / 6.0, 1.0 / 3.0 );',
   ' const vec4 D = vec4( 0.0, 0.5, 1.0, 2.0 );',

    // First corner

  '  vec3 i  = floor( v + dot( v, C.yyy ) );',
   ' vec3 x0 = v - i + dot( i, C.xxx );',

    // Other corners

   ' vec3 g = step( x0.yzx, x0.xyz );',
 '   vec3 l = 1.0 - g;',
  '  vec3 i1 = min( g.xyz, l.zxy );',
 '   vec3 i2 = max( g.xyz, l.zxy );',

  '  vec3 x1 = x0 - i1 + 1.0 * C.xxx;',
  '  vec3 x2 = x0 - i2 + 2.0 * C.xxx;',
  '  vec3 x3 = x0 - 1. + 3.0 * C.xxx;',

    // Permutations

   ' i = mod( i, 289.0 );',
  '  vec4 p = permute( permute( permute(',
         '    i.z + vec4( 0.0, i1.z, i2.z, 1.0 ) )',
          ' + i.y + vec4( 0.0, i1.y, i2.y, 1.0 ) )',
       '    + i.x + vec4( 0.0, i1.x, i2.x, 1.0 ) );',

    // Gradients
    // ( N*N points uniformly over a square, mapped onto an octahedron.)

   ' float n_ = 1.0 / 7.0;', // N=7

  '  vec3 ns = n_ * D.wyz - D.xzx;',

   ' vec4 j = p - 49.0 * floor( p * ns.z *ns.z ); ', //  mod(p,N*N)

 '   vec4 x_ = floor( j * ns.z );',
  '  vec4 y_ = floor( j - 7.0 * x_ ); ', // mod(j,N)

   ' vec4 x = x_ *ns.x + ns.yyyy;',
'    vec4 y = y_ *ns.x + ns.yyyy;',
'    vec4 h = 1.0 - abs( x ) - abs( y );',

'    vec4 b0 = vec4( x.xy, y.xy );',
'    vec4 b1 = vec4( x.zw, y.zw );',


  '  vec4 s0 = floor( b0 ) * 2.0 + 1.0;',
'    vec4 s1 = floor( b1 ) * 2.0 + 1.0;',
'    vec4 sh = -step( h, vec4( 0.0 ) );',

'    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;',
'    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;',

'    vec3 p0 = vec3( a0.xy, h.x );',
'    vec3 p1 = vec3( a0.zw, h.y );',
'    vec3 p2 = vec3( a1.xy, h.z );',
'    vec3 p3 = vec3( a1.zw, h.w );',

    // Normalise gradients

'    vec4 norm = taylorInvSqrt( vec4( dot( p0, p0 ), dot( p1, p1 ), dot( p2, p2 ), dot( p3, p3 ) ) );',
'    p0 *= norm.x;',
'    p1 *= norm.y;',
'    p2 *= norm.z;',
'    p3 *= norm.w;',

    // Mix final noise value

  '  vec4 m = max( 0.6 - vec4( dot( x0, x0 ), dot( x1, x1 ), dot( x2, x2 ), dot( x3, x3 ) ), 0.0 );',
   ' m = m * m;',
   ' return 42.0 * dot( m*m, vec4( dot( p0, x0 ), dot( p1, x1 ),',
                          '        dot( p2, x2 ), dot( p3, x3 ) ) );',

'}',

'float surface3( vec3 coord ) {',

'    float n = 0.0;',

'    n += 1.0 * abs( snoise( coord ) );',
'    n += 0.5 * abs( snoise( coord * 2.0 ) );',
'    n += 0.25 * abs( snoise( coord * 4.0 ) );',
'    n += 0.125 * abs( snoise( coord * 8.0 ) );',

'    return n;',

'}',

'void main( void ) {',

  '  vec3 coord = vec3( vUv, -time );',
   ' float n = surface3( coord );',

  '  gl_FragColor = vec4( vec3( n, n, n ), 1.0 );',

'}',

].join('\n');

// varying vec2 vUv;
// uniform vec2 scale;
// uniform vec2 offset;

// void main( void ) {

//     vUv = uv * scale + offset;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

// }


if (WEBGL.isWebGLAvailable() === false) {

    document.body.appendChild(WEBGL.getWebGLErrorMessage());

}

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

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

function init() {

    container = document.getElementById('container');

    // SCENE (RENDER TARGET)

    sceneRenderTarget = new THREE.Scene();

    cameraOrtho = new THREE.OrthographicCamera(SCREEN_WIDTH / - 2, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, - 10000, 10000);
    cameraOrtho.position.z = 100;

    sceneRenderTarget.add(cameraOrtho);

    // CAMERA

    camera = new THREE.PerspectiveCamera(40, SCREEN_WIDTH / SCREEN_HEIGHT, 2, 4000);
    camera.position.set(- 1200, 200, 1200);

    //Audio - Settings
    camera.add(listener);

    // controls.keys = [65, 83, 68];

    // SCENE (FINAL)

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x737C77); // 0x050505  #737C77 背景颜色

    scene.fog = new THREE.Fog(0x737C77, 2000, 4000);
    scene.add(cloudsAll)

    // LIGHTS

    scene.add(new THREE.AmbientLight(0x111111));

    directionalLight = new THREE.DirectionalLight(0xffffff, 1.15);
    directionalLight.position.set(500, 2000, 0);
    scene.add(directionalLight);

    pointLight = new THREE.PointLight(0xff4400, 1.5);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // HEIGHT + NORMAL MAPS

    var normalShader = THREE.NormalMapShader;

    var rx = 256, ry = 256;
    var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };

    heightMap = new THREE.WebGLRenderTarget(rx, ry, pars);
    heightMap.texture.generateMipmaps = false;

    normalMap = new THREE.WebGLRenderTarget(rx, ry, pars);
    normalMap.texture.generateMipmaps = false;

    uniformsNoise = {

        "time": { value: 1.0 },
        "scale": { value: new THREE.Vector2(1.5, 1.5) },
        "offset": { value: new THREE.Vector2(0, 0) }

    };

    uniformsNormal = THREE.UniformsUtils.clone(normalShader.uniforms);

    uniformsNormal["height"].value = 0.05;
    uniformsNormal["resolution"].value.set(rx, ry);
    uniformsNormal["heightMap"].value = heightMap.texture;

    // var vertexShader = document.getElementById('vertexShader').textContent;

    // TEXTURES

    var loadingManager = new THREE.LoadingManager(function () {

        terrain.visible = true;

    });
    var textureLoader = new THREE.TextureLoader(loadingManager);

    var specularMap = new THREE.WebGLRenderTarget(2048, 2048, pars);
    specularMap.texture.generateMipmaps = false;

    var diffuseTexture1 = textureLoader.load("img/grasslight-big.jpg");
    var diffuseTexture2 = textureLoader.load("img/backgrounddetailed6.jpg");
    var detailTexture = textureLoader.load("img/grasslight-big-nm.jpg");

    diffuseTexture1.wrapS = diffuseTexture1.wrapT = THREE.RepeatWrapping;
    diffuseTexture2.wrapS = diffuseTexture2.wrapT = THREE.RepeatWrapping;
    detailTexture.wrapS = detailTexture.wrapT = THREE.RepeatWrapping;
    specularMap.texture.wrapS = specularMap.texture.wrapT = THREE.RepeatWrapping;

    // TERRAIN SHADER

    var terrainShader = THREE.ShaderTerrain["terrain"];

    uniformsTerrain = THREE.UniformsUtils.clone(terrainShader.uniforms);

    uniformsTerrain['tNormal'].value = normalMap.texture;
    uniformsTerrain['uNormalScale'].value = 3.5;

    uniformsTerrain['tDisplacement'].value = heightMap.texture;

    uniformsTerrain['tDiffuse1'].value = diffuseTexture1;
    uniformsTerrain['tDiffuse2'].value = diffuseTexture2;
    uniformsTerrain['tSpecular'].value = specularMap.texture;
    uniformsTerrain['tDetail'].value = detailTexture;

    uniformsTerrain['enableDiffuse1'].value = true;
    uniformsTerrain['enableDiffuse2'].value = true;
    uniformsTerrain['enableSpecular'].value = true;

    uniformsTerrain['diffuse'].value.setHex(0xffffff);
    uniformsTerrain['specular'].value.setHex(0xffffff);

    uniformsTerrain['shininess'].value = 30;

    uniformsTerrain['uDisplacementScale'].value = 375;

    uniformsTerrain['uRepeatOverlay'].value.set(6, 6);

    var params = [
        ['heightmap', fragmentShaderNoise, vertexShader, uniformsNoise, false],
        ['normal', normalShader.fragmentShader, normalShader.vertexShader, uniformsNormal, false],
        ['terrain', terrainShader.fragmentShader, terrainShader.vertexShader, uniformsTerrain, true]
    ];

    for (var i = 0; i < params.length; i++) {

        var material = new THREE.ShaderMaterial({

            uniforms: params[i][3],
            vertexShader: params[i][2],
            fragmentShader: params[i][1],
            lights: params[i][4],
            fog: true
        });

        mlib[params[i][0]] = material;

    }


    var plane = new THREE.PlaneBufferGeometry(SCREEN_WIDTH, SCREEN_HEIGHT);

    quadTarget = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ color: 0x000000 }));
    quadTarget.position.z = - 500;
    sceneRenderTarget.add(quadTarget);

    // TERRAIN MESH

    var geometryTerrain = new THREE.PlaneBufferGeometry(6000, 6000, 256, 256);

    THREE.BufferGeometryUtils.computeTangents(geometryTerrain);

    terrain = new THREE.Mesh(geometryTerrain, mlib['terrain']);
    terrain.position.set(0, - 125, 0);
    terrain.rotation.x = - Math.PI / 2;
    terrain.visible = false;
    scene.add(terrain);

    // RENDERER

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    // STATS

    // stats = new Stats();
    // container.appendChild(stats.dom);

    //AUDIO


    audioLoader.load('audio/thunder.wav', function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    });

    // EVENTS

    onWindowResize();

    window.addEventListener('resize', onWindowResize, false);

    document.addEventListener('keydown', onKeyDown, false);

}

//

function onWindowResize() {

    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;

    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();

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


    for (var i = 0; i < 20; i++) {
        var x = Math.random() * 5000 - 2500;
        var z = Math.random() * 5000 - 2500;
        var k = Math.random() * 1 + 1
        let geometry = new THREE.PlaneBufferGeometry(262, 132, 1, 1);
        planecloud = new THREE.Mesh(geometry, material);
        planecloud.rotation.x = -Math.PI / 2;
        planecloud.position.set(x, 680 + Math.random() * 200 - 100, z);
        planecloud.scale.set(k, k, k);
        cloudsAll.add(planecloud)
    }
    cloudsAll.add(planecloud)

}

// drawGround()
function drawGround() {
    const geometry = new THREE.TetrahedronGeometry(160, 2);
    const material = new THREE.MeshPhongMaterial({
        color: 0xB1C7DE,  //#B1C7DE  乌云颜色
        flatShading: true,
    });
    const geometry1 = new THREE.TetrahedronGeometry(150, 2);
    const material1 = new THREE.MeshPhongMaterial({
        color: 0xB1C7DE,
        flatShading: true,
    });

    ground = new THREE.Mesh(geometry, material);
    ground1 = new THREE.Mesh(geometry1, material1);

    ground.scale.set(3, 1, 2);
    ground.position.y = 605;
    ground.castShadow = true;
    ground.receiveShadow = true;

    ground1.scale.set(2, 1.3, 1.5);
    ground1.position.y = 680;
    ground1.position.x = -350;
    ground1.position.z = -200;
    ground1.castShadow = true;
    ground1.receiveShadow = true;

    scene.add(ground);
    scene.add(ground1);
}

//

function onKeyDown(event) {

    switch (event.keyCode) {

        case 78: /*N*/ lightDir *= - 1; break;
        case 77: /*M*/ animDeltaDir *= - 1; break;

    }

}

//

function animate() {

    requestAnimationFrame(animate);

    for (var i = 0; i < cloudsAll.children.length; i++) {
        cloudsAll.children[i].lookAt(camera.position);
    }
    render();
    // stats.update();

}

function render() {

    var delta = clock.getDelta();
    // if(planecloud.isMesh == true)planecloud.lookAt (scene.position)
    if (terrain.visible) {

        var fLow = 0.1, fHigh = 0.8;

        lightVal = THREE.Math.clamp(lightVal + 0.5 * delta * lightDir, fLow, fHigh);

        var valNorm = (lightVal - fLow) / (fHigh - fLow);

        scene.background.setHSL(0.1, 0.5, lightVal);
        scene.fog.color.setHSL(0.1, 0.5, lightVal);

        directionalLight.intensity = THREE.Math.mapLinear(valNorm, 0, 1, 0.1, 1.15);
        pointLight.intensity = THREE.Math.mapLinear(valNorm, 0, 1, 0.9, 1.5);

        uniformsTerrain['uNormalScale'].value = THREE.Math.mapLinear(valNorm, 0, 1, 0.6, 3.5);

        if (updateNoise) {

            animDelta = THREE.Math.clamp(animDelta + 0.00075 * animDeltaDir, 0, 0.05);
            uniformsNoise['time'].value += delta * animDelta;

            uniformsNoise['offset'].value.x += delta * 0.0;

            uniformsTerrain['uOffset'].value.x = 4 * uniformsNoise['offset'].value.x;



            quadTarget.material = mlib['heightmap'];
            renderer.setRenderTarget(heightMap);
            renderer.clear();
            renderer.render(sceneRenderTarget, cameraOrtho);

            quadTarget.material = mlib['normal'];
            renderer.setRenderTarget(normalMap);
            renderer.clear();
            renderer.render(sceneRenderTarget, cameraOrtho);

        }

        renderer.setRenderTarget(null);
        renderer.render(scene, camera);

    }

}
