import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MediDetails() {
  const [data, setdata] = useState([]);
  const { id } = useParams();

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
      <h1>medicine details</h1>
      <div className="details_data flex-box">
        <div className="box1">
          <h1>{data.name}</h1>
          <img src={data.img1} alt="" />
          <div className="flex-box spb">
            <p>price:{data.price}</p>
            <p>{data.discount}</p>
          </div>
          {/* <h3>Composition: </h3> */}
          <p> Composition: {data.composition}</p>
         <Link to = "/payment"> <button className="btn comm_btn" >Buy Now</button></Link>
        </div>
        <div className="box2">
          <h3>description:</h3>
          <p>{data.description}</p>
          <h3>uses:</h3>
          <p>{data.uses}</p>
        </div>
      </div>
    </div>
  );
}

export default MediDetails;
