function addRoad() {
    var road = new THREE.Group();

    var texture = new THREE.TextureLoader().load("images/textures/asphalt.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 50);

    var streetGeometry = new THREE.BoxGeometry(1, 0.1, 50);
    var streetMaterial = new THREE.MeshBasicMaterial({map: texture});

    var street = new THREE.Mesh(streetGeometry, streetMaterial);
    street.receiveShadow = true;

    road.add(street);

    var sidewalk1 = addSidewalk();
    sidewalk1.position.x = 0.75;
    road.add(sidewalk1);

    var sidewalk2 = addSidewalk();
    sidewalk2.position.x = -0.75;
    road.add(sidewalk2);
    return road;
}