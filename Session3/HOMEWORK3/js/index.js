//Global variables
var scene, camera, renderer;
var geometry,geometry2, material, material2,mesh,mesh2,mesh3,mesh4;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#5B5B5B");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Configure lights -------------------------------
  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);

  // Create a Cube Mesh with basic material ---------
  var geometry = new THREE.BoxGeometry(200, 200, 200);
  var geometry2 = new THREE.SphereBufferGeometry(50, 50, 50);
  var geometry3 = new THREE.SphereBufferGeometry(50, 50, 50);
  var geometry4 = new THREE.BoxGeometry(100, 100, 100);
 var geometry5 = new THREE.BoxGeometry(100, 100, 100);
 var geometry6 = new THREE.BoxGeometry(200, 800, 0);
  var geometry7 = new THREE.BoxGeometry(100, 1000, 0);


  // MATERIAL 1:
  var material = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#000000" } );
//#498155

//the first sphere
  var texture = new THREE.TextureLoader().load('texture/a.jpg');
  var material2 = new THREE.MeshBasicMaterial({  map: texture });

//the second sphere
  var texture = new THREE.TextureLoader().load('texture/b.jpg');
  var material3 = new THREE.MeshBasicMaterial({  map: texture });


//the wireframe cube
  var material4 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#F0FFFF" } );
 var material5 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#EEE685" } );
 var material6 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#EEC900" } );
var material7 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#EE5C42" } );
var material8 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#EE0000" } );
var material9 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#8B2252" } );
var material10 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#B23AEE" } );
var material11 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#CD69C9" } );
var material12 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#97FFFF" } );
var material13 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#6495ED" } );
var material14 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#436EEE" } );
var material15 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#473C8B" } );
var material16 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#191970" } );
var material17 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#000000" } );

var material19 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#43CD80" } );
var material20 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#32CD32" } );
var material21 = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#228B22" } );

//the background line
  var material22 = new THREE.MeshBasicMaterial( {  color: "#FFFF00" } );


//the third sphere
var texture = new THREE.TextureLoader().load('texture/c.jpg');
var material18 = new THREE.MeshBasicMaterial({  map: texture });

//  var mesh1 = new THREE.Mesh( geometry, material );
  //mesh1.position.z = -1000;
//  mesh1.position.y = 100;

  var mesh2 = new THREE.Mesh( geometry2, material2);
  mesh2.position.z = -1000;
  //mesh2.position.x = -100;
  //mesh2.position.y = 200;
  var mesh3 = new THREE.Mesh( geometry3, material3);
  mesh3.position.z = -1000;
  mesh3.position.x = 100;
  mesh3.position.y = 200;

  var mesh4 = new THREE.Mesh( geometry4, material4);
  mesh4.position.z = -1000;
  mesh4.position.x = 100;
  mesh4.position.y = -200;

  var mesh5 = new THREE.Mesh( geometry5, material5);
 mesh5.position.z = -1000;
  mesh5.position.x = 50;
 mesh5.position.y = -150;

 var mesh6 = new THREE.Mesh( geometry5, material6);
 mesh6.position.z = -1000;
 mesh6.position.x = 0;
 mesh6.position.y = -100;

 var mesh7 = new THREE.Mesh( geometry5, material7);
 mesh7.position.z = -1000;
 mesh7.position.x = -50;
 mesh7.position.y = -50;

 var mesh8 = new THREE.Mesh( geometry5, material8);
 mesh8.position.z = -1000;
 mesh8.position.x = -100;
 mesh8.position.y = 0;

 var mesh9 = new THREE.Mesh( geometry5, material9);
 mesh9.position.z = -1000;
 mesh9.position.x = -150;
 mesh9.position.y = 50;

 var mesh10 = new THREE.Mesh( geometry5, material10);
 mesh10.position.z = -1000;
 mesh10.position.x = -100;
 mesh10.position.y = 100;

 var mesh11 = new THREE.Mesh( geometry5, material11);
 mesh11.position.z = -1000;
 mesh11.position.x = -50;
 mesh11.position.y = 150;

 var mesh12 = new THREE.Mesh( geometry5, material12);
 mesh12.position.z = -1000;
 mesh12.position.x = 0;
 mesh12.position.y = 200;

 var mesh13 = new THREE.Mesh( geometry5, material13);
 mesh13.position.z = -1000;
 mesh13.position.x = 100;
 mesh13.position.y = 0;

 var mesh14 = new THREE.Mesh( geometry5, material14);
 mesh14.position.z = -1000;
 mesh14.position.x = 150;
 mesh14.position.y = 50;

 var mesh15 = new THREE.Mesh( geometry5, material15);
 mesh15.position.z = -1000;
 mesh15.position.x = 200;
 mesh15.position.y = 100;

 var mesh16 = new THREE.Mesh( geometry5, material16);
 mesh16.position.z = -1000;
 mesh16.position.x = 250;
 mesh16.position.y = 150;

 var mesh17 = new THREE.Mesh( geometry5, material17);
 mesh17.position.z = -1000;
 mesh17.position.x = 300;
 mesh17.position.y = 200;

//The sphere
 var mesh18 = new THREE.Mesh( geometry2, material18);
 mesh18.position.z = -1000;
 mesh18.position.x = -100;
 mesh18.position.y = -200;

 var mesh19 = new THREE.Mesh( geometry5, material19);
 mesh19.position.z = -1000;
 mesh19.position.x = -150;
 mesh19.position.y = -200;

 var mesh20 = new THREE.Mesh( geometry5, material20);
 mesh20.position.z = -1000;
 mesh20.position.x = -200;
 mesh20.position.y = -200;

 var mesh21 = new THREE.Mesh( geometry5, material21);
 mesh21.position.z = -1000;
 mesh21.position.x = -250;
 mesh21.position.y = -200;

//the green cube
 var mesh22 = new THREE.Mesh( geometry6, material22);
 mesh22.position.z = -1000;
 mesh22.position.x = -550;
 mesh22.position.y = -0;

 var mesh23 = new THREE.Mesh( geometry7, material22);
 mesh23.position.z = -1500;
 mesh23.position.x = -250;
 mesh23.position.y = -0;

 var mesh24 = new THREE.Mesh( geometry6, material22);
 mesh24.position.z = -1500;
 mesh24.position.x = 250;
 mesh24.position.y = 0;

 var mesh25 = new THREE.Mesh( geometry7, material22);
 mesh25.position.z = -1500;
 mesh25.position.x = 550;
 mesh25.position.y = -0;


mesh = new THREE.Mesh( geometry, material );
mesh.position.z = -1000;
// ------------------------------------------------

// Add mesh to scene
scene.add( mesh);
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );
scene.add( mesh13 );
scene.add( mesh14 );
scene.add( mesh15 );
scene.add( mesh16 );
scene.add( mesh17 );
scene.add( mesh18 );
scene.add( mesh19 );
scene.add( mesh20 );
scene.add( mesh21 );
scene.add( mesh22 );
scene.add( mesh23 );
scene.add( mesh24 );
scene.add( mesh25 );
}

// Render Loop

function render() {
  requestAnimationFrame( render );

  mesh.rotation.x += 0.00; //Continuously rotate the mesh
  mesh.rotation.y += 0.01;

// mesh4.rotation.x += 0.01; //Continuously rotate the mesh
// mesh4.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
