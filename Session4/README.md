Session4
========
### Usage ###

This code is based on the example in the class, so that each square random at a different speed, color, direction.

```javascript
for (var x = -35; x < 40; x += 5) { // Start from -35 and sequentially add one every 5 pixels
  for (var y = -35; y < 40; y += 5) {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    //The color of the material is assigned a random color
    var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
    var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
    //mesh.castShadow = true;

    mesh.position.x = x;
    mesh.position.z = y;
    mesh.rotation.x = 360*Math.random();
```
![image](https://github.com/845558128/DAT505_GitHub/blob/master/images/4.png)
