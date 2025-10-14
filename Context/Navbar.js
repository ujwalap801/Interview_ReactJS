import React, { useContext } from 'react';
import { UserContext } from './userContext';

const Navbar = () => {

  const { isLoggedIn, login, logout } = useContext(UserContext);


  return (
    <nav>
      <h1>App</h1>

      <div>
        {!isLoggedIn ? (<button onClick={login}>Login</button>) :

          <>
          <span>Welcome User!</span>
            <button onClick="logout">Logout</button>
        </>
      
    
      }

      </div>
    </nav>
  );
};

export default Navbar;
