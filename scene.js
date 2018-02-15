var textureLoader = new THREE.TextureLoader();

// Create scene
var scene = new THREE.Scene();

// Load lamborghini
var car1;
new THREE.ObjectLoader().load( 'car/lamborghini-aventador-pbribl.json', function ( obj ) {
            obj.scale.set(0.3,0.3,0.3);
            obj.rotation.y = 1.6;
            car1 = obj;
			scene.add(car1);
        });

// Load lion statue
var lion;
new THREE.ObjectLoader().load("LionStatue/lion-statue.json", function (obj) {
    obj.scale.set(0.05,0.05,0.05);
    lion = obj;
    lion.rotation.y = Math.PI / 2;
    lion.position.y = 0.125;
    lion.position.x = 1.5;
    lion.position.z = 1.5;
    scene.add(lion);
})

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


// Skybox
var directions  = ["images/skybox/xpos.png", "images/skybox/xneg.png", "images/skybox/ypos.png", "images/skybox/yneg.png", "images/skybox/zpos.png", "images/skybox/zneg.png"];
var materialArray = [];
for (var i = 0; i < 6; i++)
{
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



// Create row of houses
var HouseGroup = new THREE.Group();
for(i = -10; i <=10; i++){
    var house = addHouse();
    house.position.x = i;
    HouseGroup.add(house);
}
HouseGroup.position.x = -1.5;
HouseGroup.position.y = 0.65;
HouseGroup.rotation.y = Math.PI / 2;
scene.add(HouseGroup);


var bigHouse = addHouse2();
bigHouse.position.z = 2;
bigHouse.position.x = 3;
bigHouse.position.y = 0.65;
scene.add(bigHouse);

var road = addRoad();
scene.add(road);

var grass1= addGrass();
grass1.position.x = 6;
scene.add(grass1);

var grass2 = addGrass();
grass2.position.x = -6;
scene.add(grass2);


// Add lampposts and trees by the side of the road
for (var i = -24; i < 25; i++) {
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
        if (car1.position.z < -25) {
            car1.position.z = 25;
        }

        car1.position.z -= delta * 3;
    }
    renderer.render(scene, camera);
};

render();
