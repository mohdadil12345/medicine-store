
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../context/AuthContextPro";

function MediDetails() {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  const { login, logout, user } = useContext(Authcontext);

  const fetchdata = async (id) => {
    try {
      let res = await fetch(`https://semi-mock2.onrender.com/medicines/${id}`);
      let data = await res.json();
      // console.log(data)
      setdata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata(id);
  }, [id]);








  return (
    <div className="details_page">
      <div className="details_data flex-box" style={{alignItems: "flex-start"}}>
        <div className="box1">
          <img src={data.img1} alt="" />
          
        </div>
        <div className="box2">
        <h1>{data.name}</h1>
          <div className="flex-box spb">
            <p>price:{data.price}</p>
            <p>{data.discount}</p>
          </div>
         <Link to = "/payment"> <button className="btn comm_btn" >Buy Now</button></Link>
          <h3>description:</h3>
          <p> Composition: {data.composition}</p>
          <p>{data.description}</p>
          <h3>uses:</h3>
          <p>{data.uses}</p>
        </div>
      </div>
    </div>
  );
}

export default MediDetails;
