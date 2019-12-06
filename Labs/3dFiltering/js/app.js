let canvas = document.getElementById('renderCanvas');
let rgCost = document.getElementById("rgCost");
let infoBox = document.getElementById("infoBox");
let filterButtons = document.querySelectorAll(".filterNav");
let camera, scene, data, selectedPieces;

let selectedType = "all";

console.log(filterButtons);
//Application setup
fetch("data/furniture.json", {method: 'get'})
    .then(response => response.json())
    .then((jsonData) => {
        //json representation of data
        data = jsonData;

        //Load in models
        data.furniture.forEach((piece, idx) => {
            let p = BABYLON.SceneLoader.ImportMesh(
                "", "./models/house/", piece.asset, scene,
                (meshes) => {
                    let containerNode = new BABYLON.TransformNode("root");
                    piece.asset = containerNode;
                    piece.asset.dataId = idx;

                    meshes.forEach((mesh) => {
                        mesh.parent = containerNode;
                    });
                }
            );
        });
    });

//Setup engine stuff
let engine = new BABYLON.Engine(canvas, true);

scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
});

function createScene() {
    let scene = new BABYLON.Scene(engine);

    camera = new BABYLON.ArcRotateCamera(
        "c", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene
    );

    let light = new BABYLON.DirectionalLight(
        "l", new BABYLON.Vector3(0, -.5, 1.0), scene
    );

    return scene;
}

//End setup engine stuff


//Application functions
function selectType(event) {
    //Remember what was selected
    selectedType = event.target.getAttribute("data-type");

    //Reset selected class
    filterButtons.forEach((button) => {
        button.classList.remove("selected")
    });

    //Add the selected class to the item that was clicked
    event.target.classList.add("selected");

}

function showAvailable() {
    //Get slider cost value
    let amount = Number(rgCost.value);

    //Filter selected pieces
    selectedPieces = data.furniture.filter((piece) => {
        //Only on price if all
        if (selectedType === "all") {
                return piece.price < amount;
        } else { //Price
            return (piece.price < amount) && (piece.type === selectedType);
        }
    });

    //Hide all pieces
    data.furniture.forEach((piece) => {
        TweenLite.to(piece.asset.position, .7, {y:5, onComplete: showFiltered})
    });
}

function showFiltered() {
    selectedPieces.forEach((piece, idx) => {
        TweenLite.to(piece.asset.position, .7, {y: 0, x: idx})
    })
}

window.addEventListener("click", function () {
    let pickResult = scene.pick(scene.pointerX, scene.pointerY);
    let selectedObject = pickResult.pickedMesh;
    console.log(selectedObject);

    //Lazy check
    if (selectedObject) {
        //Get id of object
        let dataId = selectedObject.parent.dataId;

        //Pull rest of object data
        let itemInfo = data.furniture[dataId];
        console.log(itemInfo);
        infoBox.innerHTML = `${itemInfo.style} ${itemInfo.type} : $${itemInfo.price}`;
    }
});
