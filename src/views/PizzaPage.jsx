import { useEffect, useState } from "react"
import React from 'react'
import { Link } from 'react-router-dom';

const Pizza = () => {
 const [pizza, setPizza] = useState({})

 const getPizzas = async () => {
  const res = await fetch('https://api-pizza-h857.onrender.com/api/pizzas/p001')
  const pizza = await res.json()

  setPizza(pizza)
}
 useEffect(()=>{
  getPizzas()
},[])

 return (
    <div id={pizza.id}>
      <h1>{pizza.name}</h1>
      <p>Precio: ${pizza.price}</p>
      <img src={pizza.img} alt="" />
      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients?.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>
        })}
      </ul>
      <h4>Descripción:</h4>
      <p>{pizza.desc}</p>
      <Link to='/' className="text-decoration-none">
            Haz click aquí para volver a la página principal
          </Link> 
    </div>
  )
}

export default Pizza