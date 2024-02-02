import React, { useState } from 'react';
import './UserLogin.css'
import logo from '../../../resources/logo.png'

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para validar ou enviar o formulário
    console.log('Email:', email, 'Senha:', password);
  };

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <img src={logo} alt="logo da empresa" />
            <div className='input-container'>
                <label htmlFor="email">E-mail</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className='input-container'>
                <label htmlFor="password">Senha</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>
  );
}

export default UserLogin;