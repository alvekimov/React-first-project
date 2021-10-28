import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <a href="/"><img src='https://w1.pngwing.com/pngs/455/631/png-transparent-graphy-logo-bonfire-campfire-orange-symbol.png' alt='logo'></img></a>
        </header>
    );
}

export default Header;