import React from 'react'
import logo from './public/logo.png'
import './style.css'
export default function Header(){
    return(
    <div>
        <header className='full-header'>
            <nav className='navbar'>
                <button className='logo'>
                    <img src={logo} alt='Imagem do logo da empresa timelog' className='logo-img'/>
                </button>
                <div className='content-navbar'>
                    <a className='about-us'>SOBRE NÓS</a>
                    <a className='solutions'>SOLUÇÕES</a>
                    <a className='contact'>CONTATO</a>
                    <a className='client-area'>ÁREA DO CLIENTE</a>
                    <a className='hire-us'>COTE AGORA</a>
                </div>
            </nav>
        </header>
    </div>
    )
}