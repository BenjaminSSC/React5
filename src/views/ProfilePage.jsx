import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const UserProfile = () => {
  // Datos ficticios para el ejemplo
  const user = {
    profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
    email: 'user@example.com',
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Img variant="top" src={user.profilePicture} />
        <Card.Body>
          <Card.Title>Perfil de Usuario</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="primary" >Cerrar Sesión</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserProfile;
