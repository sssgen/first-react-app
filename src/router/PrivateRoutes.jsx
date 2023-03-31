import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/ErrorPage';
import HelloPage from '../pages/HelloPage';
import PostPage from '../pages/PostPage';
import Welcome from '../pages/Welcome';

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HelloPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Welcome />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<PostPage />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    );
};

export default PrivateRoutes;