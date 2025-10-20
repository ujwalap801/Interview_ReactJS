import React, { useState } from 'react';
import "./styles.css"; 
import recipeData from './recipesData'

const RecipeFilterApp = () => {
  // const [data, setData] = useState(recipeData);
  const [minRating, setMinRating] = useState(4);

  const [cart, setCart]
    = useState([]);
    
  const filterRec = recipeData.filter(r => r.rating >= minRating)

  const addtoCart = (r) => {

    setCart((prevCart) => [...prevCart, r])
  }


  const totalCartItems = cart.length;

  const averageRating =
    filterRec.length === 0
      ? 0
      : filterRec.reduce((sum, r) => sum + r.rating, 0) / filterRec.length;

      
  return (
    <div>
      <h1>🍽️ Recipe Explorer</h1>

      <div>
        <label>Filter by Rating</label>
        <select value={minRating} onChange={(e)=>setMinRating(parseFloat(e.target.value))}>
          <option value={4.0} >4.0+</option>
          <option value={4.3} >4.3+</option>
          <option value={4.5} >4.5+</option>
          <option value={4.7} >4.7+</option>
          <option value={4.9} >4.9+</option>
        
        </select>

        <h3>Cart Items :{totalCartItems}</h3>

        <h2>Avergae Rating:{averageRating.toFixed(2)} ({filterRec.length}{""} receipes)</h2>

      </div>
      <div >
        {filterRec.map(r =>

        (
          <div className="card">
            <img src={r.image} style={{width:'200px', height:'200px', border:'2px solid gray'}} />
            <h4>{r.name}</h4>
            <p>{r.cuisine}</p>
            <p>Rating: {r.rating} ({r.reviewCount} reviews)</p>
  <button style={{backgroundColor:'green', color:'white'}} onClick={()=>addtoCart(r)}>Add to Cart</button>

          </div>
))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
