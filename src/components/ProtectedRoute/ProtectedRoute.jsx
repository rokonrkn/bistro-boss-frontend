import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const {loginUser} = useContext(AuthContext)

    if(!loginUser){
        return <Navigate to="/login" replace />;
    }
    return children
};

export default ProtectedRoute;