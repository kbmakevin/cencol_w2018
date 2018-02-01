(function () {
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
        return { r, g, b }
    }

    // returns boolean whether to generate wireframe or not, 50/50 chance
    function generateWireFrame() {
        return Math.random() > 0.5
    }

    function createBox(w = 20, h = 20, d = 20, col = 0x7777ff, wf = true, x = 10, y = 4, z = 2, sx = 1, sy = 1, sz = 1, rx, ry, rz) {
        // create a box
        let boxGeometry = new THREE.BoxGeometry(w, h, d)
        let boxMaterial = new THREE.MeshBasicMaterial({
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

    function init() {
        var scene = new THREE.Scene()
        var camera = new THREE.PerspectiveCamera(50, 4 / 3, 0.1, 1000)
        camera.position.x = 30
        camera.position.y = 50
        camera.position.z = -30

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

            // console.log(generateRandomColor())
            let randomColorObj = generateRandomColor()
            let colorR = randomColorObj.r
            let colorG = randomColorObj.g
            let colorB = randomColorObj.b
            let genColor = "rgb(" + colorR + "," + colorG + "," + colorB + ")"
            // let genColor = new THREE.Color(colorR, colorG, colorB)
            console.log(genColor)

            let sphere = createSphere(r, w, h, genColor, generateWireFrame(), px, py, pz, sx, sy, sz)
            // let sphere = createSphere(r, 15, 15, 0xff0000, true, px, py, pz, sx, sy, sz)
            scene.add(sphere)
            // console.log('sphere color is: ' + sphere.material.vertexColors)
            // scene.add(createBox())
        }

        // generate random boxes
        for (let index = 0; index < 15; index++) {
            let dx = 0.1 * Math.random() * 2
            let dy = 0.1 * Math.random() * 2
            let dz = 0.1 * Math.random() * 2

            let px = -20 + Math.random() * 40
            let py = -5 + Math.random() * 20
            let pz = -10 + Math.random() * 40

            let sx = 25 * Math.random() * 4
            let sy = 25 * Math.random() * 4
            let sz = 25 * Math.random() * 4

            let rx = Math.random() * 0.785398
            let ry = Math.random() * 0.785398
            let rz = Math.random() * 0.785398

            let randomColorObj = generateRandomColor()
            let colorR = randomColorObj.r
            let colorG = randomColorObj.g
            let colorB = randomColorObj.b
            let genColor = "rgb(" + colorR + "," + colorG + "," + colorB + ")"

            let box = createBox(dx, dy, dz, genColor, generateWireFrame(), px, py, pz, sx, sy, sz, rx, ry, rz)
            // createSphere(r, 15, 15, genColor, false, px, py, pz, sx, sy, sz)
            scene.add(box)
        }

        var renderer = new THREE.WebGLRenderer()
        // renderer.setClearColor()
        renderer.setClearColor(new THREE.Color(0xEEFFEE))
        renderer.setSize(window.innerWidth, window.innerHeight)

        document.getElementById('my-webgl-output').appendChild(renderer.domElement)
        renderer.render(scene, camera)
    }

    // entry point
    init()
})()