Session2
========


### Usage ###

This code creates a scene, a camera and a lot of spheres. They have different colors, materials ,rotational speeds or different texture. This assignment exercises our ability to change materials and texture.

```javascript
var material7 = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});
var texture = new THREE.TextureLoader().load('texture/brick.jpg');
var material8 = new THREE.MeshBasicMaterial({  map: texture });

var mesh1 = new THREE.Mesh( geometry, material8 );
mesh1.position.z = -1000;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry, material8 );
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = 200;

var mesh3 = new THREE.Mesh( geometry, material6 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;
```
![image](https://github.com/845558128/DAT505_GitHub/blob/master/images/images/2.png)
