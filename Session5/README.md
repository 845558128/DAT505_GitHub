Session5
========
### Usage ###

This code is made up of many elliptical flakes with different rotational speeds, which rotate irregularly in each random rotation direction and color.

```javascript

      var boxGeometry = new THREE.CircleBufferGeometry( 5, 32 );//OctahedronBufferGeometry(4);

      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);//随机颜色
      //mesh.castShadow = true;

      mesh.position.x = x;
      mesh.position.z = y;
      mesh.scale.y = 20;
      var rotValue = Math.random() * 2 * Math.PI;//随机旋转方向
      mesh.rotation.x = rotValue;
      mesh.rotation.y = rotValue;
      mesh.rotation.z = rotValue;

var randomValueX = (Math.random() * 0.1) - 0.05;//随机速度值-0.05到0.05
randomSpeedX.push(randomValueX);//将值给随机速度

console.log( "randomSpeedX")
      scene.add(mesh);
      cubes.push(mesh);
    }
  }

  document.body.appendChild(renderer.domElement);
}

var scaleCube = -3;

function drawFrame(){
  requestAnimationFrame(drawFrame);
 //console.log(randomSpeedX);
  //rot += 0.1;
  scaleCube += 0.02;
  if (scaleCube > 3) scaleCube =-3;

  cubes.forEach(function(c,i){
  c.rotation.x += 0.01
  c.rotation.y += 0.01
  c.scale.x = scaleCube;
});
  cubes[6].rotation.x += randomSpeedX[6];
  cubes[18].rotation.x += randomSpeedX[18];
  renderer.render(scene, camera);
}

```
