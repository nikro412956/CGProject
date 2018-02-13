function addGrass() {
    var texture = new THREE.TextureLoader().load("images/textures/grass.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(95, 896);

    var grassGeometry = new THREE.BoxGeometry(10, 0.3, 100);
    var grassMaterial = new THREE.MeshBasicMaterial({map: texture});

    var grass = new THREE.Mesh(grassGeometry, grassMaterial);
    grass.receiveShadow = true;

    return grass;
}