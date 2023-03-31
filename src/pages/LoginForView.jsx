import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';

const LoginForView = () => {
    return (
        <div style={{margin: '0 auto', maxWidth: 1200}}>
            <h1>Login for view this page</h1>
            <div>
                <MyButton><Link style={{textDecoration: 'none'}} to={'/login'}>LOGIN ▶️</Link></MyButton>
            </div>
        </div>
    );
};

export default LoginForView;