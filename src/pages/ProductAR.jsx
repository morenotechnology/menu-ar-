import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productos = {
  1: {
    nombre: 'Double Whopper',
    descripcion: 'Combo con hamburguesa doble, queso y papas',
    modelo: '/assets/double_whopper_hamburger_value_meal.glb'
  }
};

const ProductAR = () => {
  const { id } = useParams();
  const plato = productos[id];
  const [modo, setModo] = useState(null); // "3d" o "ar"

  useEffect(() => {
    if (modo === 'ar' && window.loadARScene) {
      setTimeout(() => window.loadARScene(plato.modelo), 500);
    }

    if (modo === '3d' && window.load3DViewer) {
      setTimeout(() => window.load3DViewer(plato.modelo), 500);
    }
  }, [modo, plato]);

  return (
    <div className="product-ar">
      <h1>{plato.nombre}</h1>
      <p>{plato.descripcion}</p>

      {!modo && (
        <div className="btns">
          <button onClick={() => setModo('3d')}>Ver modelo 3D</button>
          <button onClick={() => setModo('ar')}>Ver en AR</button>
        </div>
      )}

      <div id="viewer-container" style={{ width: '100%', height: '80vh' }}></div>
    </div>
  );
};

export default ProductAR;
