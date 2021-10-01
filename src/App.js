import { createContext ,useEffect, useContext, useState } from 'react';
import './App.css';
import { Routes } from './Routes/Routes';
import { Navbar } from './Components/Navbar/Navbar';
export const userContext = createContext(null);

function App() {

  const [state, setState] = useState({ status: false ,user:{}});
  
  return (
    <div className="theme">
      <userContext.Provider value={{ state, setState }}>
        <Routes />
        </userContext.Provider>
    </div>
  );
}

export default App;
