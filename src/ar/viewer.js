window.loadARScene = async function () {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.querySelector("#ar-container"),
    imageTargetSrc: "/assets/targets.mind",
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);

  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const plane = new THREE.Mesh(geometry, material);
  anchor.group.add(plane);

  try {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  } catch (e) {
    console.error("ERROR INICIANDO MINDAR:", e);
    alert("No se pudo acceder a la cámara. Verifica permisos o usa HTTPS.");
  }
};