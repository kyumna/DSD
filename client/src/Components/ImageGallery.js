import React from 'react'
import img from '../img.jpg';
import './Image.css'
function ImageGallery() {
  return (
    <div className='parent'> 
    <div className='Card'><img src={img}></img></div>
    <div className='Card'><img src={img}></img></div>
    <div className='Card'><img src={img}></img></div>
    <div className='Card'><img src={img}></img></div>
  
    
    </div>
  )
}

export default ImageGallery