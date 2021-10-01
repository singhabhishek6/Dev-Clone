import { createContext, useReducer,useEffect, useContext, useState } from 'react';
import './App.css';
import { Routes } from './Routes/Routes';
import {initialState,reducer} from '../src/reducer/useReducer';
import { Navbar } from './Components/Navbar/Navbar';
export const userContext = createContext(null);

function App() {

  const [state, setState] = useState({ status: false });
  
  return (
    <div className="theme">
      <userContext.Provider value={{ state, setState }}>
        <Routes />
        </userContext.Provider>
    </div>
  );
}

export default App;
