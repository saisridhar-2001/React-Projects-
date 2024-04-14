import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home/Home.js';
import Data from './components/Data/Data.js';
import DataTable from './components/Data/data table';



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/data table" element={<DataTable />}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;