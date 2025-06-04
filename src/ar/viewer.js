window.loadARScene = async function(modeloURL) {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.querySelector("#viewer-container"),
    imageTargetSrc: "/assets/targets.mind",
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loader = new THREE.GLTFLoader();
  loader.load(modeloURL, (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.3, 0.3, 0.3);
    model.traverse((c) => {
      if (c.isMesh) c.material.side = THREE.DoubleSide;
    });
    anchor.group.add(model);
  });

  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
};

window.load3DViewer = function(modeloURL) {
  const container = document.querySelector("#viewer-container");
  container.innerHTML = ""; // limpiar antes

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  const loader = new THREE.GLTFLoader();
  loader.load(modeloURL, (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.3, 0.3, 0.3);
    model.position.set(0, -0.5, 0);
    scene.add(model);
  });

  camera.position.z = 2;

  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
};
