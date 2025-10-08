import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import "./styles.css";

function TogglePassword() {

  const [pass, setPass] = useState('');
  const [eye, setEye] = useState(false);

  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={eye?'text':'password'}
          id="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
        />

        <span
          className="icon"
          data-testid="toggle-icon"
          onClick={()=>setEye(!eye)}
        >
          {eye ? (<Eye size={18} />) : (<EyeOff size={18} />)}
         
        </span>

      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {eye?'Password Visible':'Password Hidden'}
      </span>
    </div>
  );
}

export default TogglePassword;
