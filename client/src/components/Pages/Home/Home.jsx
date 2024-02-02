import React, { useState } from "react";
import './Home.css'
import Slider from '../../ImgSlider/Slider.jsx'
export default function Home(){
    const [count,setCount] = useState(0)
    return(
        <div className="Homepage">
            <Slider count={count} setCount={setCount}/>
        </div>
    )
}