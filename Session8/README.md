Session8
========
### Usage1 ###

This code creates a scene, a camera and a lot of eyeballs. The requirement for this assignment is to let each eyeball look in the direction of the mouse. When the mouse is finished, when the mouse is at a point, they all look like the direction of the mouse, but they will now follow the mouse in the three-dimensional direction.

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

for (var i = 0; i < eyesNum; i++) {
  mesh = new THREE.Mesh( geometry, material );

  xPos[i] = Math.random() * 100 - 50;
  yPos[i] = Math.random() * 100 - 50;

  xPos [0] = 0;
  yPos [0] = 0;

  xPos [1] = -50;
  yPos [1] = -50;

  xPos [2] = 50;
  yPos [2] = -50;

  xPos [3] = -50;
  yPos [3] = 50;

  xPos [4] = 50;
  yPos [4] = 50;

  xPosMap[i] = map_range(xPos[i], -50, 50, 0, window.innerWidth);
  yPosMap[i] = map_range(yPos[i], -50, 50, 0, window.innerHeight);

  //console.log(xPosMap[1]);

  mesh.position.x = xPos[i];
  mesh.position.y = yPos[i];

  var randSize = Math.random() * 0.8;
  mesh.scale.x = randSize;
  mesh.scale.y = randSize;
  mesh.scale.z = randSize;

  scene.add( mesh );
  eyes.push( mesh );
}
```


### Usage2 ###

This code creates a scene, a camera, and many 3D model imports. I import the butterfly model, when the mouse moves over the object, the object will randomly change color. The whole scene is still spinning slowly.

```javascript

var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );

for (var i=0; i<500; i++){

// Model/materialloading!
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("but.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("but.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 0.01;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*800-400, Math.random()*800-400, Math.random()*800-400);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh); //Add to the array so that we can access for raycasting
    });
  });
}


```

### Usage3 ###

This code creates a scene, a camera and three rectangles. As the mouse moves past, each rectangle changes colors at will.
```javascript

var sprite = new THREE.Sprite( new THREE.SpriteMaterial( { color: '#69f' } ) );
sprite.position.set( 6, 5, 5 );
sprite.scale.set( 2, 5, 1 );
group.add( sprite );

var sprite = new THREE.Sprite( new THREE.SpriteMaterial( { color: '#69f' } ) );
sprite.material.rotation = Math.PI / 3 * 4;
sprite.position.set( 8, - 2, 2 );
sprite.center.set( 0.5, 0 );
sprite.scale.set( 1, - 5, 1 );
group.add( sprite );

var sprite = new THREE.Sprite( new THREE.SpriteMaterial( { color: '#69f' } ) );
sprite.position.set( 0, 2, 5 );
sprite.scale.set( 10, 2, 3 );
sprite.center.set( - 0.1, 0 );
sprite.material.rotation = Math.PI / 3;
group.add( sprite );

window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener( "mousemove", onDocumentMouseMove, false );
}

```

### Preview ###
If everything right ,you will see
![image](https://github.com/845558128/DAT505_GitHub/blob/master/images/8.png)
![image](https://github.com/845558128/DAT505_GitHub/blob/master/images/8a.png)
![image](https://github.com/845558128/DAT505_GitHub/blob/master/images/8b.png)
