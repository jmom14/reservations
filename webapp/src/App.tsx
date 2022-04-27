import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Tickets from './components/Tickets';
import TicketsDetail from './components/TicketsDetail';
import Purchase from './components/Purchase';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { RootState } from './types';


function App() {
  const token = useSelector((state: RootState) => state.auth.token);

  console.log(token);

  if(token !== null){
    <Navigate to="/tickets" />
  }

  return(
    <Router>
      <Routes>
        <Route path="/tickets" element={<PrivateRoute component={<Tickets />} />} />
        <Route path="/tickets/:id" element={<TicketsDetail />} /> 
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
    );
}

export default App;
