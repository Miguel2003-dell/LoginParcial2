import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Alumnos from './components/Alumnos/Alumnos';
import Conceptos from './components/Conceptos/Conceptos';
import Calculadoras from './components/Calculadoras/Calculadoras';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/conceptos" element={<Conceptos />} />
          <Route path="/calculadoras" element={<Calculadoras />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
