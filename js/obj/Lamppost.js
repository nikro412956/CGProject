function addLamppost() {
    var lamppost = new THREE.Group();


    var texture = new THREE.TextureLoader().load("images/textures/metal.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    var baseGeometry = new THREE.CylinderGeometry( 0.03, 0.03, 1);
    var baseMaterial = new THREE.MeshBasicMaterial( {map: texture} );
    var base = new THREE.Mesh( baseGeometry, baseMaterial );
    lamppost.add(base);





    var lighttexture = new THREE.TextureLoader().load("images/textures/light.jpg");
    lighttexture.wrapS = THREE.RepeatWrapping;
    lighttexture.wrapT = THREE.RepeatWrapping;
    lighttexture.repeat.set(1, 1);

    var lampGeometry = new THREE.CylinderGeometry( 0.15, 0.03, 0.1);
    var lampMaterial = new THREE.MeshBasicMaterial( {map: lighttexture} );
    var lamp = new THREE.Mesh( lampGeometry, lampMaterial );
    lamp.position.y = 0.5;
    lamppost.add(lamp);


    var topGeometry = new THREE.CylinderGeometry( 0.15, 0.15, 0.001);
    var topMaterial = new THREE.MeshBasicMaterial( {map: texture} );
    var top = new THREE.Mesh( topGeometry, topMaterial );
    top.position.y = 0.55;
    lamppost.add(top);

    // var lampGeometry = new THREE.CylinderGeometry( 0.03, 0.03, 0.2);
    // var lampMaterial = new THREE.MeshBasicMaterial( {map: texture} );
    // var lamp = new THREE.Mesh( lampGeometry, lampMaterial );
    // lamp.position.y = 0.5;
    // lamp.position.x = 0.1
    // lamp.rotation.x = Math.PI / 2;
    // lamp.rotation.z = Math.PI / 2;
    // lamppost.add(lamp);

    return lamppost;
}