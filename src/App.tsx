import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductList />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
