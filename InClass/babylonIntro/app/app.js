let canvas = document.getElementById("renderCanvas");
let engine = new BABYLON.Engine(canvas, true);
let camera, scene, sphere;
let t = 0;

function createScene() {
    let scene = new BABYLON.Scene(engine);
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    
    let light = new BABYLON.DirectionalLight("dir01",
        new BABYLON.Vector3(0, -.5, 1),
        scene);

    sphere = BABYLON.MeshBuilder.CreateSphere("mySphere",
        {diameter: 2, scene});
    
    return scene;
}

scene = createScene();
engine.runRenderLoop(function () {
    t += .01;
    sphere.scaling.x += Math.sin(t);
    sphere.scaling.y += Math.sin(t);
    sphere.scaling.z += Math.sin(t);
    scene.render();
});
