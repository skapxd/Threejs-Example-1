// @ts-check
import * as THREE from "three";
import { WEBGL } from "./WEBGL";

export function line() {
    const app = document.querySelector("#app");
    if (!app) throw new Error("Element app don`t exist");

    // En caso de que el navegador no sea compatible con WenGL, muestra este mensaje
    if (!WEBGL.isWebGLAvailable()) {
        const warning = WEBGL.getWebGLErrorMessage();
        app.appendChild(warning);
    }

    const scene = new THREE.Scene();
    const render = new THREE.WebGLRenderer();

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    render.setSize(window.innerWidth, window.innerHeight);
    app.appendChild(render.domElement);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    scene.add(line);

    function animate() {
        requestAnimationFrame(animate);
        render.render(scene, camera);
    }

    animate();
}