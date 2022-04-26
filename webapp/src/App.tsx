import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Tickets from './components/Tickets';
import TicketsDetail from './components/TicketsDetail';
import Purchase from './components/Purchase';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/:id" element={<TicketsDetail />} /> 
        <Route path="purchase" element={<Purchase />} />
      </Routes>
    </Router>
    );
}

export default App;
