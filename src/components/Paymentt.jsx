import { useContext} from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import  "../components/Payment.scss"
import { Authcontext } from "../context/AuthContextPro";

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
  width: 95%;
  margin: auto;

  @media only screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
  }
`;

const PaymentForm = styled.form`
  width: 50%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 920px) {
    width: 80%;
    margin-top: 30px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 30px;
    font-size: 15px;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const PaymentButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
`;

const Details = styled.div`
  /* border: 1px solid #ccc; */
  /* border: 1px solid #7d1616; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 30px;
  border-radius: 10px;
  margin-top: 100px;

  @media only screen and (max-width: 920px) {
    width: 80%;
    margin-top: 30px;

    .price-det {
      padding-left: 230px;
    }

    .price-det-a {
      padding-left: 245px;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 30px;

    .price-det {
      padding-left: 30px;
    }

    .price-det-a {
      padding-left: 45px;
    }
  }
`;

// padding:'30px', borderRadius:'10px'

const Paymentt = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const { cartdata } = useContext(Authcontext);
  // const [totalcost, settotalcost] = useState(0)

  console.log("cartdata", cartdata);
  

  let address_ls = JSON.parse(localStorage.getItem("address"));
  let meal_ls = JSON.parse(localStorage.getItem("meal"));

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment logic here
    alert("Order Placed Successfully");

    navigate("/");
  };




    // for (let i = 0; i < cartdata.length; i++) {
    // return   settotalcost += cartdata[i].price
      
    // }
 
    

// console.log(totalcost())


  return (
    <PaymentContainer>
      <PaymentForm id="payment-form" onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ marginRight: "10px" }}>Cards that we accept</h3>
          <img
            style={{ width: "50px" }}
            src="https://cdn.hellofresh.com/payments/icons/mc.svg"
          />
          <img
            style={{ width: "50px" }}
            src="https://cdn.hellofresh.com/payments/icons/visa_logo.svg"
            alt=""
          />
          <img
            style={{ width: "50px" }}
            src="https://cdn.hellofresh.com/payments/icons/discovernet.svg"
          />
        </div>
        <InputField
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          style={{ height: "60px", marginTop: "10px" }}
        />
        <InputField
          type="text"
          placeholder="Expiry Date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          style={{ height: "60px" }}
        />
        <InputField
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          style={{ height: "60px" }}
        />
        <PaymentButton type="submit">Pay Now</PaymentButton>
      </PaymentForm>

      <Details>
        <div id="oder-container">
          <div
            className="box1"
        
          >
            <h2>Order Summary</h2>

            <div
              style={{
                display: "flex",
                gap: "35px",
                marginBottom: "5px",
                marginTop: "10px",
              }}
              id="prod-details"
            >
              {/* <div>
                <h6 style={{ fontSize: "15px" }}>Tablet cost</h6>
            
              </div> */}

              <div className="order-cont">
                <p className="price-det-a">

              {cartdata.map((ele)=> (
                  <div className="order-item">
                    <img src={ele.img1} alt="" />
                      <b>${ele.price}</b>
                  </div>
              ))}

                
                </p>
              </div>
            </div>

            <hr />

            <div
              style={{ display: "flex", gap: "30px", marginBottom: "10px" }}
              id="prod-shipping"
            >
              <div>
                <p>Packaging and shipping charge</p>
              </div>

              <div>
                <p className="price-det">
                  <b>${meal_ls[meal_ls.length - 1].deliveryCharge}</b>
                </p>
              </div>
            </div>
            <hr />

            <div
              style={{ display: "flex", gap: "60px", marginBottom: "10px" }}
              id="prod-total"
            >
              <div>
                <p style={{ fontSize: "20px" }}>Total Amount Payable</p>
              </div>

              <div>
                <p className="price-det" style={{ fontSize: "20px" }}>
              totlcost : $ 
                </p>
              </div>
            </div>
            <hr />
          </div>

          <div className="box2">
            <h2>Delivery Summary</h2>

            <div>
              <h4>Deliver To</h4>
              <p>
                Name: {address_ls[address_ls.length - 1].firstName}{" "}
                {address_ls[address_ls.length - 1].lastName} <br />
                Address: {address_ls[address_ls.length - 1].addDetails},{" "}
                {address_ls[address_ls.length - 1].add} <br />
                {address_ls[address_ls.length - 1].city}{" "}
                {address_ls[address_ls.length - 1].state}{" "}
                {address_ls[address_ls.length - 1].pinCode} <br />
                {address_ls[address_ls.length - 1].phone}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "40px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <h4>Delivery Instruction</h4>
                <p>Provide your instruction (if any)</p>
              </div>
              <div>
                <p className="price-det">edit</p>
              </div>
            </div>

            <div style={{ marginBottom: "5px" }}>
              <h4>Estimated Delivery</h4>
              <p>{`${new Date().toDateString()}`}</p>
            </div>

            <div style={{ marginBottom: "5px" }}>
              <h4>Special instructions</h4>
              <p>No special instruction</p>
            </div>
          </div>
        </div>
      </Details>
    </PaymentContainer>
  );
};

export default Paymentt;
