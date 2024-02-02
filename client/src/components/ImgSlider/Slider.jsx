import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpeg';
import arrowR from './arrowRight.png';
import arrowL from './arrowLeft.png';
import './Slider.css'

function oneUp({ count, setCount }) {
  setCount((prevCount) => (prevCount + 1) % 3);
}

function oneDown({ count, setCount }) {
  setCount((prevCount) => (prevCount - 1 + 3) % 3);
}

export default function Slider({ count, setCount }) {
  if (count === 0) {
    return (
      <div>
        <button className='arrowL' onClick={() => oneDown({ count, setCount })}>
          <img src={arrowL} className="LeftArrow" />
        </button>
        <img src={img1} alt="Image 1" className='image'/>
        <button className='arrowR' onClick={() => oneUp({ count, setCount })}>
          <img src={arrowR} className="RightArrow" />
        </button>
      </div>
    );
  }
  if (count === 1) {
    return(
        <div>
        <button className='arrowL' onClick={() => oneDown({ count, setCount })}>
          <img src={arrowL} className="LeftArrow" />
        </button>
        <img src={img2} alt="Image 2" className='image'/>
        <button className='arrowR' onClick={() => oneUp({ count, setCount })}>
        <img src={arrowR} className="RightArrow" />
        </button>
      </div>
    )
  }
  if (count === 2) {
    return(
        <div>
        <button className='arrowL' onClick={() => oneDown({ count, setCount })}>
          <img src={arrowL} className="LeftArrow" />
        </button>
        <img src={img3} alt="Image 3" className='image'/>
        <button className='arrowR' onClick={() => oneUp({ count, setCount })}>
        <img src={arrowR} className="RightArrow" />
        </button>
      </div>
    )
  }
}
