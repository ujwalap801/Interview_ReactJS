import React, { useState } from 'react';
import './styles.css'
function ChipsInput() {
  const [inputText, setInputText] = useState('');

const [chips,setChips] = useState(["hi","hello"])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputText.trim() !=="") {
      setChips((prevChips) => [...prevChips, inputText])
        
        setInputText('')
    }
  }

  const handleChipDelete = (index) => {
    const copyChips = [...chips];
    copyChips.splice(index, 1);
   setChips(copyChips)
  }


  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown ={(e)=>handleKeyDown(e)}

        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />

     
      <div style={{display:'flex'}}> {chips.map((chip, index) =>
        <div style={{backgroundColor:'grey',margin:'10px' , padding:'5px', color:'white'}}>   {chip}

<button style={{margin:'10px', color:'red'}} onClick={(index) => handleChipDelete(index)}>X</button>
        </div>
     
      )}</div>
    </div>
  );
}

export default ChipsInput;