//Application level stuff
//Cluttering global namespace!
let canvas = document.getElementById("renderCanvas");
let engine = new BABYLON.Engine(canvas, true);
let camera, scene, ball, goal, timeoutId, particleSystem;

//Create the scene
scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
});

scene.registerAfterRender(function () {
    if (ball.intersectsMesh(goal, false)) {
        //Move goal
        goal.position.x = (Math.random() * 8) - 4;

        //Play a particle burst
        particleSystem.manualEmitCount = 21;
        particleSystem.start();

        //Position particles
        particleSystem.minEmitBox = ball.position;

        //Put ball back
        resetBall();
    }
});

function createScene() {
    let scene = new BABYLON.Scene(engine);

    //Scene setup
    camera = new BABYLON.UniversalCamera("UC", new BABYLON.Vector3(0, 0, -15), scene);
    let light = new BABYLON.DirectionalLight("lighty", new BABYLON.Vector3(0, -.2, .2), scene);

    //Enable phsyics
    let gravityVector = BABYLON.Vector3(0, -9.81, 0);
    let physicsPlugin = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlugin);

    //Setup ball
    ball = BABYLON.MeshBuilder.CreateSphere("sphero", {diameter: 1}, scene);
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, {
        mass: 1,
        restitution: .2
    }, scene);
    ball.tag = "ball";

    //Setup ground
    let ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 20, width: 20, subdivisions: 4}, scene);
    ground.position.y = -3;
    ground.position.z = 9;
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {
        mass: 0,
        restitution: .9
    }, scene);

    //Make the goal
    goal = new BABYLON.MeshBuilder.CreateBox("goal", {height: 5, width: 5}, scene);
    goal.position.z = 7;
    goal.position.x = (Math.random() * 8) - 4;

    //Make the particle system
    particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem.emitter = new BABYLON.Vector3(0, 0, 0);
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.addVelocityGradient(0, 2);

    //Load the particle texture
    particleSystem.particleTexture = new BABYLON.Texture("images/feather.png", scene);

    return scene;
}

function resetBall() {
    //Reset position
    ball.position = new BABYLON.Vector3();
    //Reset veloctiy
    ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
    ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

    //Get rid of timeout if still on
    clearTimeout(timeoutId);

}

window.addEventListener("click", function () {
    //Get the mesh that was clicked
    let pickResult = scene.pick(scene.pointerX, scene.pointerY);
    let selectedObject = pickResult.pickedMesh;

    //Null check
    if (selectedObject) {
        if (selectedObject.tag === "ball") {
            //Get direction away from user
            let surfaceNormal = pickResult.getNormal(true);
            let forceDirection = surfaceNormal.scale(-1000);

            //kick object
            selectedObject.physicsImpostor.applyForce(
                forceDirection,
                selectedObject.getAbsolutePosition(),
            );

            //Reset ball
            timeoutId = setTimeout(resetBall, 3000);
        }
    }
});