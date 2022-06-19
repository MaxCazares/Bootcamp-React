import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginScreen from '../components/Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/login" element={    
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                }/>

                {/* <Route path="/*" element={<DashboardRoutes />} /> */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes/>
                    </PrivateRoute>
                }/>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;