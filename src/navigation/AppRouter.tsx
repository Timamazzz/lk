import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import NotFound from '../screens/NotFound/NotFound';
import Header from "../components/project/header/header";
import Login from "../screens/Login/Login";
import Profile from "../screens/Profile/Profile";
import Footer from "../components/project/footer/footer";
import Payment from "../screens/Payment/Payment";
import QR from "../screens/QR/QR";

interface RouterProps {
    isAuthorized: boolean;
    setIsAuthorized: (isAuthorized: boolean) => void;
    isMobile: boolean;
}

function AppRouter({ isAuthorized, setIsAuthorized, isMobile }: RouterProps) {
    return (
        <Router>
            <div>
                {isAuthorized && <Header setIsAuthorized={setIsAuthorized} isMobile={isMobile} /> }
                <Routes>
                    {isAuthorized ? (
                        <>
                            <Route path="/profile" element={<div><Profile  /></div>} />
                            <Route path="/profile/payment/:patentNumber" element={<div><Payment  /></div>} />
                            <Route path="/profile/payment/:patentNumber/:price" element={<div><QR  /></div>} />
                            <Route path="/" element={<Navigate to="/profile" replace />} />
                            <Route path="/login" element={<Navigate to="/profile" replace />} />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<div><Login  setIsAuthorized={setIsAuthorized}/></div>} />
                            <Route path="/" element={<Navigate to="/login" replace />} />
                            <Route path="/profile" element={<Navigate to="/login" replace />} />
                            <Route path="/profile/*" element={<Navigate to="/login" replace />} />
                        </>
                    )}
                    <Route path="*" element={<NotFound isAuthorized={isAuthorized} />} />
                </Routes>
                {isAuthorized && <Footer/> }
            </div>
        </Router>
    );
}

export default AppRouter;
