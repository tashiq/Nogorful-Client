import React from 'react';
import { Navigate, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
const PrivateRoute = () => {
    return (
        function PrivateRoute({ children, ...rest }) {
            const { user } = useAuth();
            return (
                <Route
                    {...rest}
                    render={() => user.email
                        ? children
                        : <Navigate to="/login" />
                    }
                />
            );
        }

    );
};

export default PrivateRoute;