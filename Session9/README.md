Session9
========
### Usage1 ###

The purpose of this assignment is to allow us to change his shader transformation, we have changed a shader from the inside of the existing, so that he has a different effect.
```javascript

rgbPass = new THREE.ShaderPass( THREE.CopyShader);
//rgbPass.uniforms[ 'amount' ].value = 0.005;
//rgbPass.renderToScreen = true;
composer.addPass ( renderPass );
composer.addPass ( rgbPass );

kaleidoPass = new THREE.ShaderPass (THREE.ToneMapShader);
composer.addPass ( kaleidoPass );```


### Usage2 ###

This code is the sound version of the previous import model. When the mouse moves to an object, it emits the sound of the wind, mimicking the sound of the butterfly flapping its wings.

```javascript

audioLoader.load( 'audio/WIND.wav', function( buffer ) {
  sound.setBuffer( buffer );
  sound.setLoop( false );
  sound.setVolume( 0.5 );
  sound.play();

```

### Preview ###
If everything right ,you will see

![image](https://github.com/845558128/DAT505_GitHub/blob/master/images/9.png)
