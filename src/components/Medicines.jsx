import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { Authcontext } from "../context/AuthContextPro";
import axios from "axios";
import { toast } from "react-hot-toast";
// import data from "../db.json";



function Medicines() {
  let [data, setdata] = useState([]);
  let [globaldata, setglobaldata] = useState([]);
  let [loading, setloading] = useState(false);



  const { login, logout, user } = useContext(Authcontext);


  const [cartitem, setcartitem] = useState([]);
  

  const getdata = () => {
    axios.get(`https://semi-mock2.onrender.com/cars`).then((res) => {
      console.log(res.data);
      setcartitem(res.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);


  const fetchdata = async () => {
    setloading(true);
    try {
      let res = await fetch(`https://semi-mock2.onrender.com/medicines`);
      let data = await res.json();
      // console.log(data);
      setdata(data);
      setloading(false);
      setglobaldata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  //  filter by category
  const fil_data = (e) => {
    //  console.log(e.target.value);

    if (e.target.value == "") {
      setdata(data);
    } else {
      const filterrr = globaldata.filter(
        (item) => item.category == e.target.value
      );
      setdata(filterrr);
    }
  };

  // search by name
  const serchfilter = (e) => {
    // console.log(e.target.value);

    let filter_search = globaldata.filter((ele) =>
      ele.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setdata(filter_search);
  };

  // goto detailspage
  const navig = useNavigate();
  const GotoDetails = (item) => {
    // console.log(item.id);
    console.log(item);
    navig(`/medicine/${item.id}`);
  };

  const navigat = useNavigate();
  const ADDTOCART = (item) => {
    console.log(item);
  
      // Check if the item already exists in the cart
      const isItemInCart = cartitem.some((cartItem) => cartItem.id === item.id);
  
      if (!isItemInCart) {
        axios
          .post(`https://semi-mock2.onrender.com/cart`, item)
          .then((res) => {
            // console.log(res.data);
            setcartitem([...cartitem, item]); // Update local state
            localStorage.setItem("cartlength", cartitem.length + 1); // Update localStorage
     

            toast.success("item added to cart", {
              style: {
                borderRadius: "50px",
                background: "#000428",
                color: "#ffffff",
                padding: "1rem 1.5rem",
                fontWeight: "600",
              },
            });
          })
          .catch((error) => {
            console.error("Error adding item to cart:", error);
            toast.error("Item is already in the cart.");
          });
      } else {
        // Display a message if the item is already in the cart
        toast.error("Item is already in the cart.", {
          style: {
            borderRadius: "50px",
            background: "#FF0000",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
      }
    
  };
  

 

  return (
    <div className="medicine_page">
      <div className="medicine_filter">
        <h4 className="filter">FILTER</h4>
        <select
          class="form-select my-2"
          aria-label="Default select example"
          onChange={(e) => fil_data(e)}
        >
          <option value="">Filter By Category</option>
          <option value="tablet">tablet</option>
          <option value="syrup">syrup</option>
          <option value="injection">injection</option>
          <option value="cream">cream</option>
        </select>

        <input
          type="text"
          placeholder="Search"
          onChange={(e) => serchfilter(e)}
          className="bdr4"
          style={{ width: "100%" }}
        />
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="medicine">
          {data.map((item) => (
            <div key={item.id} className="medi_details">
              <img src={item.img1} alt="" />
              <h2 className="medititle">{item.name}</h2>
              <div className="flex-box ">
                <strong>{item.price}</strong>
                <strong>{item.discount}</strong>
              </div>

              <button
                className="btn btn-dark"
                onClick={() => GotoDetails(item)}
              >
                Buy Now
              </button>
              <button className="btn btn-dark" onClick={() => ADDTOCART(item)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Medicines;

