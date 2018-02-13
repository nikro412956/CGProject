function addHouse2(){

    var house = new THREE.Group();
    var TLoader = new THREE.TextureLoader();

    var texture = TLoader.load("images/textures/wildtextures-Olde-Brick-Wal-Texture.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 1, 2 );


    var baseGeometry = new THREE.BoxGeometry(2, 1, 2);
    var baseMaterial =  new THREE.MeshBasicMaterial({map: texture});
    var base = new THREE.Mesh(baseGeometry, baseMaterial);
    house.add(base);



    var roofgeometry = new THREE.CylinderGeometry( 0, 1.7, 1, 4 );
    var roofmaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var roof = new THREE.Mesh( roofgeometry, roofmaterial );
    roof.position.y = 1;
    roof.rotation.y = Math.PI / 4;

    house.add(roof);

    return house;
}

