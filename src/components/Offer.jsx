import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  "../components/Offer.scss"
import { toast } from "react-hot-toast";

function Offer() {
  const [offer, setOffer] = useState([]);
  
  const navigate = useNavigate();

  axios
    .get("https://semi-mock2.onrender.com/offers")
    .then((res) => setOffer(res.data));


  return (



    <div>

      <div style={{ textAlign: "center", color: "teal", margin: "25px 0" }}>
        <h1> QUICK BUY! Get offers on medicines</h1>
      </div>

      <div className="offer" id="offer">
        {offer.map((item) => (
          <div className="card_offer">
            <div className="brand_image">
              <img src={item.image} alt="" />
            </div>
            <div className="title">
              <h3>{item.title}</h3>
              <p>
                <span>Quantity:</span>
                {item.status}
              </p>

              <p>
                <span>MRP: </span>
                {item.strike}
              </p>
              <p style={{ color: "teal" }}>
                <span>Discounts: </span>
                {item.off}
              </p>
              <p>
                <span> Offer Price: </span>
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    
    </div>

  );
}

export default Offer;