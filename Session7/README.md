Session7
========
### Usage1 ###

This code creates a scene, a camera and many objects mapped differently. They dropped randomly from the top of the screen. Size, material, drop speed are random.

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


### Usage2 ###

This code creates a scene, a camera and a lot of eyeballs. The job requires each eyeball to look in the same direction. When the mouse is finished, when the mouse is at a point, they all look like the mouse direction, but they will only follow the two-dimensional direction of the mouse.

```javascript

var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for ( i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
  for ( var j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
  }
}
var groupscale = (Math.random() * -2) +1;
mesh = new THREE.Mesh( geometry, material );
  // for ( var i = 0; i < 1000; i ++ ) {
            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = (Math.random() * -200)+30;
            mesh.position.y = (Math.random() * -50)+50;
            //mesh.position.z = (Math.random() * 100);
            mesh.scale.x = groupscale;
            mesh.scale.y = groupscale;
            mesh.scale.z = groupscale;
            //rotValue = Math.random() * 2 * Math.PI;//随机旋转方向
            var rotValX = (Math.random() * 0.1) - 0.25;
            var rotValY = (Math.random() * 0.1) - 0.25;
            //var rotValZ = (Math.random() * 0.1) - 0.25;
          rotX.push(rotValX);
          rotY.push(rotValY);
            //rotZ.push(rotValZ);
scene.add( mesh );
group.push( mesh );
          }

```
