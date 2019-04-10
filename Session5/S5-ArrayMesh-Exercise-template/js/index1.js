var renderer, scene, camera;
var cubes = [];
var rot = 0;
var randomSpeedX =[];

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var ambLight = new THREE.AmbientLight(0xFFFFFF);
ambLight.position.set(0, 1000, 0);
ambLight.add(spotLight);
scene.add(ambLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x < 15; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -10; y < 15; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color:  0x808080});
    //  Math.random() *

    if (x==-5 && y==-5){
      boxMaterial = new THREE.MeshLambertMaterial({color: "#ee30a7"});
    }else if(x==5 && y==5){
      boxMaterial = new THREE.MeshLambertMaterial({color: "#cdcd00"});
    } else{
      boxMaterial = new THREE.MeshLambertMaterial({color: 0x87CEFA});
      }
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;

      mesh.position.x = x;
      mesh.position.z = y;
      mesh.scale.y = 0.5

      mesh.rotation.x = 360*Math.random();
      mesh.rotation.y = 360*Math.random();
      mesh.rotation.z = 360*Math.random();

      var randomValueX = (Math.random()*0.7-0.25);
       randomSpeedX.push(randomValueX);

      scene.add(mesh);
      cubes.push(mesh);
    }
  }
  console.log(cubes);
  document.body.appendChild(renderer.domElement);
}
   var scaleCube = -5;

   function drawFrame(){
  requestAnimationFrame(drawFrame);
     scaleCube += 0.05;
     if (scaleCube > 10) scaleCube = -10;
//  rot += 0.1;

  //forEach takes all the array entries and passes the c as the object, and i as the index
  cubes.forEach(function(c, i) {
    c.rotation.x = 0.2//rotX[1]; //Rotate the object that is referenced in c
    c.rotation.y = 0.1;
     c.scale.x = scaleCube;
    //  c.speed.z = rot;
      });


  /*  cubes[6].rotation.x += randomSpeedX[6];
    cubes[6].rotation.y += randomSpeedX[6];
    cubes[6].scale.x = scaleCube;

    cubes[10].rotation.x += randomSpeedX[10];
    cubes[10].rotation.y += randomSpeedX[10];
    cubes[10].scale.x = scaleCube;

    cubes[18].rotation.x += randomSpeedX[18];*/
//  });

  renderer.render(scene, camera);
}

init();
drawFrame();
