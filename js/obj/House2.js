function addHouse2(){

    var house = new THREE.Group();
    var TLoader = new THREE.TextureLoader();

    var basetexture = TLoader.load("images/textures/overlapping-white-wood_brighter-adjusted.jpg");
    basetexture.wrapS = THREE.RepeatWrapping;
    basetexture.wrapT = THREE.RepeatWrapping;
    basetexture.repeat.set( 1, 2 );


    var baseGeometry = new THREE.BoxGeometry(2, 1, 2);
    var baseMaterial =  new THREE.MeshBasicMaterial({map: basetexture});
    var base = new THREE.Mesh(baseGeometry, baseMaterial);
    house.add(base);

    var roofTexture = TLoader.load("images/textures/tiles_roof_red_2_20141212_1743242890.jpg");
    roofTexture.center.x = 0.5;
    roofTexture.center.y = 0.5;
    roofTexture.rotation = Math.PI / 2;
    roofTexture.wrapS = THREE.RepeatWrapping;
    roofTexture.wrapT = THREE.RepeatWrapping;
    roofTexture.repeat.set( 3, 3 );


    var roofgeometry = new THREE.CylinderGeometry( 0, 1.7, 1, 4 );
    var roofmaterial = new THREE.MeshBasicMaterial( {map: roofTexture} );
    var roof = new THREE.Mesh( roofgeometry, roofmaterial );
    roof.position.y = 1;
    roof.rotation.y = Math.PI / 4;

    house.add(roof);

    var doorTexture = TLoader.load("images/textures/0002-modern-door.jpg");

    var geoDoor = new THREE.PlaneGeometry(0.2, 0.4);
    var matDoor = new THREE.MeshBasicMaterial({map: doorTexture, side: THREE.DoubleSide});
    var Door = new THREE.Mesh(geoDoor, matDoor);
    Door.rotation.y = Math.PI / 2;
    Door.position.y = -0.3;
    Door.position.x = -1.001;
    house.add(Door);

    var pathT = TLoader.load("images/textures/yard_path.jpg");
    pathT.wrapS = THREE.RepeatWrapping;
    pathT.wrapT = THREE.RepeatWrapping;
    pathT.repeat.set( 2, 10 );

    var pGroup = new THREE.Group();
    var geoPath = new THREE.PlaneGeometry(0.2, 1);
    var matPath = new THREE.MeshBasicMaterial({map: pathT, side: THREE.DoubleSide});
    var path = new THREE.Mesh(geoPath, matPath);
    path.rotation.y = Math.PI / 2;
    pGroup.add(path);
    pGroup.rotation.z = Math.PI / 2;
    pGroup.position.x = -1.501;
    pGroup.position.y = -0.499;
    house.add(pGroup);


    return house;
}

