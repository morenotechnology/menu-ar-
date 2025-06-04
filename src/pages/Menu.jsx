import React from 'react';
import MenuCard from '../components/MenuCard';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

const productos = {
  1: {
    nombre: 'Double Whopper',
    descripcion: 'Combo con hamburguesa doble, queso y papas',
    modelo: '/assets/double_whopper_hamburger_value_meal.glb' // ✅ nombre exacto
  }
};


  return (
    <div className="menu-screen">
      <h1>Nuestro Menú</h1>
      <div className="menu-list">
        {productos.map((item) => (
          <MenuCard key={item.id} item={item} onClick={() => navigate(`/product/${item.id}`)} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
