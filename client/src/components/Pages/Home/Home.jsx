import React, { useState } from "react";
import './Home.css'
import Slider from '../../ImgSlider/Slider.jsx'
import Header from "../../Header/Header.jsx";
import Footer from "../../Footer/Footer.jsx";
export default function Home(){
    const [count,setCount] = useState(0)
    return(
        <div className="Homepage">
            <Header/>
            <Slider count={count} setCount={setCount}/>
            <Footer/>
        </div>
    )
}