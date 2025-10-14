import React from 'react';
import { UserProvider } from './UserProvider';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    </UserProvider>
  );
};

export default App;
