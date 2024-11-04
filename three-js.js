var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 0.1, 10000);
camera.position.z = 50;
scene.add(camera);

var boxGeometry = new THREE.BoxGeometry(20, 20, 20); // КУБ
var icosahedronGeometry = new THREE.IcosahedronGeometry(15, 1); // ПОЛГОНАЛЬНАЯ СФЕРА
var octahedronGeometry = new THREE.OctahedronGeometry(15, 0); // РОМБ???
var torusKnotGeometry = new THREE.TorusKnotGeometry(10, 1.5, 160, 10, 3, 5); // ТОР-УЗЕЛ
var sphereGeometry = new THREE.SphereGeometry(15, 32, 16); // СФЕРА
var sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0xcccccc,
  wireframe: true,
  transparent: true,
  opacity: 0.3,
});

var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var rand = randomNumber(0, 50);

if (rand >= 0 && rand <= 10) {
  var shape = new THREE.Mesh(boxGeometry, sphereMaterial);
} else if (rand >= 11 && rand <= 20) {
  var shape = new THREE.Mesh(icosahedronGeometry, sphereMaterial);
} else if (rand >= 21 && rand <= 30) {
  var shape = new THREE.Mesh(octahedronGeometry, sphereMaterial);
} else if (rand >= 31 && rand <= 40) {
  var shape = new THREE.Mesh(torusKnotGeometry, sphereMaterial);
} else if (rand >= 41 && rand <= 50) {
  var shape = new THREE.Mesh(sphereGeometry, sphereMaterial);
}

shape.rotation.set(0.1, 0.2, 0);
scene.add(shape);

var t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  shape.rotation.y += 0.01;
  renderer.render(scene, camera);
}
render();

// RESIZE THREE.JS LANDSCAPE WHILE RESIZING WINDOW

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
