import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ar/viewer.js'; // Asegúrate de importar después de definir el contenedor

const productos = {
  1: {
    nombre: 'Double Whopper',
    descripcion: 'Combo con hamburguesa doble, queso y papas',
    modelo: '/assets/double_whopper_hamburger_value_meal.glb' // Usa tu nombre exacto
  },
  2: {
    nombre: 'Pizza Margarita',
    descripcion: 'Salsa de tomate, mozzarella fresca y albahaca',
    modelo: '/assets/pizza.glb'
  },
  3: {
    nombre: 'Ensalada Fresca',
    descripcion: 'Verduras orgánicas con aderezo cítrico',
    modelo: '/assets/ensalada.glb'
  }
};

const ProductAR = () => {
  const { id } = useParams();
  const plato = productos[id];

  useEffect(() => {
    // Esperamos a que el visor AR cargue luego del render
    setTimeout(() => {
      if (window.loadARScene) window.loadARScene(plato.modelo);
    }, 500);
  }, [plato]);

  return (
    <div className="product-ar">
      <h1>{plato.nombre}</h1>
      <p>{plato.descripcion}</p>
      <div id="ar-container"></div>
    </div>
  );
};

export default ProductAR;
