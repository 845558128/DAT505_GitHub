Session3
========
### Usage ###

The homework was made up of my own ideas. The whole background is made up of gray and yellow images of different widths. In the middle is a rotating black square wireframe. Other wireframes are made up of color classes that look hierarchical. There are three balls slanted, for the balance of the picture.

```javascript
var material = new THREE.MeshBasicMaterial( {  wireframe:true, color: "#000000" } );


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

```
![image](https://github.com/845558128/DAT505_GitHub/blob/master/images/3.png)
