import React from 'react';
import MenuCard from '../components/MenuCard';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const productos = [
    {
      id: 1,
      nombre: 'Hamburguesa Clásica',
      descripcion: 'Pan artesanal, carne 100%, queso y vegetales',
      imagen: '/assets/hamburguesa.jpg'
    },
    {
      id: 2,
      nombre: 'Pizza Margarita',
      descripcion: 'Salsa de tomate, mozzarella fresca y albahaca',
      imagen: '/assets/pizza.jpg'
    },
    {
      id: 3,
      nombre: 'Ensalada Fresca',
      descripcion: 'Verduras orgánicas con aderezo cítrico',
      imagen: '/assets/ensalada.jpg'
    }
  ];

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
