//Global variables
var scene, camera, renderer;
var geometry1,geometry2,geometry3,material,material2,material3,mesh1,mesh2,mesh3,i,j,k;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#FF3030");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  var x = 0, y = 0;

var heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

 geometry1 = new THREE.ShapeBufferGeometry( heartShape );
 material = new THREE.MeshNormalMaterial( { wireframe:true, color: 0xFF0000 } );
mesh1 = new THREE.Mesh( geometry1, material ) ;
scene.add( mesh1 );

//geometry = new THREE.RingBufferGeometry( 10, 50, 320 );
//material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
 //mesh = new THREE.Mesh( geometry, material );
 mesh1.position.z = -400;

 var x = 0, y = -50;

var heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

geometry2 = new THREE.ShapeBufferGeometry( heartShape );
material2 = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
mesh2 = new THREE.Mesh( geometry2, material2 ) ;
scene.add( mesh2 );

//geometry = new THREE.RingBufferGeometry( 10, 50, 320 );
//material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
//mesh = new THREE.Mesh( geometry, material );
mesh2.position.z = -600;
  // Add mesh to scene
  //scene.add( mesh );

  geometry3= new THREE.ConeBufferGeometry( 80, 320, 32 );
  material3 = new THREE.MeshBasicMaterial( { wireframe:true,
    color: " 0x808080" } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.set(1,1,1);
  mesh3.position.z = -800;
  scene.add( mesh3 );

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.05; //Continuously rotate the mesh
  mesh1.rotation.y += 0.00;
  mesh2.rotation.x += 0.00; //Continuously rotate the mesh
  mesh2.rotation.y += 0.03;
  mesh3.rotation.x += 0.00; //Continuously rotate the mesh
  mesh3.rotation.y += 0.01;


  renderer.setClearColor("#2A3867");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
