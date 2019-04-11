Session6
========
### Usage ###

This code is a model of a city, and I changed the background color of the original example and the look of each building into the same high and low wireframe pattern. Left mouse button close to the lens, right push far.

```javascript

function setupWorld() {
  //Create the geometry for the floor
  var geo = new THREE.PlaneGeometry(2000, 2000, 40, 40);
  var mat = new THREE.MeshPhongMaterial({color: 0x9db3b5, overdraw: true});
  floor = new THREE.Mesh(geo, mat);
  floor.rotation.x = -0.5 * Math.PI;
  floor.receiveShadow = true;
  scene.add(floor);

  //Settings for models and material
  var geometry = new THREE.CubeGeometry( 1, 1, 1 );
  //geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
  var material = new THREE.MeshPhongMaterial({wireframe:true,overdraw: true, color:Math.random() * 0xcccccc});


```
