/**
 * 
 * @param {*} r radius
 * @param {*} nw number of width elements
 * @param {*} nh number of height elements
 * @param {*} col color
 * @param {*} wf wireframe, true or false
 * @param {*} x position x
 * @param {*} y position y
 * @param {*} z position z
 * @param {*} sx scale factor for x
 * @param {*} sy scale factor for y
 * @param {*} sz scale factor for z
 */
function createSphere(r = 4, nw = 30, nh = 5, col = 0x7777ff, wf = true, x = 20, y = 4, z = 2, sx = 3, sy = 3, sz = 3) {
    // create a sphere
    let sphereGeometry = new THREE.SphereGeometry(r, nw, nh)
    let sphereMaterial = new THREE.MeshBasicMaterial({
        color: col,
        wireframe: wf,
    })
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

    //position the sphere
    sphere.position.x = x
    sphere.position.y = y
    sphere.position.z = z

    sphere.scale.x = sx
    sphere.scale.y = sy
    sphere.scale.z = sz

    return sphere
}

function generateRandomColor() {
    let r = (Math.random() * 255).toFixed(0)
    let g = (Math.random() * 255).toFixed(0)
    let b = (Math.random() * 255).toFixed(0)
    return "rgb(" + r + "," + g + "," + b + ")";
}

function Deg2Rad(angle_in_deg) {
    return angle_in_deg / 180 * Math.PI;
}


// returns boolean whether to generate wireframe or not, 50/50 chance
function generateWireFrame() {
    return Math.random() > 0.5
}

function initStats() {
    let stats = new Stats();
    frameCounter = 0
    stats.setMode(0); //0=> fps, 1=> ms/frame
    document.getElementById('my-stats-output').appendChild(stats.domElement);

    return stats;
}

