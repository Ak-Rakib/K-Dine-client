// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from "../../src/Context/ContextProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    // eslint-disable-next-line no-undef
    const { user, loader } = useContext(AuthProvider)
    const location = useLocation();

    if(loader){
        return <div className='text-center'>
            <h1>Loading.....</h1>
        </div>
    }

    if(!user){
       return <Navigate to='/login'  state={{from: location}} replace></Navigate>
    }
    return children;
    
};

export default PrivateRoute;