import React from "react";
import logo from '../../resources/whats.png';
import './WhatsappButton.css'

export default function WhatsappButton(){
    return(
    <div className="whatsapp">
        <img src={logo} width="50" alt="Icone do whatsapp" title="Fale conosco pelo WhatsApp"/>
    </div>   
    );
};