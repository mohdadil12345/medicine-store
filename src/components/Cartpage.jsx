import { Authcontext } from "../context/AuthContextPro";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../components/Cart.scss";

function Cartpage() {
  const [cartitem, setcartitem] = useState([]);
  const { setcartdata, cartdata, settoal , total} = useContext(Authcontext);


  const nav = useNavigate()

  const getdata = () => {
    axios.get(`https://semi-mock2.onrender.com/cart`).then((res) => {
      // console.log(res.data);
      setcartitem(res.data);
      setcartdata(res.data);
      // localStorage.setItem("cartlength" , res.data.length)
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const deletebtn = (id) => {
    axios
      .delete(`https://semi-mock2.onrender.com/cart/${id}`)
      .then((res) => {
        // console.log(res.data);
        toast.success("item deleted successfully");

        getdata();
      })
      .catch((error) => {
        toast.error("Failed to delete item.");
      });
  };

  const buynow = (item) => {
    // console.log(item)
    setcartdata([...cartdata, item]);

   nav("/address")

  };



  console.log("cartitem", cartitem);
  let sum = 0;

  for (let i = 0; i < cartitem.length; i++) {

      const priceMatch = cartitem[i].price.match(/₹([\d.]+)/);
  
      if (priceMatch && priceMatch[1]) {
          sum += parseFloat(priceMatch[1]);
      }
  }
  
  console.log("sum", sum);

  const disAmnt = (sum * 10) / 100;
  const disPrice = sum - disAmnt;

  console.log("disPrice", disPrice)
  settoal(disPrice)


  return (
    <div className="cart-container" id="cart-container">
      {cartitem.length > 0 ? (
        <div className="cart-items">
          {cartitem.map((item) => (
            <div className="cart-item">
              <img src={item.img1} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
          

              <button onClick={() => deletebtn(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <h1>Your cart is empty.</h1>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2p4bHhhNm1tcnF0ejVuMzVsdWM3MmI4YjdqbWtpM3UzN3psanIyZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/giXLnhxp60zEEIkq8K/giphy.gif"
            alt=""
          />
          <Link to="/medicine">
            <button className="add-to-cart-btn">
              <h3>Go to medicine page</h3>
            </button>
          </Link>
        </div>
      )}

      <div className="cart-total">
        <h3>Order Summary</h3>
        <div className="totalpay">
          <div className="total">
            <p> Total:  </p>
            <p>₹ {sum}</p>
          </div>
          <div className="discount">
            <p>Discount</p>
            <p>10% off</p>
          </div>
          <div className="subtotal">
            <p>Sub Total</p>
            <p>₹ {disPrice.toFixed(2)}</p>
          </div>
        <button onClick={() => buynow()}>
                Buy Now
              </button>
            
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
