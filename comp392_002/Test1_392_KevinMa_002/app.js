function init() {
    // declared variable(s)
    {
        /**
         * 
         * camera - peeking into the "squash" court
         * 2 x point light
         * 2 x spheres scaled appropiately
         * ambient light
         * 
         */
        let scene, camera, renderer, stats;
        let pointLight1, pointLight2;
        let sphere1, sphere2;
        let ambientLight;
        let axes;
        // red stripes
        let leftWallStripe;
        let backWallStripeTop;
        let backWallStripeMiddle;
        let backWallStripeBottom;
        let rightWallStripe;
        let floorTopHorizontalStripe;
        let floorLeftHorizontalStripe;
        let floorRightHorizontalStripe;
        let floorMiddleVerticalStripe;
        let floorLeftVerticalStripe;
        let floorRightVerticalStripe;

        /**
         * 
         * "squash" court with 3 walls and a floor
         * 5 "cubes" positioned/rotated/scaled appropiately
         * 
         */
        let ceiling;
        let leftWall, rightWall, backWall;
        let floor;

        let controls, gui;

        /**
         * BONUSES:
         * - custom geometry - triangular prism + dat.GUI controls to position/scale it in the room.
         * - transparent fourth wall that camera can peek through
         * - a squash racket (or two): box for the tail , sphere for the oval area, scaled appropiately; positioned on the floor.
         * - a black squash ball: a sphere sized appropiately; positioned beside the racket(s)
         */
    }

    stats = initStats()

    // defining dat.GUI controls
    controls = new function () {

        // camera controls
        this.camera_px = 0;
        this.camera_py = 0;
        this.camera_pz = 122;
        this.camera_rx = 0;
        this.camera_ry = 0;

        // point light1 controls
        this.pointLightColor1 = 0xffffff;
        this.pointLightIntensity1 = .8;

        // point light2 controls
        this.pointLightColor2 = 0xffffff;
        this.pointLightIntensity2 = .8;

        // ambient light controls
        this.ambientLightColor = "#0c0c0c";

    };

    // dat.GUI instantiation + wiring up of dat.GUI controls
    {
        gui = new dat.GUI();

        // camera controls
        let cameraFolder = gui.addFolder('Camera Controls');
        cameraFolder.add(controls, 'camera_px', controls.camera_px, 100).onChange(px => camera.position.x = px);
        cameraFolder.add(controls, 'camera_py', controls.camera_py, 100).onChange(py => camera.position.y = py);
        cameraFolder.add(controls, 'camera_pz', controls.camera_pz, 500).onChange(pz => camera.position.z = pz);
        cameraFolder.add(controls, 'camera_rx', controls.camera_rx, 10).onChange(rx => camera.rotation.x = rx);
        cameraFolder.add(controls, 'camera_ry', controls.camera_ry, 10).onChange(ry => camera.rotation.y = ry);

        // point light1 controls
        let pointLight1Folder = gui.addFolder('Point Light1 Controls');
        pointLight1Folder.addColor(controls, 'pointLightColor1').onChange(c => pointLight1.color = new THREE.Color(c));
        pointLight1Folder.add(controls, 'pointLightIntensity1', 0, 1).onChange(i => pointLight1.intensity = i);

        // point light2 controls
        let pointLight2Folder = gui.addFolder('Point Light2 Controls');
        pointLight2Folder.addColor(controls, 'pointLightColor2').onChange(c => pointLight2.color = new THREE.Color(c));
        pointLight2Folder.add(controls, 'pointLightIntensity2', 0, 1).onChange(i => pointLight2.intensity = i);

        // ambient light controls
        let ambientLightFolder = gui.addFolder('Ambient Light Controls');
        ambientLightFolder.addColor(controls, 'ambientLightColor').onChange(c => ambientLight.color = new THREE.Color(c));

    }

    // setting up scene + camera + axis helper
    {
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(50, 4 / 3, 0.1, 1000)
        camera.position.z = controls.camera_pz;

        // camera.lookAt(scene.position)

        axes = new THREE.AxisHelper(100)
        scene.add(axes)
    }

    // create the world (add scene objects)
    {
        // creating the walls of the squash court
        {
            backWall = createBox(50, 50, 1, 0xd2c6c0, 0, 0, 0, 1, 1, 1, 0, 0, 0);
            scene.add(backWall);

            leftWall = createBox(50, 50, 1, 0xd2c6c0, -25, 0, 25, 1, 1, 1, 0, degreeToRadians(90), 0);
            scene.add(leftWall);

            rightWall = createBox(50, 50, 1, 0xd2c6c0, 25, 0, 25, 1, 1, 1, 0, degreeToRadians(90), 0);
            scene.add(rightWall);

            ceiling = createBox(50, 50, 1, 0xffffff, 0, 25, 25, 1, 1, 1, degreeToRadians(90), 0, 0);
            scene.add(ceiling);

            floor = createBox(50, 50, 1, 0xc7a777, 0, -25, 25, 1, 1, 1, degreeToRadians(90), 0, 0);
            scene.add(floor);
        }

        // creating the two lamps (2 spheres scaled appropiately + 2 point lights)
        {
            sphere1 = createSphere(2, 500, 500, 0xffffff, false, -10, 20, 45, 1, 1, 1);
            scene.add(sphere1);

            sphere2 = createSphere(2, 500, 500, 0xffffff, false, 10, 20, 45, 1, 1, 1);
            scene.add(sphere2);

            // pointlight1            
            pointLight1 = new THREE.PointLight(controls.pointLightColor1);

            pointLight1.position.x = -11;
            pointLight1.position.z = 45;
            pointLight1.position.y = 20;
            pointLight1.intensity = controls.pointLightIntensity1;

            pointLight1Helper = new THREE.PointLightHelper(pointLight1, 5);

            // pointlight2
            pointLight2 = new THREE.PointLight(controls.pointLightColor2);

            pointLight2.position.x = 11;
            pointLight2.position.z = 45;
            pointLight2.position.y = 20;
            pointLight2.intensity = controls.pointLightIntensity2;

            pointLight2Helper = new THREE.PointLightHelper(pointLight2, 5);

            scene.add(pointLight1)
            scene.add(pointLight1Helper)

            scene.add(pointLight2)
            scene.add(pointLight2Helper)
        }

        // ambient light
        {
            ambientLight = new THREE.AmbientLight(controls.ambientLightColor);
            scene.add(ambientLight);
        }

        // adding red stripes
        {

            // wall stripes
            leftWallStripe = createRedStripe(50, 1, 2, 2, -24, 15, 25, 0, degreeToRadians(90), 0);
            rightWallStripe = createRedStripe(50, 1, 2, 2, 24, 15, 25, 0, -degreeToRadians(90), 0);
            backWallStripeTop = createRedStripe(50, 1, 2, 2, 0, 15, 1, 0, 0, 0);

            backWallStripeMiddle = createRedStripe(50, 1, 2, 2, 0, -8, 1, 0, 0, 0);
            backWallStripeBottom = createRedStripe(50, 1, 2, 2, 0, -20, 1, 0, 0, 0);

            // floor stripes
            floorTopHorizontalStripe = createRedStripe(50, 1, 2, 2, 0, -24, 25, -degreeToRadians(90), 0, 0);
            floorLeftHorizontalStripe = createRedStripe(12.5, 1, 2, 2, -18.75, -24, 37, -degreeToRadians(90), 0, 0);
            floorRightHorizontalStripe = createRedStripe(12.5, 1, 2, 2, 18.75, -24, 37, -degreeToRadians(90), 0, 0);

            floorMiddleVerticalStripe = createRedStripe(25, 1, 2, 2, 0, -24, 38, -degreeToRadians(90), 0, degreeToRadians(90));
            floorLeftVerticalStripe = createRedStripe(12.5, 1, 2, 2, -12.5, -24, 31.25, -degreeToRadians(90), 0, degreeToRadians(90));
            floorRightVerticalStripe = createRedStripe(12.5, 1, 2, 2, 12.5, -24, 31.25, -degreeToRadians(90), 0, degreeToRadians(90));

            scene.add(leftWallStripe);
            scene.add(rightWallStripe);
            scene.add(backWallStripeTop);
            scene.add(backWallStripeMiddle);
            scene.add(backWallStripeBottom);

            scene.add(floorTopHorizontalStripe);
            scene.add(floorLeftHorizontalStripe);
            scene.add(floorRightHorizontalStripe);
            scene.add(floorMiddleVerticalStripe);
            scene.add(floorLeftVerticalStripe);
            scene.add(floorRightVerticalStripe);
        }

    }

    // setup renderer + render all this world (scene)
    {
        renderer = new THREE.WebGLRenderer()
        // renderer.setClearColor(new THREE.Color(0xEEFFEE))
        renderer.setClearColor(0xffffff, 1);
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setSize(1024, 768)
        renderer.shadowMapEnabled = true;

        // trackballControl = new THREE.TrackballControls(camera);
        orbitControl = new THREE.OrbitControls(camera);

        // render all this
        document.getElementById('my-webgl-output').appendChild(renderer.domElement)
        renderScene()
    }

    // declared functions --------------------------------------------------------------------------------------------------
    function createRedStripe(
        w, h,
        wseg, hseg,
        px, py, pz,
        rx, ry, rz
    ) {
        let planeGeometry = new THREE.PlaneGeometry(w, h, wseg, hseg);
        let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
        let redStripe = new THREE.Mesh(planeGeometry, planeMaterial);
        redStripe.position.set(px, py, pz)
        redStripe.rotation.set(rx, ry, rz);
        redStripe.receiveShadow = true;
        redStripe.castShadow = true;
        return redStripe;
    }

    function createBox(
        w = 20,
        h = 20,
        d = 20,
        col = 0xff0000,
        px = 10,
        py = 4,
        pz = 2,
        sx = 1,
        sy = 1,
        sz = 1,
        rx = 0,
        ry = 0,
        rz = 0) {
        // create a box
        let boxGeometry = new THREE.BoxGeometry(w, h, d)
        let boxMaterial = new THREE.MeshLambertMaterial()
        boxMaterial.color = new THREE.Color(col);

        let box = new THREE.Mesh(boxGeometry, boxMaterial)

        //position the box
        box.position.x = px
        box.position.y = py
        box.position.z = pz

        box.scale.x = sx
        box.scale.y = sy
        box.scale.z = sz

        // rotation in radians, not degrees
        box.rotation.x = rx
        box.rotation.y = ry
        box.rotation.z = rz

        box.castShadow = true;
        box.receiveShadow = true;

        return box
    }

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
        let sphereMaterial = new THREE.MeshLambertMaterial({
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

        sphere.castShadow = true;
        sphere.receiveShadow = true;

        return sphere
    }

    function degreeToRadians(angle_in_deg) {
        return angle_in_deg / 180 * Math.PI;
    }

    function initStats() {
        let stats = new Stats();
        // frameCounter = 0
        stats.setMode(0); //0=> fps, 1=> ms/frame
        document.getElementById('my-stats-output').appendChild(stats.domElement);
        return stats;
    }

    function renderScene() {
        stats.update();
        // trackballControl.update();
        orbitControl.update();
        requestAnimationFrame(renderScene)
        renderer.render(scene, camera)
    }
}

// entry point
window.onload = init()