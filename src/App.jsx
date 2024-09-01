import React from 'react';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import CartPage from './views/CartPage';
import PizzaPage from './views/PizzaPage';
import ProfilePage from './views/ProfilePage';
import NotFound from './views/NotFound';

function App() {
  
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/pizza/p001' element={<PizzaPage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/*' element={<NotFound />}></Route>{/* Sé que en el desafío pedía explicitamente usar el '404' pero siento que el '*' es más global */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// import Home from './components/Home';
// import Cart from './components/Cart';
// import Register from './components/Register';
// import Login from './components/Login';
// import Pizza from './components/Pizza';
//const [showLogin, setShowLogin] = useState(false);
{/* <Route path='/Login' element={<Login />}></Route>
<Route path='/Register' element={<Register />}></Route>
<Route path='/*' element={<NotFound />}></Route> */}
{/* <Pizza /> */}
{/* <Home /> */}
{/* <Cart /> */}
{/* {showLogin ? <Login /> : <Register setShowLogin={setShowLogin} />} */}