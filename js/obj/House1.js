function addHouse(){
    var House1 = new THREE.Group();
    var TLoader = new THREE.TextureLoader();

    var texture = TLoader.load("images/textures/wildtextures-Olde-Brick-Wal-Texture.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 1, 2 );

    var texture2 = TLoader.load("images/textures/wildtextures-Olde-Brick-Wal-Texture.jpg");
    texture2.wrapS = THREE.RepeatWrapping;
    texture2.wrapT = THREE.RepeatWrapping;
    texture2.repeat.set( 1, 2 );

    var roofTexture = TLoader.load("images/textures/roofTiles.jpg");

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

    var geoFrontR = new THREE.PlaneGeometry(0.71, 0.71);
    var matFrontR = new THREE.MeshBasicMaterial({map: texture2, side: THREE.DoubleSide});
    matFrontR.skinning = true;
    var roofPlane = new THREE.Mesh(geoFrontR, matFrontR);
    roofPlane.position.x = 0;
    roofPlane.position.y = 0.5;
    roofPlane.position.z = 0.49899;
    roofPlane.rotation.z = Math.PI / 4;
    House1.add(roofPlane);

    var roofPlane2 = new THREE.Mesh(geoFrontR, matFrontR);
    roofPlane2.position.x = 0;
    roofPlane2.position.y = 0.5;
    roofPlane2.position.z = -0.49899;
    roofPlane2.rotation.z = Math.PI / 4;
    House1.add(roofPlane2);

    var geoRoof = new THREE.BoxGeometry(0.9975, 0.71, 0.71);
    var matRoof = new THREE.MeshBasicMaterial({map: roofTexture});
    var cubeRoof = new THREE.Mesh(geoRoof, matRoof);
    cubeRoof.position.x = 0;
    cubeRoof.position.y = 0.5;
    cubeRoof.position.z = 0;
    cubeRoof.rotation.y = Math.PI / 2;
    var roofGroup = new THREE.Group();
    roofGroup.add(cubeRoof);
    roofGroup.position.x = -0.355;
    roofGroup.position.y = 0.145;
    roofGroup.position.z = 0;
    roofGroup.rotation.z = 7 * Math.PI / 4;
    House1.add(roofGroup);

    var doorTexture = TLoader.load("images/textures/0002-modern-door.jpg");

    var geoDoor = new THREE.PlaneGeometry(0.2, 0.4);
    var matDoor = new THREE.MeshBasicMaterial({map: doorTexture, side: THREE.DoubleSide});
    var Door = new THREE.Mesh(geoDoor, matDoor);
    Door.position.y = -0.3;
    Door.position.z = 0.501;
    Door.position.x = -0.25;
    House1.add(Door);

    var windowTexture = TLoader.load("images/textures/DarkWindows-3.jpg");

    var geoW = new THREE.PlaneGeometry(0.5, 0.3);
    var matW = new THREE.MeshBasicMaterial({map: windowTexture, side: THREE.DoubleSide});
    var Window = new THREE.Mesh(geoW, matW);
    Window.position.z = 0.501;
    Window.position.y = -0.2;
    Window.position.x = 0.15;
    House1.add(Window);

    var wTextureUp = TLoader.load("images/textures/DarkWindowsUpStairs-3.jpg");
    var geoUW = new THREE.PlaneGeometry(0.3, 0.2);
    var matUW = new THREE.MeshBasicMaterial({map: wTextureUp, side: THREE.DoubleSide});
    var UpstairsW = new THREE.Mesh(geoUW, matUW);
    UpstairsW.position.z = 0.501;
    UpstairsW.position.y = 0.25;
    UpstairsW.position.x = -0.2;
    House1.add(UpstairsW);

    var UpstairsW2 = new THREE.Mesh(geoUW, matUW);
    UpstairsW2.position.z = 0.501;
    UpstairsW2.position.y = 0.25;
    UpstairsW2.position.x = 0.2;
    House1.add(UpstairsW2);

    var SmallWindowT = TLoader.load("images/textures/smallDarkWindows-3.jpg");
    var geoSW = new THREE.PlaneGeometry(0.15, 0.15);
    var matSW = new THREE.MeshBasicMaterial({map: SmallWindowT, side: THREE.DoubleSide});
    var smallW = new THREE.Mesh(geoSW, matSW);
    smallW.position.z = 0.501;
    smallW.position.y = 0.7;
    smallW.position.x = 0;
    House1.add(smallW);

    return House1;
}

