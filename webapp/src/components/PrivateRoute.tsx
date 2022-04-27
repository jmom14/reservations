import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../types';

const PrivateRoute = ({Component}: any) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.token !== null);
    return isAuthenticated ? <Component /> :  <Navigate to="/login" />;
};

export default PrivateRoute;
