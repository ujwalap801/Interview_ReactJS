import React, { useState } from 'react';
import "./styles.css";

import { Menu } from 'lucide-react';

function Sidebar() {

  const [open, setOpen] = useState(false);


  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}
    data-testid ="sidebar">

      <button className="toggle-btn"
      data-testid="btn-toggle"
        onClick={() => setOpen(!open)}>{/* Icon goes here */} <Menu size={24}  data-testid="icon-menu"/></button>


      {open && (
        <nav className="nav-menu" data-testid='nav-menu'>
          <ul className="nav-list">
            <li className="nav-item" data-testid="nav-item-home">Home</li>
            <li className="nav-item"
            data-testid="nav-item-about"
            >About</li>
            <li className="nav-item"
            data-testid="nav-item-services"
            >Services</li>
            <li className="nav-item"

              data-testid="nav-item-contact">Contact</li>
          </ul>
        </nav>)}
    </div>
  );
}

export default Sidebar;
