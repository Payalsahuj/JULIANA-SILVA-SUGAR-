import React, { useContext, useEffect } from 'react'

import "../modulecss/Bag.css";
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import { Authcontext } from "../authcontext/authcontext"

function Bag() {


  const { theme, settingtheme, bag, setBag, HandleChange, handlePrice, price } = useContext(Authcontext)


  const handleRemove = (id) => {
    const arr = bag.filter((item) => item.id !== id);
    setBag(arr);
    handlePrice()

  };



  useEffect(() => {
    handlePrice();

  },);

  return (
    <article style={{backgroundColor:theme?'black':'#ECEFF1',color:theme?'white':'black'}}>

      <Heading className='bagheading' color={theme?'black':'black'} >JULIANA SILVA BAG</Heading>
      <div style={{ width: '70%', margin: 'auto' ,marginTop:'50px'}}>
        {bag.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
            <div className='Price_button'>
              <button
                name="plus" onClick={() => HandleChange(item, 1)
                }>+</button>
              <button>{item.amount}</button>
              <button
                name="minus"
                disabled={item.amount === 1} onClick={() => HandleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>₹{item.price * item.amount}</span>
              <button style={{backgroundColor:'#D53F8C'}} onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Bag</span>
          <span>Rs: {price}/-</span>
        </div>
        <div style={{marginTop:'20px',paddingBottom:'40px'}}>
        {bag.length !== 0 ? <Link to="/address"><button className='checkout' style={{color:theme?'black':'white',backgroundColor:theme?'white':'black'}}>Proceed to Checkout {">"}</button></Link> : <Heading color={theme?'white':'black'}>Bag is Empty</Heading>}
        </div>
      </div>
    </article>
  )
}

export default Bag