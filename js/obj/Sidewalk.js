function addSidewalk() {
    var texture = new THREE.TextureLoader().load("images/textures/pavement.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 50);

    var streetGeometry = new THREE.BoxGeometry(0.5, 0.3, 50);
    var streetMaterial = new THREE.MeshBasicMaterial({map: texture});

    var street = new THREE.Mesh(streetGeometry, streetMaterial);
    street.receiveShadow = true;

    return street;
}