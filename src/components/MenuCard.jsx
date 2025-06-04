import React from 'react';

const MenuCard = ({ item, onClick }) => {
  return (
    <div className="menu-card" onClick={onClick}>
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
    </div>
  );
};

export default MenuCard;
