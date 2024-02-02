import React from "react";
import './UserLogin.css';

export default function UserLogin(){
    return(
        <div className="LoginScreen">
            <input type='logtext' placeholder="Usuário *"/>
            <input type='logtext' placeholder="Senha *"/>
            <input className='logbutton' type='submit' value='Entrar'/>
        </div>
    )
}