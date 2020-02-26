//Variables for setup
let container;
let camera;
let renderer;
let scene;
let castle;

function init(){
    container = document.querySelector('.scene');

    //Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 600;

    //Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-1, 3, 15);

    const ambient = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xfffae8, 3);
    light.position.set(10, 10, 10);
    scene.add(light);

    //Renderer setup
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //Load Model
    /**let loader = new THREE.GLTFLoader();
    loader.load('./house/scene.gltf', function(gltf){
       scene.add(gltf.scene); 
        castle = gltf.scene.children[0];
       animate();
    });**/

    let loader = new THREE.GLTFLoader();
    loader.load('./fisherman/scene.gltf', function(gltf){
       scene.add(gltf.scene); 
        castle = gltf.scene.children[0];
       animate();
    });
}

function animate(){
    requestAnimationFrame(animate);
    castle.rotation.z += 0.005;
    renderer.render(scene, camera);
}

function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

init();

window.addEventListener("resize", onWindowResize);