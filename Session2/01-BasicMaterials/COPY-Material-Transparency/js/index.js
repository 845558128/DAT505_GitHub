




			if ( WEBGL.isWebGLAvailable() === false ) {



				document.body.appendChild( WEBGL.getWebGLErrorMessage() );



			}



			var params = { opacity: 0.25 };



			var container, stats;

			var camera, scene, renderer, controls;



			init();

			animate();



			function init() {



				container = document.createElement( 'div' );

				document.body.appendChild( container );



				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 2000 );

				camera.position.set( 0.0, 40, 40 * 3.5 );



				scene = new THREE.Scene();



				//



				var geometry = new THREE.SphereBufferGeometry( 18, 30, 30 );



				var material1 = new THREE.MeshStandardMaterial( {

					opacity: params.opacity,

					transparent: true

				} );



				var material2 = new THREE.MeshStandardMaterial( {

					opacity: params.opacity,

					premultipliedAlpha: true,

					transparent: true

				} );



				var textureLoader = new THREE.TextureLoader();

				textureLoader.load( "textures/hardwood2_diffuse.jpg", function ( map ) {



					map.anisotropy = 8;



					material1.map = map;

					material1.needsUpdate = true;

					material2.map = map;

					material2.needsUpdate = true;



				} );



				var textureLoader = new THREE.TextureLoader();

				textureLoader.load( "textures/hardwood2_roughness.jpg", function ( map ) {



					map.anisotropy = 8;



					material1.roughnessMap = map;

					material1.needsUpdate = true;

					material2.roughnessMap = map;

					material2.needsUpdate = true;



				} );



				var mesh = new THREE.Mesh( geometry, material1 );

				mesh.position.x = - 25.0;

				scene.add( mesh );



				var mesh = new THREE.Mesh( geometry, material2 );

				mesh.position.x = 25.0;

				scene.add( mesh );



				//



				var geometry = new THREE.PlaneBufferGeometry( 800, 800 );

				var material = new THREE.MeshStandardMaterial( { color: 0x333333 } );

				var mesh = new THREE.Mesh( geometry, material );

				mesh.position.y = - 50;

				mesh.rotation.x = - Math.PI * 0.5;

				scene.add( mesh );



				// Lights



				var spotLight = new THREE.SpotLight( 0xff8888 );

				spotLight.position.set( 100, 200, 100 );

				spotLight.angle = Math.PI / 6;

				spotLight.penumbra = 0.9;

				scene.add( spotLight );



				var spotLight = new THREE.SpotLight( 0x8888ff );

				spotLight.position.set( - 100, - 200, - 100 );

				spotLight.angle = Math.PI / 6;

				spotLight.penumbra = 0.9;

				scene.add( spotLight );



				//



				renderer = new THREE.WebGLRenderer( { antialias: true } );

				renderer.setPixelRatio( window.devicePixelRatio );

				renderer.setSize( window.innerWidth, window.innerHeight );

				renderer.shadowMap.enabled = true;

				container.appendChild( renderer.domElement );



				renderer.gammaInput = true;

				renderer.gammaOutput = true;



				stats = new Stats();

				container.appendChild( stats.dom );



				controls = new THREE.OrbitControls( camera, renderer.domElement );



				window.addEventListener( 'resize', onWindowResize, false );



				var gui = new dat.GUI();

				gui.add( params, 'opacity', 0, 1 ).onChange( function () {



					material1.opacity = params.opacity;

					material2.opacity = params.opacity;



				} );

				gui.open();



			}



			function onWindowResize() {



				var width = window.innerWidth;

				var height = window.innerHeight;



				camera.aspect = width / height;

				camera.updateProjectionMatrix();



				renderer.setSize( width, height );



			}



			//



			function animate() {



				requestAnimationFrame( animate );



				stats.begin();

				render();

				stats.end();



			}



			function render() {



				for ( var i = 0, l = scene.children.length; i < l; i ++ ) {



					var object = scene.children[ i ];



					if ( object.geometry instanceof THREE.SphereBufferGeometry ) {



						object.rotation.x = performance.now() * 0.0002;

						object.rotation.y = - performance.now() * 0.0002;



					}



				}



				renderer.render( scene, camera );



			}
