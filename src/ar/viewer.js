window.loadARScene = async function(modeloURL) {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.querySelector("#ar-container"),
    imageTargetSrc: "/assets/targets.mind",
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);

  // Luz básica para que el modelo no se vea oscuro
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loader = new THREE.GLTFLoader();
  loader.load(modeloURL,
    (gltf) => {
      const model = gltf.scene;

      // Mejora para asegurar visibilidad del modelo
      model.traverse((child) => {
        if (child.isMesh) {
          child.material.side = THREE.DoubleSide;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      model.scale.set(0.5, 0.5, 0.5);
      model.position.set(0, 0, 0);

      anchor.group.add(model);
    },
    undefined,
    (error) => {
      console.error("Error cargando modelo GLB:", error);
    }
  );

  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
}
