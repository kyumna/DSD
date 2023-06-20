import React from 'react'
import Card from './Cards'


function CardsParent() {
  return (
    <div style={{display:'flex' , alignItems:'center', justifyContent:'center',marginTop:'2rem',gap:'0.5rem'}}>
    <Card />
    <Card/>
    <Card/>
    <Card/>
    
    </div>
  )
}

export default CardsParent