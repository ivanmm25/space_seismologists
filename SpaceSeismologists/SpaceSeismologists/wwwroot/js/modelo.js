
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const canvas = document.getElementById('MoonQuakeMapCanvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);
//renderer.domElement.id = 'MoonQuakeMapCanvas';

//const geometry = new THREE.BoxGeometry(1, 1, 1);
//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

//PRUEBA LUNA
const geometry = new THREE.SphereGeometry(10, 32, 16);
//geometry.add(pivotPoint);

//Texturas Luna
const textureAlbedo = new THREE.TextureLoader().load("./Engine/Textures/Moon_Albedo_1024.jpg");
const textureDisplacement = new THREE.TextureLoader().load("./Engine/Textures/Moon_Displacement_1024.jpg");
//const material = new THREE.MeshStandardMaterial({ map: textureAlbedo, displacementMap: textureDisplacement })

//Luz
const light = new THREE.AmbientLight(0x404040, 2); // soft white light
scene.add(light);

//Material Luna
const material = new THREE.MeshStandardMaterial({ map: textureAlbedo, displacementMap: textureDisplacement });
material.displacementScale = 0.02;

//Luna
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 20;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

//Prueba cubo
const cuboGeometry = new THREE.SphereGeometry(0.1, 32, 16);
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cuboGeometry, material2);

//Skybox


//function latitudLongitudToVector3() {

//}

scene.add(cube);
cube.position.set(5.9272, -2.9904, 7.4783)


//CONTROLES MANUALES
const isMouseDown = false;
const mouseInfo = {
	isDragging: false,
	lastMouseDown: {},
	movePath: { x: 0, y: 0 },
}

$('#MoonQuakeMapCanvas').on('mousedown', (e) => {
	mouseInfo.isDragging = true;
	mouseInfo.lastMouseDown = { x: e.clientX, y: e.clientY, date: Date.now() }
	mouseInfo.movePath = { x: 0, y: 0 }
});


$('#MoonQuakeMapCanvas').on('mousemove', (e) => {
	if (mouseInfo.isDragging) {
		mouseInfo.movePath.x = e.clientX - mouseInfo.lastMouseDown.x;
		mouseInfo.movePath.y = e.clientY - mouseInfo.lastMouseDown.y;
		console.log(mouseInfo.movePath.x + ' ' +mouseInfo.movePath.y);
    }
});

$(document).on('mouseup', (e) => {
	mouseInfo.isDragging = false;
	mouseInfo.movePath = { x: 0, y: 0 }
});



$(document).ready(() => {

});

function animate() {

	const auxVector = new THREE.Vector3(mouseInfo.movePath.x, mouseInfo.movePath.y, 0)

	//camera.lookAt(sphere.position);
	//camera.translateX(0.0001 * auxVector.x);
	//camera.translateY(0.0001 * -auxVector.y);
	controls.update();
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();