// @ts-check
import * as THREE from "three";
import "./style.css";
import { WEBGL } from "./WEBGL";

function main() {
    const app = document.querySelector("#app");
    if (!app) throw new Error("Element app don`t exist");

    // En caso de que el navegador no sea compatible con WenGL, muestra este mensaje
    if (!WEBGL.isWebGLAvailable()) {
        const warning = WEBGL.getWebGLErrorMessage();
        app.appendChild(warning);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    const render = new THREE.WebGLRenderer();
    render.setSize(window.innerWidth, window.innerHeight);
    app.appendChild(render.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        render.render(scene, camera);
    }

    animate();
}

main();