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

    var roofTexture = TLoader.load("images/textures/roofing_PNG5621-edited.png");
    roofTexture.wrapS = THREE.RepeatWrapping;
    roofTexture.wrapT = THREE.RepeatWrapping;
    roofTexture.repeat.set( 2, 1 );


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
    Door.position.z = -0.05;
    Door.position.x = -1.01;
    house.add(Door);


    return house;
}

