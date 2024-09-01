import React from 'react';
import { Container } from 'react-bootstrap';
import backgroundImage from '../assets/Header.jpg'; 

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '30vh', width: '100vw', position: 'relative', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '4rem',}}>
        <Container className="text-center">
          <h1><strong>¡Pizzeria Mamma Mía!</strong></h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          <hr />
        </Container>
      </div>
    </div>
  );
}

export default Header;

