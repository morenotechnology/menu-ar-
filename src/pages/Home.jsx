import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      <h1>Explora Nuestro Menú</h1>
      <p>Escoge tu plato favorito y míralo en AR sobre tu mesa 🍽️</p>
      <button onClick={() => navigate('/menu')}>Ver Menú</button>
    </div>
  );
};

export default Home;
