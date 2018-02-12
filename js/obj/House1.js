function addHouse(){
    var House1 = new THREE.Group();

    var texture = new THREE.TextureLoader().load("images/textures/wildtextures-Olde-Brick-Wal-Texture.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 1, 1 );

    var texture2 = new THREE.TextureLoader().load("images/textures/wildtextures-Olde-Brick-Wal-Texture.jpg");
    texture2.wrapS = THREE.RepeatWrapping;
    texture2.wrapT = THREE.RepeatWrapping;
    texture2.repeat.set( 1, 1 );

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({map: texture});
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;
    House1.add(cube);

    texture2.center.x = 0.5;
    texture2.center.y = 0.5;
    texture2.rotation = 7 * Math.PI / 4;

    var geoRoof = new THREE.BoxGeometry(0.71, 0.71, 0.99);
    var matRoof = new THREE.MeshBasicMaterial({map: texture2});
    var cubeRoof = new THREE.Mesh(geoRoof, matRoof);
    cubeRoof.position.x = 0;
    cubeRoof.position.y = 0.5;
    cubeRoof.position.z = 0;
    cubeRoof.rotation.z = Math.PI / 4;
    House1.add(cubeRoof);

    return House1;
}

