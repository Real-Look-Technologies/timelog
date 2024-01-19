import React from 'react';
import logo from '../../resources/logo.png';
import './style.css';

export default function Header() {
    return (
        <div>
            <header className='full-header'>
                <nav className='navbar' role='navigation'>
                    <button className='logo-button'>
                        <img src={logo} alt='Logo da TimeLog' className='logo-img'/>
                    </button>
                    <div className='navbar-content'>
                        <a href='#about' className='nav-link'>SOBRE NÓS</a>
                        <a href='#solutions' className='nav-link'>SOLUÇÕES</a>
                        <a href='#contact' className='nav-link'>CONTATO</a>
                        <a href='#client-area' className='nav-link'>ÁREA DO CLIENTE</a>
                        <a href='#hire-us' className='nav-link hire-us'>COTE AGORA</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}