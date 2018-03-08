function init() {
    // declared variable(s)
    {
        /**
         * We need scene with usual items:
         * 
         * camera
         * horizontal plane
         * ambient light
         * spot light
         * pointlight
         * 
         * regular tetrahedron using Custom Geometry (tetrahedron with all the sides equal)
         */
        let scene, camera, renderer, stats, spotLight;
        let frameCounter = 0;

        let controls, gui;
        let plane;

        let ambientLight, pointLight, directionalLight;
        let tetrahedronMesh;

        // used to store the randomly generated tetrahedrons
        var randomTetrahedrons = [];
    }

    stats = initStats()

    // defining dat.GUI controls
    controls = new function () {

        // camera controls
        this.camera_px = 30;
        this.camera_py = 50;
        this.camera_pz = 30;

        // plane controls
        this.planeColor = "#eeeeee";

        // ambient light controls
        this.ambientLightColor = "#0c0c0c";

        // spot light controls
        this.spotLightHeight = 60;
        this.spotLightColor = "#bbbbbb";

        // point light controls
        this.pointLightColor = "#ffffff";
        this.pointLightIntensity = 0.4;

        // tetrahedron controls
        this.tetrahedronRotationSpeed = 0.01;

        // position
        this.tetrahedron_px = 0;
        this.tetrahedron_py = 0;
        this.tetrahedron_pz = 0;
        // scale
        this.tetrahedron_sx = 15;
        this.tetrahedron_sy = 15;
        this.tetrahedron_sz = 15;
        // rotation
        this.tetrahedron_rx = 0;
        this.tetrahedron_ry = 0;
        this.tetrahedron_rz = 0;
        // visible
        this.tetrahedronVisible = true;
        // wireframe
        this.tetrahedronWireframe = false;
        // color
        this.tetrahedronColor = Math.random() * 0xffffff;
        // continuous rotation
        this.tetrahedronSpin = false;
        this.tetrahedron_rxModifier = .1;
        this.tetrahedron_ryModifier = .1;
        this.tetrahedron_rzModifier = .1;

        // random tetrahedron controls
        this.numberOfTetrahedrons = 150;
        this.randomTetrahedronsSpin = false;
        this.randomTetrahedrons_rxModifier = .1;
        this.randomTetrahedrons_ryModifier = .1;
        this.randomTetrahedrons_rzModifier = .1;
    };

    // dat.GUI instantiation + wiring up of dat.GUI controls
    {
        gui = new dat.GUI();

        // camera controls
        let cameraFolder = gui.addFolder('Camera Controls');
        cameraFolder.add(controls, 'camera_px', 0, 60).onChange(px => camera.position.x = px);
        cameraFolder.add(controls, 'camera_py', 0, 100).onChange(py => camera.position.y = py);
        cameraFolder.add(controls, 'camera_pz', 0, 60).onChange(pz => camera.position.z = pz);

        // plane controls
        let planeFolder = gui.addFolder('Plane Controls');
        planeFolder.addColor(controls, 'planeColor').onChange(c => plane.material.color = new THREE.Color(c));

        // ambient light controls
        let ambientLightFolder = gui.addFolder('Ambient Light Controls');
        ambientLightFolder.addColor(controls, 'ambientLightColor').onChange(c => ambientLight.color = new THREE.Color(c));

        // spot light controls
        let spotLightFolder = gui.addFolder('Spot Light Controls');
        spotLightFolder.add(controls, 'spotLightHeight', 0, 100).onChange(h => spotLight.position.set(spotLight.position.x, h, spotLight.position.z));
        spotLightFolder.addColor(controls, 'spotLightColor').onChange(c => spotLight.color = new THREE.Color(c));

        // point light controls
        let pointLightFolder = gui.addFolder('Point Light Controls');
        pointLightFolder.addColor(controls, 'pointLightColor').onChange(c => pointLight.color = new THREE.Color(c));
        pointLightFolder.add(controls, 'pointLightIntensity', 0, 1).onChange(i => pointLight.intensity = i);

        // tetrahedron controls
        let tetrahedronFolder = gui.addFolder('Tetrahedron Controls');
        tetrahedronFolder.add(controls, 'tetrahedronRotationSpeed', 0, 0.5);
        // position
        tetrahedronFolder.add(controls, 'tetrahedron_px', -10, 10).onChange(px => tetrahedronMesh.position.x = px);
        tetrahedronFolder.add(controls, 'tetrahedron_py', -10, 10).onChange(py => tetrahedronMesh.position.y = py);
        tetrahedronFolder.add(controls, 'tetrahedron_pz', -10, 10).onChange(pz => tetrahedronMesh.position.z = pz);
        // scale
        tetrahedronFolder.add(controls, 'tetrahedron_sx', 1, 30).onChange(sx => tetrahedronMesh.scale.x = sx);
        tetrahedronFolder.add(controls, 'tetrahedron_sy', 1, 30).onChange(sy => tetrahedronMesh.scale.y = sy);
        tetrahedronFolder.add(controls, 'tetrahedron_sz', 1, 30).onChange(sz => tetrahedronMesh.scale.z = sz);
        // rotation
        tetrahedronFolder.add(controls, 'tetrahedron_rx', 0, degreeToRadians(360)).onChange(rx => tetrahedronMesh.rotation.x = rx);
        tetrahedronFolder.add(controls, 'tetrahedron_ry', 0, degreeToRadians(360)).onChange(ry => tetrahedronMesh.rotation.y = ry);
        tetrahedronFolder.add(controls, 'tetrahedron_rz', 0, degreeToRadians(360)).onChange(rz => tetrahedronMesh.rotation.z = rz);
        // visible
        tetrahedronFolder.add(controls, 'tetrahedronVisible').onChange(visible => tetrahedronMesh.visible = visible);
        // wireframe
        tetrahedronFolder.add(controls, 'tetrahedronWireframe').onChange(wireframe => tetrahedronMesh.material.wireframe = wireframe);
        // color
        tetrahedronFolder.addColor(controls, 'tetrahedronColor').onChange(c => tetrahedronMesh.material.color = new THREE.Color(c));
        // continuous spinning
        tetrahedronFolder.add(controls, 'tetrahedronSpin');
        tetrahedronFolder.add(controls, 'tetrahedron_rxModifier', 0, 0.5);
        tetrahedronFolder.add(controls, 'tetrahedron_ryModifier', 0, 0.5);
        tetrahedronFolder.add(controls, 'tetrahedron_rzModifier', 0, 0.5);

        // random tetrahedron controls
        let randomTetrahedronFolder = gui.addFolder('Random Tetrahedron Controls');
        randomTetrahedronFolder.add(controls, 'numberOfTetrahedrons', 0, 500).onChange(n => {
            removeAllRandomTetrahedrons();
            generateRandomTetrahedrons();
        });
        randomTetrahedronFolder.add(controls, 'randomTetrahedronsSpin');
        randomTetrahedronFolder.add(controls, 'randomTetrahedrons_rxModifier', 0, 0.5);
        randomTetrahedronFolder.add(controls, 'randomTetrahedrons_ryModifier', 0, 0.5);
        randomTetrahedronFolder.add(controls, 'randomTetrahedrons_rzModifier', 0, 0.5);

    }

    // setting up scene + camera + axis helper
    {
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(50, 4 / 3, 0.1, 1000)
        camera.position.set(controls.camera_px, controls.camera_py, controls.camera_pz)

        camera.lookAt(scene.position)

        //object(s)
        let axes = new THREE.AxisHelper(100)
        scene.add(axes)
    }

    // create the world (add scene objects)
    {
        // add a plane
        {
            let planeGeometry = new THREE.PlaneGeometry(20, 20, 2, 2)
            let planeMaterial = new THREE.MeshLambertMaterial({
                color: controls.planeColor,
                wireframe: false
            });
            plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.position.set(0, 0, 0)
            plane.scale.set(2, 2, 1)
            plane.rotation.set(degreeToRadians(-90), 0, 0)
            plane.position.set(plane.position.x + 10, plane.position.y, plane.position.z + 10)
            plane.receiveShadow = true;
            scene.add(plane);
        }

        // add a spotLight
        {
            spotLight = new THREE.SpotLight(controls.spotLightColor);
            spotLight.position.set(0, controls.spotLightHeight, 0) //Feb05 - used controls
            spotLight.castShadow = true;
            // spotLight.lookAt(red_cube);
            scene.add(spotLight)
        }

        // add an ambient light
        {
            ambientLight = new THREE.AmbientLight(controls.ambientLightColor);
            scene.add(ambientLight);
        }

        // add a pointlight
        {
            pointLight = new THREE.PointLight(controls.pointLightColor, controls.pointLightIntensity)
            pointLight.position.set(-10, 100, -10) //Feb05 - used controls
            // pointLight.castShadow = true;
            // pointLight.lookAt(red_cube);
            scene.add(pointLight)
        }

        // Creating Regular Tetrahedron using Custom Geometry (tetrahedron with all the sides equal) -> this one can be modified using dat.GUI controls
        {
            // let tetraVetices = [
            //     new THREE.Vector3(
            //         -0.28867513459481288225457439025098,
            //         0,
            //         -0.5), //V_0 (index0)
            //     new THREE.Vector3(
            //         -0.28867513459481288225457439025098,
            //         0,
            //         0.5), //V_1 (index1)
            //     new THREE.Vector3(
            //         Math.sqrt(3) / 2 - 0.28867513459481288225457439025098,
            //         0,
            //         0),//V_2 (index2)
            //     new THREE.Vector3(
            //         0,
            //         0.95742710775633810997510191136982,
            //         0), //V_3 (index3)

            // ];

            // // regular tet on x-z plane
            // // let tetraVetices = [
            // //     // new THREE.Vector3(-1, 1, -1), //V_0 (index0)
            // //     // new THREE.Vector3(-1, -1, 1), //V_1 (index1)
            // //     // new THREE.Vector3(1, -1, -1), //V_2 (index2)
            // //     // new THREE.Vector3(1, 1, 1), //V_3 (index3)

            // //     new THREE.Vector3(0, 0, 0), //V_0 (index0)
            // //     new THREE.Vector3(0, 0, 1), //V_1 (index1)
            // //     new THREE.Vector3(Math.sqrt(3) / 2, 0, 0.5),//V_2 (index2)
            // //     new THREE.Vector3(
            // //         0.28867513459481288225457439025098,
            // //         0.95742710775633810997510191136982,
            // //         0.5), //V_3 (index3)

            // // ];

            // // regular tet
            // // let tetraVetices = [
            // //     new THREE.Vector3(-1, 1, -1), //V_0 (index0)
            // //     new THREE.Vector3(-1, -1, 1), //V_1 (index1)
            // //     new THREE.Vector3(1, -1, -1), //V_2 (index2)
            // //     new THREE.Vector3(1, 1, 1), //V_3 (index3)
            // // ];

            // // ALMOST working
            // // let tetraVetices = [
            // //     new THREE.Vector3(-0.5, 0, -0.4330127019), //V_0 (index0)
            // //     new THREE.Vector3(0, 0, 0.4330127019), //V_1 (index1)
            // //     new THREE.Vector3(0.5, 0, -0.4330127019), //V_2 (index2)
            // //     new THREE.Vector3(0, 1, 0), //V_3 (index3)
            // // ];


            // // ORIGINAL
            // // let tetraVetices = [
            // //     new THREE.Vector3(0, 0, 0), //V_0 (index0)
            // //     new THREE.Vector3(0, 0, 1), //V_1 (index1)
            // //     new THREE.Vector3(1, 0, 0), //V_2 (index2)
            // //     new THREE.Vector3(0, 1, 0), //V_3 (index3)
            // // ];

            // // faces array doesnt need to change, just change vertices
            // let tetraFaces = [
            //     new THREE.Face3(0, 2, 1), // F_0 - swap indexes, only one side of the face can be seen (normal to the camera/light?)
            //     // new THREE.Face3(0, 1, 2), // F_0 - swap indexes, only one side of the face can be seen (normal to the camera/light?)
            //     new THREE.Face3(1, 2, 3), // F_1
            //     new THREE.Face3(0, 3, 2), // F_2
            //     // new THREE.Face3(0, 1, 3), // F_3
            //     new THREE.Face3(0, 1, 3), // F_3
            //     // new THREE.Face3(1, 3, 2),
            //     // new THREE.Face3(0, 3, 2),
            // ];

            // let tetraGeo = new THREE.Geometry();
            // tetraGeo.vertices = tetraVetices;
            // tetraGeo.faces = tetraFaces;
            // tetraGeo.computeFaceNormals();

            // let tetraMat = new THREE.MeshLambertMaterial({ color: controls.tetrahedronColor, wireframe: controls.tetrahedronWireframe });
            // tetrahedronMesh = new THREE.Mesh(tetraGeo, tetraMat);
            // // tetrahedronMesh.position = new THREE.Vector3(20, 0, 20);
            // // tetrahedronMesh.position.y = 10;
            // tetrahedronMesh.scale.set(controls.tetrahedron_sx, controls.tetrahedron_sy, controls.tetrahedron_sz);

            tetrahedronMesh = createRegularTetrahedron(
                controls.tetrahedron_px,
                controls.tetrahedron_py,
                controls.tetrahedron_pz,
                controls.tetrahedron_rx,
                controls.tetrahedron_ry,
                controls.tetrahedron_rz,
                controls.tetrahedron_sx,
                controls.tetrahedron_sy,
                controls.tetrahedron_sz,
                controls.tetrahedronColor,
                controls.tetrahedronWireframe
            );

            scene.add(tetrahedronMesh);

            // HOMEWORK: create real tetrahedron - leave vertices + faces same, just coordinates change 
            // also need add controls for positions, scales, etc.
        }

        // generate random regular tetrahedrons (not modifiable by dat.GUI controls)
        {
            generateRandomTetrahedrons();
            // for (let index = 0; index < 150; index++) {
            //     // let px = Math.random() * .1
            //     // let py = Math.random() * 5
            //     // let pz = Math.random() * .2

            //     let px = -10 + Math.random() * 20;
            //     let py = (Math.random() * 5) / 2;
            //     let pz = -10 + Math.random() * 20;

            //     let rx = degreeToRadians(Math.random() * 360);
            //     let ry = degreeToRadians(Math.random() * 360);
            //     let rz = degreeToRadians(Math.random() * 360);

            //     let sx = Math.random() * 5;
            //     let sy = Math.random() * 5;
            //     let sz = Math.random() * 5;

            //     let color = Math.random() * 0xffffff;

            //     let wireframe = generateWireFrame();

            //     randomTetrahedrons.push(createRegularTetrahedron(
            //         px, py, pz,
            //         rx, ry, rz,
            //         sx, sy, sz,
            //         color,
            //         wireframe
            //     ));

            //     scene.add(randomTetrahedrons[index]);
            // }
        }
    }

    // setup renderer + render all this world (scene)
    {
        renderer = new THREE.WebGLRenderer()
        renderer.setClearColor(new THREE.Color(0xEEFFEE))
        renderer.setSize(1024, 768)
        renderer.shadowMapEnabled = true;

        // render all this
        document.getElementById('my-webgl-output').appendChild(renderer.domElement)
        renderScene()
    }

    // declared functions --------------------------------------------------------------------------------------------------
    function degreeToRadians(angle_in_deg) {
        return angle_in_deg / 180 * Math.PI;
    }

    /**
     * 
     * refactor tetrahedron creation into its own function 
     * 
     * takes arguments for:
     * position (x,y,z)
     * rotation (x,y,z)
     * scale (x,y,z)
     * color
     * wireframe
     * 
     */
    function createRegularTetrahedron(
        px, py, pz,
        rx, ry, rz,
        sx, sy, sz,
        color,
        wireframe
    ) {

        const REGULAR_TETRAHEDRON_VERTICES = [
            new THREE.Vector3(
                -0.28867513459481288225457439025098,
                0,
                -0.5), //V_0 (index0)
            new THREE.Vector3(
                -0.28867513459481288225457439025098,
                0,
                0.5), //V_1 (index1)
            new THREE.Vector3(
                Math.sqrt(3) / 2 - 0.28867513459481288225457439025098,
                0,
                0),//V_2 (index2)
            new THREE.Vector3(
                0,
                0.95742710775633810997510191136982,
                0), //V_3 (index3)

        ];

        const REGULAR_TETRAHEDRON_FACES = [
            new THREE.Face3(0, 2, 1), // F_0 
            new THREE.Face3(1, 2, 3), // F_1
            new THREE.Face3(0, 3, 2), // F_2
            new THREE.Face3(0, 1, 3), // F_3
        ];

        // mandatory for building regular tetrahedron
        let tetrahedronGeometry = new THREE.Geometry();
        tetrahedronGeometry.vertices = REGULAR_TETRAHEDRON_VERTICES;
        tetrahedronGeometry.faces = REGULAR_TETRAHEDRON_FACES;
        tetrahedronGeometry.computeFaceNormals();

        // can be customized for each instance
        let tetrahedronMaterial = new THREE.MeshLambertMaterial({ color: color, wireframe: wireframe });

        let tetrahedron = new THREE.Mesh(tetrahedronGeometry, tetrahedronMaterial);
        tetrahedron.castShadow = true;
        tetrahedron.position.set(px, py, pz);
        tetrahedron.scale.set(sx, sy, sz);

        // return custom regular tetrahedron
        return tetrahedron;
    }

    function generateRandomTetrahedrons() {
        for (let index = 0; index < controls.numberOfTetrahedrons; index++) {
            let px = -10 + Math.random() * 20;
            let py = (Math.random() * 5) / 2;
            let pz = -10 + Math.random() * 20;

            let rx = degreeToRadians(Math.random() * 360);
            let ry = degreeToRadians(Math.random() * 360);
            let rz = degreeToRadians(Math.random() * 360);

            let sx = Math.random() * 5;
            let sy = Math.random() * 5;
            let sz = Math.random() * 5;

            let color = Math.random() * 0xffffff;

            let wireframe = generateWireFrame();

            randomTetrahedrons.push(createRegularTetrahedron(
                px, py, pz,
                rx, ry, rz,
                sx, sy, sz,
                color,
                wireframe
            ));

            scene.add(randomTetrahedrons[index]);
        }
    }

    function removeAllRandomTetrahedrons() {
        for (let index = 0; index < randomTetrahedrons.length; index++) {
            scene.remove(randomTetrahedrons[index]);
        }
        randomTetrahedrons = [];
    }

    // returns boolean whether to generate wireframe or not, 50/50 chance
    function generateWireFrame() {
        return Math.random() > 0.5
    }

    function initStats() {
        let stats = new Stats();
        // frameCounter = 0
        stats.setMode(0); //0=> fps, 1=> ms/frame
        document.getElementById('my-stats-output').appendChild(stats.domElement);

        return stats;
    }

    function renderScene() {
        // frameCounter += 1;
        // let randomTetrahedronY = frameCounter * .1;

        // let t = frameCounter * controls.tetrahedronRotationSpeed; //Feb05 - used controls

        // let x = spotLight.position.x;
        // let y = spotLight.position.y;
        // let z = spotLight.position.z;

        // spotLight.position.set(x * Math.sin(t) - 10, 40, z * Math.cos(t) - 10);
        // scene.rotation.set(0, t, 0);
        // scene.rotation.set(t, t, t);
        // tetrahedronMesh.rotation.y = frameCounter * controls.tetrahedronRotationSpeed;

        // camera.rotation.set(t, t, t);

        if (controls.tetrahedronSpin) {
            tetrahedronMesh.rotation.x += controls.tetrahedron_rxModifier;
            tetrahedronMesh.rotation.y += controls.tetrahedron_ryModifier;
            tetrahedronMesh.rotation.z += controls.tetrahedron_rzModifier;
        }

        if (controls.randomTetrahedronsSpin) {
            for (let i = 0; i < randomTetrahedrons.length; i++) {
                randomTetrahedrons[i].rotation.x += controls.randomTetrahedrons_rxModifier;
                randomTetrahedrons[i].rotation.y += controls.randomTetrahedrons_ryModifier;
                randomTetrahedrons[i].rotation.z += controls.randomTetrahedrons_rzModifier;
            }
        }

        stats.update();
        requestAnimationFrame(renderScene)
        renderer.render(scene, camera)
    }
}

// entry point
window.onload = init()