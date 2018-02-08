function addHouse(){
    var House1 = new THREE.Group();

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshNormalMaterial();
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = 0.5;
    cube.position.y = 0.5;
    cube.position.z = 0.48;
    House1.add(cube);

    var geoRoof = new THREE.BoxGeometry(0.71, 0.71, 1);
    var matRoof = new THREE.MeshNormalMaterial();
    var cubeRoof = new THREE.Mesh(geoRoof, matRoof);
    cubeRoof.position.x = 0.5;
    cubeRoof.position.y = 1;
    cubeRoof.position.z = 0.48;
    cubeRoof.rotation.z = 0.79;
    House1.add(cubeRoof);

    return House1;
}
