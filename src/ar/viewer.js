import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

window.load3DViewer = function(modeloURL) {
  const container = document.querySelector("#viewer-container");
  container.innerHTML = "";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Luz
  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));

  const loader = new GLTFLoader();
  loader.load(modeloURL, (gltf) => {
    const model = gltf.scene;

    model.scale.set(1, 1, 1);
    model.position.set(0, -0.5, 0);

    model.traverse((child) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide;
        if (!child.material.color) {
          child.material.color = new THREE.Color(0xff9900);
        }
      }
    });

    scene.add(model);
  }, undefined, (err) => {
    console.error("❌ Error cargando modelo:", err);
  });

  camera.position.z = 2;

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
};
