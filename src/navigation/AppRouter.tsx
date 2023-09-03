import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../screens/NotFound/NotFound';
import Header from "../components/project/header/header";
import Login from "../screens/Login/Login";

interface RouterProps {
    isAuthorized: boolean;
    setIsAuthorized: (isAuthorized: boolean) => void;
    isMobile: boolean;
}

function AppRouter({ isAuthorized, setIsAuthorized, isMobile }: RouterProps) {
    return (
        <Router>
            <div>
                <Routes>
                    {isAuthorized ? (
                        <>
                            <Route path="/profile" element={<div>Profile</div>} />
                            <Route path="/" element={<Navigate to="/profile" replace />} />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<div><Login /></div>} />
                            <Route path="/" element={<Navigate to="/login" replace />} />
                        </>
                    )}
                    <Route path="*" element={<NotFound isAuthorized={isAuthorized} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
