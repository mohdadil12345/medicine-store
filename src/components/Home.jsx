import React from "react";
import bg from "../assets/dc.png";
import rating from "../assets/rating.png";
import customer from "../assets/customer.png";
import specialist from "../assets/specialist.png";
import chamber from "../assets/chamber.png";
import privacy from "../assets/privacy.png";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div className="top-section flex-box ">
        <div className="welcome">
          <div className="abcd flex-box flex-column padd bdr16">

          <h1>Your Health Comes First.</h1>
          <p>
            With Medicare services you will receive the best medical treatment
            in your home. Our team of skilled medical professionals and aids
            ensure that you get the care you need and deserve.
          </p>
          <button className="btn bg2">Buy Medicine</button>
          </div>
          <div className="circle"></div>
        </div>
        <img src={bg} alt="" />
        <div className="flex-box flex-column rating">
          <img style={{ width: "180px" }} src={rating} alt="" />
          <p>
            <span>“</span>A trusted assistance companion for your health needs.{" "}
            <span>”</span>
          </p>
        </div>
      </div>
      <div className="section2 flex-box flex-column padd">
        <div className="flex-box flex-column sec2info spb">
          <h2>Your health requirements are our first focus.</h2>
          <p>
            Our team of skilled medical professionals and aids ensure that you
            get the care you need and deserve.
          </p>
        </div>
        <div className="flex-box sec2img spb">
          <div>
            <img src={customer} alt="" />
            <p>Customer Support</p>
          </div>
          <div>
            <img src={chamber} alt="" />
            <p>Chamber Services</p>
          </div>
          <div>
          <img src={specialist} alt="" />
            <p>Online Specialist</p>
          </div>
          <div>
            <img src={privacy} alt="" />
            <p>Privacy and Security</p>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Home;
