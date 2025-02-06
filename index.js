// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 100);
camera.position.z = 4;
scene.add(camera);

// mesh => geometry and material
const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(box, material);
scene.add(mesh);

mesh.position.z = -2;

// renderer
const canvas = document.getElementById("draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// request animation frame
function animate() {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.40;
    mesh.rotation.z += 0.01;
}
animate();
