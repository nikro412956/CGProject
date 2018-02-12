function addTree() {
    var tree = new THREE.Group();


    var texture = new THREE.TextureLoader().load("images/textures/bark.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    var baseGeometry = new THREE.CylinderGeometry( 0.05, 0.05, 0.5);
    var baseMaterial = new THREE.MeshBasicMaterial( {map: texture} );
    var base = new THREE.Mesh( baseGeometry, baseMaterial );
    base.castShadow = true;
    tree.add(base);



    var texture = new THREE.TextureLoader().load("images/textures/leaves.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    var spheregeometry = new THREE.SphereGeometry( 0.3 );
    var spherematerial = new THREE.MeshBasicMaterial( {map: texture} );
    var sphere = new THREE.Mesh( spheregeometry, spherematerial );
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphere.position.y = 0.5;

    sphere.castShadow = true;
    tree.add(sphere);

    return tree;
}