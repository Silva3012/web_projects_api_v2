import React from 'react';
import './App.css';
import WebProjectList from './components/WebProjectList';
import AddProject from './components/AddProject';
import ModifyProject from './components/ModifyProject';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<WebProjectList />} />
        <Route path="/add" element={<AddProject />} />
        <Route path="/api/:id" element={<ModifyProject />} />
      </Routes>
    </Router>
      
    </div>
  );
}

