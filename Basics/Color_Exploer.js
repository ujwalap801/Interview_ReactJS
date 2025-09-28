import React, { useState } from 'react';
import { colorNameToHex } from "./colorData";
import "./styles.css";

const ColorExplorer = () => {

  const [color, setColor] = useState('');


const [selected, setSelected] = useState({name:'', hex:''})

  const handleSubmit = () => {
    const hex = colorNameToHex(color);
    if (hex) {
      setSelected({name:color, hex})
    } else {
      setSelected({name:"Sorry, I couldn't recognize that color", hex:''})
    }
  }


  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          value={color}
          onChange={(e)=>setColor(e.target.value)}
          placeholder="Type a color name e.g. lavender"
        />
        <button data-testid="search-button" onClick={handleSubmit}>
          🔍
        </button>
      </div>
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
          data-testid="color-preview"
            style={{backgroundColor:selected.name}}
          ></div>
          <p data-testid="color-name">
          <strong>Name:{selected.name}</strong> 
          </p>
          <p data-testid="color-hex">
          <strong>Hex:{selected.hex}</strong> 
          </p>
        </div>

    </div>
  );
};

export default ColorExplorer;



const colors = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
}

export const colorNameToHex=(name)=>
{
    return colors[name.replace(/\s+/g, "").toLowerCase()]
}