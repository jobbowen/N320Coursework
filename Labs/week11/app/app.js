//Create Canvas
let canvas = document.getElementById("renderCanvas");
//Define Babylon engine
let engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
let selected = null;

let createScene = function () {
    let scene = new BABYLON.Scene(engine);
    //Create camera and positioning
    let camera = new BABYLON.ArcRotateCamera(
        'camera1',
        Math.PI - Math.PI / 2,
        Math.PI / 3,
        300,
        new BABYLON.Vector3(0, 0, 0),
        scene
    );
    camera.setTarget(new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas);
    //Create light source
    let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 20, 0), scene);
    //Create middle box
    let box = BABYLON.MeshBuilder.CreateBox('box1', {height: 50, width: 50, depth: 50}, scene);
    box.material = new BABYLON.StandardMaterial("box_mat", scene);
    box.rotation.x = Math.PI/9;

    //Create left box
    let box2 = BABYLON.MeshBuilder.CreateBox('box2', {height: 50, width: 50, depth: 50}, scene);
    box2.material = new BABYLON.StandardMaterial("box_mat", scene);
    box2.position.x = 100;
    box2.position.y = 0;

    //Create right box
    let box3 = BABYLON.MeshBuilder.CreateBox('box3', {height: 50, width: 50, depth: 50}, scene);
    box3.material = new BABYLON.StandardMaterial("box_mat", scene);
    box3.position.x = -100;
    box3.position.y = 0;

    //Change color of mesh depending on what mesh is clicked
    scene.onPointerObservable.add(function (evt) {
        if (selected) {
            //Listen for W or S key. Rotate 20 degrees, PI/9.
            window.addEventListener("keydown", (e) => {
                if (e.key === "w" || e.key === "W") {
                    selected.rotation.x += -Math.PI / 9;
                } else if (e.key === "s" || e.key === "S") {
                    selected.rotation.x += Math.PI / 9;
                }
                //Change box rotation to 0 since radians are hard to work with
                // if (box.rotation.x >= Math.PI || box.rotation.x <=-Math.PI) {
                //     box.rotation.x = 0;
                // }
                // if (box2.rotation.x >= Math.PI || box2.rotation.x <= -Math.PI) {
                //     box2.rotation.x = 0;
                // }
                // if (box3.rotation.x >= Math.PI || box3.rotation.x <= -Math.PI) {
                //     box3.rotation.x = 0;
                // }
                //Display rotation in divs
                document.getElementById("box").innerHTML = "Middle Box: " + box.rotation.x;
                document.getElementById("box2").innerHTML = "Left Box: " + box2.rotation.x;
                document.getElementById("box3").innerHTML = "Right Box: " + box3.rotation.x;
            });
            //Color of material when not selected and rotation is not equal
            selected.material.diffuseColor = BABYLON.Color3.White();
            selected = null;
        }
        //If all rotations are equal change all mesh color to green.
        if (box.rotation.x === box2.rotation.x && box.rotation.x === box3.rotation.x) {
            box.material.diffuseColor = BABYLON.Color3.Green();
            box2.material.diffuseColor = BABYLON.Color3.Green();
            box3.material.diffuseColor = BABYLON.Color3.Green();
        }
        //If mesh is selected, change color to blue
        if (evt.pickInfo.hit && evt.pickInfo.pickedMesh) {
            selected = evt.pickInfo.pickedMesh;
            evt.pickInfo.pickedMesh.material.diffuseColor = BABYLON.Color3.Blue();
        }
    }, BABYLON.PointerEventTypes.POINTERUP);

    return scene
};

scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
});
window.addEventListener("resize", function () {
    engine.resize();
});
