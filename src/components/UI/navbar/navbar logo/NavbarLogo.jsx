import React from 'react';
import logoStyle from './NavbarLogo.module.css'
import logo from './logo.png'

const NavbarLogo = () => {
    return (
        <img className={logoStyle.image} src={logo} alt='logo'/>
    );
};

export default NavbarLogo;