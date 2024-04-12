import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import Result from './components/Result/Result.js'; 
import { DataProvider } from './DataProvider.js';
import React from 'react';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <SearchBar/>
        <Result />
      </div>
    </DataProvider>

  );
}

export default App;
