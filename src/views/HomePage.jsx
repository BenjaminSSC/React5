import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';


const Home = () => {
 const [pizzas, setPizzas] = useState([])

 const getPizzas = async () => {
  const res = await fetch('https://api-pizza-h857.onrender.com/api/pizzas')
  const pizza = await res.json()

  setPizzas(pizza)
 }
 useEffect(()=>{
  getPizzas()
 },[])

  return (
    <div className="d-flex flex-wrap justify-content-around">
      <div>
        <Header />
      </div>
      {pizzas.map((pizza, index)=> (
      <CardPizza
        key={index}
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
      />))}
      
    </div>
  );
};

export default Home;