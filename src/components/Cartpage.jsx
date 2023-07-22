import { Authcontext } from "../context/AuthContextPro";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

function Cartpage() {
  const [cartitem, setcartitem] = useState([]);

  const getdata = () => {
    axios.get(`https://semi-mock2.onrender.com/cart`).then((res) => {
      // console.log(res.data);
      setcartitem(res.data);
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

  return (
    <div className="cartpage">
      <div style={{ marginTop: "100px" }}>
        <h1>Cartpage per aapka swagat hai</h1>
      </div>

      {cartitem.length > 0 ? (
        <div className=" cartdata">
          {cartitem.map((item) => (
            <div className="flex-box cartdata">
              <h>{item.category}</h>
              <img src={item.img1} alt="" />
              <h2>{item.name}</h2>
              <strong>{item.price}</strong>
              <button className="deltebtn" onClick={() => deletebtn(item.id)}>DELETE</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2p4bHhhNm1tcnF0ejVuMzVsdWM3MmI4YjdqbWtpM3UzN3psanIyZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/giXLnhxp60zEEIkq8K/giphy.gif"
            alt=""
          />
          <Link to="/medicine">
            <button className="add-to-cart-btn">Go to Products</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cartpage;
