var loader = new THREE.ObjectLoader();
var objLoader = new THREE.OBJLoader();
var textureLoader = new THREE.TextureLoader();
var house = new THREE.Mesh();

// Create scene
var scene = new THREE.Scene();
var
    car1

        loader.load( 'car/lamborghini-aventador-pbribl.json', function ( obj ) {
            obj.scale.set(0.3,0.3,0.3);
            obj.rotation.y = 1.6;
            car1 = obj;
			scene.add(car1);
        },
		// called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( error );

    });

objLoader.load(
    //path to the obj.
    "js/obj/model.obj",
    function (object) {
        //define what material each component is.
        var mat = new THREE.MeshNormalMaterial();
        object.traverse( function ( child ) {

            if ( child instanceof THREE.Mesh ) {

                child.material = mat;
            }

        } );
        //turn it into a global variable so we can change the object later on in the code.
        house = object;
        //add the object to the scene.
        // scene.add(house);
        // console.log(object);
    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( error );

    }
);


// Create camera
var camera = new THREE.PerspectiveCamera(
	100, // fov — Camera frustum vertical field of view.
	window.innerWidth/window.innerHeight, // aspect — Camera frustum aspect ratio.
	0.01, // near — Camera frustum near plane.
	7000); // far — Camera frustum far plane.
	
	
// Create renderer
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls( camera, renderer.domElement );
				// enable animation loop when using damping or autorotation
				//controls.enableDamping = true;
				//controls.dampingFactor = 0.25;
				controls.enableZoom = true;

var geometry = new THREE.SphereGeometry(1, 32, 24);
var normalMap = textureLoader.load("images/textures/earth_normal.jpg");
var colorMap = textureLoader.load("images/textures/earth.jpg");
var material = new THREE.MeshPhongMaterial(
    {
        map: colorMap,
        normalMap: normalMap
    }
);
var cube = new THREE.Mesh(geometry,material);

// Skybox
var directions  = ["images/skybox/xpos.png", "images/skybox/xneg.png", "images/skybox/ypos.png", "images/skybox/yneg.png", "images/skybox/zpos.png", "images/skybox/zneg.png"];
var materialArray = [];
for (var i = 0; i < 6; i++)
{
    console.log(directions[i]);
    materialArray.push( new THREE.MeshBasicMaterial({
        map: textureLoader.load( directions[i]),
        side: THREE.BackSide})
    );
}

var skyGeometry = new THREE.CubeGeometry( 5000, 5000, 5000 );
var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
scene.add( skyBox );

// Create light

var light = new THREE.DirectionalLight( 0xdddddd, 0.01 );
light.position.set(0, 10, 0 );
light.castShadow = true;
scene.add( light );
var House1 = addHouse();
var House2 = addHouse();
    var HouseGroup = new THREE.Group();
    for(i = -5; i <=9; i++){
        var house = addHouse();
        house.position.x = i;
        HouseGroup.add(house);
    }
    HouseGroup.position.x = -1.5;
    HouseGroup.position.y = 0.65;
    HouseGroup.rotation.y = Math.PI / 2;
    scene.add(HouseGroup);

// HouseGroup.add(House1);
// House2.position.x = 1;
// HouseGroup.add(House2);



var road = addRoad();
scene.add(road);

for (var i = -40; i < 40; i++) {
    if (i % 2 == 0) {
        var tree = addTree();
        tree.position.y = 0.3
        tree.position.x = 0.75;
        tree.position.z = i;
        scene.add(tree);


        var lamppost = addLamppost();
        lamppost.position.y = 0.4;
        lamppost.position.x = -0.75;
        lamppost.position.z = i;
        scene.add(lamppost);
    }

    else {
        var lamppost = addLamppost();
        lamppost.position.y = 0.4;
        lamppost.position.x = 0.75;
        lamppost.position.z = i;
        scene.add(lamppost);


        var tree = addTree();
        tree.position.y = 0.3
        tree.position.x = -0.75;
        tree.position.z = i;
        scene.add(tree);
    }
}


// Move camera from center
camera.position.x = 0.5; // move right from center of scene
camera.position.y = 1; // move up from center of scene
camera.position.z = 3; // move camera away from center of scene

renderer.render(scene, camera);

var clock = new THREE.Clock();

var render = function () {
    requestAnimationFrame(render);
    var delta = clock.getDelta();

    if(typeof car1 !== "undefined") {
        // Move car to starting position if it is at the end of the street
        if (car1.position.z < -40) {
            car1.position.z = 50;
        }

        car1.position.z -= delta * 3;
    }
    //cube.rotation.y += 1 * delta;
    //cube.rotation.x +=  1 * delta;
    // cube.rotation.z += 1* delta;
    renderer.render(scene, camera);
};




render();