function createBoxMLM(w = 20, h = 20, d = 20, col = 0x7777ff, wf = true, x = 10, y = 4, z = 2, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {

}

function createBox(w = 20, h = 20, d = 20, col = 0x7777ff, wf = true, x = 10, y = 4, z = 2, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {
    // create a box
    let boxGeometry = new THREE.BoxGeometry(w, h, d)
    let boxMaterial = new THREE.MeshLambertMaterial({
        color: col,
        wireframe: wf,
    })
    let box = new THREE.Mesh(boxGeometry, boxMaterial)

    //position the box
    box.position.x = x
    box.position.y = y
    box.position.z = z

    box.scale.x = sx
    box.scale.y = sy
    box.scale.z = sz

    // rotation in radians, not degrees
    box.rotation.x = rx
    box.rotation.y = ry
    box.rotation.z = rz

    return box
}

function createBuildings() {
    // for (let index = scene.children.length; index >= 0; index--) {
    //     if (scene.children[index].geometry.type = "BoxGeometry") {
    //         scene.remove(scene.children[index]);
    //     }
    // }

    for (let index = 0; index < controls.numberOfBuildings; index++) {
        let w = Math.random() * controls.dx;
        let h = Math.random() * controls.dy;
        let d = Math.random() * controls.dz;

        let px = -10 + Math.random() * 20
        let py = h / 2
        let pz = -10 + Math.random() * 20

        // let sx = 25 * Math.random() * 4
        // let sy = 25 * Math.random() * 4
        // let sz = 25 * Math.random() * 4

        // let rx = Math.random() * Deg2Rad(45)
        // let ry = Math.random() * Deg2Rad(45)
        // let rz = Math.random() * Deg2Rad(45)

        let box = createBox(w, h, d, generateRandomColor(), generateWireFrame(), px, py, pz)
        scene.add(box)
    }
}

// GLOBAL VARIABLES -----------------------------------------------------------------------------------------
let scene, camera, renderer, stats, spotlight;
let frameCounter = 0;

//Feb 05 - Using dat.GUI - Step 1'. Declare global variables needed
let controls, gui;
let red_cube;
let plane;

// Feb 08 - Using Ascii Effect - Step 1'. Declare global var(s) needed
let effect;

function init() {

    stats = initStats()

    //Feb 05 - Using dat.GUI - Step 2. Specify controls
    controls = new function () {
        this.rotationSpeed = 0.01;
        this.spotLightHeight = 40;
        this.dx = .1;
        this.dy = 5;
        this.dz = .2;
        this.numberOfBuildings = 1500;
    };

    //Feb 05 - Using dat.GUI - Step 3. Instantiate dat.GUI
    gui = new dat.GUI();

    //Feb 05 - Using dat.GUI - Step 3'. Connect gui with controls
    gui.add(controls, 'rotationSpeed', 0, 0.5);
    gui.add(controls, 'spotLightHeight', 0, 100);
    gui.add(controls, 'dx', 0, 5);
    gui.add(controls, 'dy', 0, 15);
    gui.add(controls, 'dz', 0, 5);
    gui.add(controls, 'numberOfBuildings', 0, 2000);

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(50, 4 / 3, 0.1, 1000)
    camera.position.set(30, 50, 30)

    camera.lookAt(scene.position)

    //object(s)
    var axes = new THREE.AxisHelper(100)
    scene.add(axes)

    //spheres randomly generated
    for (let index = 0; index < 10; index++) {
        const element = 10;
        let r = Math.random() * 10
        let w = 5 + Math.random() * 30
        let h = 5 + Math.random() * 30
        let px = -20 + Math.random() * 40
        let py = -10 + Math.random() * 20
        let pz = -20 + Math.random() * 40
        let sx = .5 * Math.random() * 4
        let sy = .5 * Math.random() * 4
        let sz = .5 * Math.random() * 4

        let sphere = createSphere(r, w, h, generateRandomColor(), generateWireFrame(), px, py, pz, sx, sy, sz)
        // scene.add(sphere)
    }

    // generate buildings
    // createBuildings();

    // add a plane
    let planeGeometry = new THREE.PlaneGeometry(20, 20, 2, 2)
    let planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xeeeeee,
        wireframe: false
    });
    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(0, 0, 0)
    plane.scale.set(2, 2, 1)
    plane.rotation.set(Deg2Rad(-90), 0, 0)
    plane.position.set(plane.position.x + 10, plane.position.y, plane.position.z + 10)
    plane.receiveShadow = true;
    scene.add(plane);

    red_cube = createBox(controls.dx, controls.dy, controls.dz, 0xFF0000, false, 0, 0, 0);
    red_cube.castShadow = true;
    scene.add(red_cube);

    spotlight = new THREE.SpotLight()
    spotlight.position.set(0, controls.spotLightHeight, 0) //Feb05 - used controls
    spotlight.castShadow = true;
    spotlight.lookAt(red_cube);
    scene.add(spotlight)

    // let spotlight2 = new THREE.SpotLight()
    // spotlight2.position.set(-10, 30, -10) //Feb05 - used controls
    // spotlight2.castShadow = true;
    // spotlight2.lookAt(red_cube);
    // scene.add(spotlight2)

    renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0xEEFFEE))
    renderer.setSize(1024, 768)
    renderer.shadowMapEnabled = true;

    // render all this

    // Feb 08 - Using AsciiEffect component - Step 2. 
    // replace the following line ...
    // document.getElementById('my-webgl-output').appendChild(renderer.domElement)

    // ...with these 3 lines
    effect = new THREE.AsciiEffect(renderer);
    effect.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('my-webgl-output').appendChild(effect.domElement)


    renderer.render(scene, camera)

    // renderScene(renderScene, scene, camera)
    renderScene()
}

function renderScene() {
    frameCounter += 1;

    let t = frameCounter * controls.rotationSpeed; //Feb05 - used controls

    let x = spotlight.position.x;
    let y = spotlight.position.y;
    let z = spotlight.position.z;

    spotlight.position.set(x * Math.sin(t) - 10, 40, z * Math.cos(t) - 10);
    scene.rotation.set(0, t, 0);

    scene.remove(red_cube);
    red_cube = createBox(controls.dx, controls.dy, controls.dz, 0xFF0000, false, 0, 0, 0);
    red_cube.castShadow = true;
    scene.add(red_cube);

    stats.update();
    requestAnimationFrame(renderScene)
    // Feb.08 - Using AsciiEffect - Step 3. Replace the following line ...
    // renderer.render(scene, camera)
    // ... with this line:
    effect.render(scene, camera);
}

// entry point
window.onload = init()