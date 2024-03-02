import React, { useState } from "react";
import { styled } from "styled-components";
import {useNavigate} from 'react-router-dom'

const Address = () => {


  const [deliveryCharge, setDeliveryCharge] = useState(5);

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [add, setAdd] = useState("")
  const [addDetails, setAddDetails] = useState("")
  const [city, setCity] = useState("")
  const [pinCode, setPinCode] = useState("")
  const [state, setState] = useState("")
  const [phone, setPhone] = useState("")

  const [details, setDetails] = useState({})

  let address_ls = JSON.parse(localStorage.getItem("address")) || []

  let meal_ls = JSON.parse(localStorage.getItem("meal")) || []

  const navigate = useNavigate()

  function handleDetails(e) {
    e.preventDefault()

    setDetails({
      firstName,
      lastName,
      add,
      addDetails,
      city,
      pinCode,
      state,
      phone
    })

    address_ls.push({firstName,
      lastName,
      add,
      addDetails,
      city,
      pinCode,
      state,
      phone})


      localStorage.setItem("address", JSON.stringify(address_ls))
      localStorage.setItem("meal", JSON.stringify(meal_ls))

    navigate('/pay')
  }

  return (
    <Container >
      <Main >
        <InputField
          id="div-1"
        >
          <DIV >
          <InputDiv1
            
            >
              <input type="text" placeholder="  First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
              <input type="text" placeholder="  Street Address" value={add} onChange={(e)=> setAdd(e.target.value)} />
              <input type="text" placeholder="  City" value={city} onChange={(e)=> setCity(e.target.value)} />
              <select value={state} onChange={(e)=> setState(e.target.value)}>
                <option value="">Select State</option>
                <option value="Assam">Assam</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Punjab">Punjab</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </InputDiv1>
  
            <InputDiv2
              
              id="div-2"
            >
              <input id="lastName" type="text" placeholder="  Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
              <input type="text" placeholder="  Apt,suite,floor" value={addDetails} onChange={(e)=> setAddDetails(e.target.value)}/>
              <input type="text" placeholder="  Zip Code" value={pinCode} onChange={(e)=> setPinCode(e.target.value)}/>
              <input type="text" placeholder="  Phone Number" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            </InputDiv2>
          </DIV>

          <div style={{width: '100%', display: 'flex', justifyContent:'center', marginBottom:'15px'}}>
          <Button
        
        onClick={handleDetails}
      >
        Next Step
      </Button>
          </div>
        </InputField>

        <Details id="oder-container">
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
              <p className='price-det-a'>
                <b>${deliveryCharge}</b>
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

          
          </div>
          <hr />

          <div>
            <h2>Delivery Summary</h2>

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
                <p className='price-det-a'>edit</p>
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
        </Details>
      </Main>

      <h2 style={{ textAlign: "center", marginTop: "100px" }}>FAQ</h2>
      <Faq>
        <Box
          id="faq-main"
        >
          <FaqCard
            
            className="faq-card"
          >
            <h4>What if I’m not home to receive my shipment?</h4>
            <p>
              We know our customers are busy, so you do not need to be home to
              receive your box. Our custom delivery boxes are designed to keep
              your ingredients fresh for 24 hours or longer after delivery.
            </p>
          </FaqCard>

          <FaqCard
            
            className="faq-card"
          >
            <h4>Can I change the time, date, or location of my delivery?</h4>
            <p>
              Yes, you can adjust the date and location of every delivery, and
              as a reminder, you do not need to be home to receive your box.
            </p>
          </FaqCard>

          <FaqCard
            
            className="faq-card"
          >
            <h4>How often will I be charged?</h4>
            <p>
              Your plan is weekly, but you can easily skip a week, pause, or
              cancel your account at any time. Just make sure you do so before
              your weekly cutoff to stop your next order.
            </p>
          </FaqCard>
        </Box>
      </Faq>
    </Container>
  );
};

export default Address;

const FaqCard = styled.div`
  width: 30%;
  font-size: 16px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 15px;

  @media only screen and (max-width: 600px) {

    width: 100%;
    padding: 20px;
    margin-top: 10px;
  }
`

const Button = styled.button`
  width: 50%;
  height: 45px;
  background-color: #067a46;
  color: white;
  font-weight: 700;
  font-size: 15px;
  border: 0px;
  border-radius: 15px;
`;

const Box = styled.div`

display: flex;
justify-content: space-around;
width: 80%;
margin: auto;
padding: 10px;

   @media only screen and (max-width: 920px) {
    
      width: 100%;
    
  }

  @media only screen and (max-width: 600px) {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15px;
    margin: auto;
  }
`

const Faq = styled.div`
   @media only screen and (max-width: 920px) {
    width: 100%;
  }

`

const InputField = styled.div`

display: flex;
flex-direction: column;
width: 60%;
justify-content: space-around;
/* padding-top: 20px; */
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
border: 1px solid #ccc;
border-radius: 10px;
margin-top: 100px;


input,
  select {
    height: 55px;
    border: 1px solid #cccccc;
    border-radius: 15px;
  }

  @media only screen and (max-width: 920px) {
    width: 85%;
    margin: auto;
    margin-top: 30px;

    button{
      background-color: #067a46;
      margin-top: 15px;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    
  }
  
`;

const Container = styled.div`
  padding: 20px;
  margin-top: 30px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -15px;
  

  @media only screen and (max-width: 920px) {
  display: flex;
  flex-direction: column;
  }
`;

const Details = styled.div`
  border: 1px solid #ccc;
  /* border: 1px solid #8d0909; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 30px;
  margin-top: 100px;
  border-radius: 10px;
 


  @media only screen and (max-width: 920px) {
    
    width: 85%;
    margin: auto;
    margin-top: 30px;
    .price-det{
      padding-left: 230px;
    }

    .price-det-a{
      padding-left: 245px;
    }
}

@media only screen and (max-width: 600px) {

  width: 100%;
  margin-top: 30px;

    .price-det{
      padding-left: 30px;
    }

    .price-det-a{
      padding-left: 45px;
    }

}
`

const InputDiv1 = styled.div`
  display: flex;
  width: 48%;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  
  @media only screen and (max-width: 600px) {
    margin: auto;
    width: 95%;
    margin-bottom: 20px;
  }

`

const InputDiv2 = styled.div`
  display: flex;
  width: 48%;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin: auto;
    width: 95%;

    #lastName{
      display: none;
    }
  }
`

const DIV = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  justify-content: space-around;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    input, select{
      width: 100%;
    }





  }
`