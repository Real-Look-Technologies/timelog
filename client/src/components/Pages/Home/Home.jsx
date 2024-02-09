import React, { useState } from "react";
import './Home.css'
import Slider from '../../ImgSlider/Slider.jsx'
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
import WhatsappButton from "../../Whatsapp/WhatsappButton.jsx";



export default function Home(){
    return(
        <div className="Homepage">
            <Header/>
            <Slider/>
            <Footer/>
        </div>
    )
}