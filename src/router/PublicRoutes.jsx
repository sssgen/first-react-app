import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import About from '../pages/About';
import Error from '../pages/ErrorPage';
import HelloPage from '../pages/HelloPage'
import LoginForView from '../pages/LoginForView';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HelloPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<LoginForView />} />
            <Route path='/posts/:id' element={<LoginForView />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    );
};

export default PublicRoutes;