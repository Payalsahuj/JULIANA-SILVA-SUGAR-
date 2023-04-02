import React, { useState, useEffect, useContext } from "react";
import {Authcontext} from "../authcontext/authcontext"
import "./Bag.css";
import { useNavigate ,Link} from "react-router-dom";
import {Button} from "@chakra-ui/react"
const  Bag= () => {
  const { cart, setCart }=useContext(Authcontext)
  const [price, setPrice] = useState(0);
   const navigate=useNavigate()
  

  const handleQty=(val,id)=>{
   const updatedata= cart.map((item)=>item.id===id?{...item,quantity:item.quantity+val}:item)
     
   setCart(updatedata)
  }

  console.log(cart)
  function total(){ 
    let sum=0;

    for(let x=0;x<cart.length;x++){
     
     sum+= (cart[x].price*cart[x].quantity); 
    
    }
      return sum;
  }


  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };
 console.log("cart",cart)
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item?.images?.image1} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() =>handleQty(1,item.id)}>+</button>
            <button>{item.quantity}</button>
            <button onClick={() => handleQty(-1,item.id)}disabled={item.quantity==0}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}  >Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>₹{total()}</span>
      </div>
    <Link to="/address">   <Button  borderRadius={5}
                        variant="solid"
                        colorScheme="blue"
                        width="80px" >CheckOut</Button></Link>
    
    </article>
  );
};

export default Bag;