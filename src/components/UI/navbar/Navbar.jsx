import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import NavbarLogo from './navbar logo/NavbarLogo';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = event => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/'><NavbarLogo /></Link>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
                <div className='authLinks'>
                    <Link to='/login'>Login</Link>
                    <Link to='/' onClick={logout}>Logout</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;