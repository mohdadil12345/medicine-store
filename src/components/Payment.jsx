import React, { useState } from "react";

const initial = {
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  phoneNumber: "",
};

function Payment() {
  const [info, setinfo] = useState(initial);
  const [showdeatil, setshowdatis] = useState(false);

  const inputchange = (e) => {
    //   console.log(e.target.name);
    // console.log(e.target.value);

    const object = { ...info };
    object[e.target.name] = e.target.value;

    setinfo(object);
  };

  const form_submit = (e) => {
    e.preventDefault();
    console.log(info);
    setshowdatis(true);
  };

  return (
    <div className="paymentpage">

      {!showdeatil ? (
        <form
          onSubmit={(e) => form_submit(e)}
          className="flex-box flex-column paymentform"
        >
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => inputchange(e)}
            name="firstName"
            value={info.firstName}
          />

          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => inputchange(e)}
            name="lastName"
            value={info.lastName}
          />

          <input
            type="text"
            placeholder="Address"
            onChange={(e) => inputchange(e)}
            name="address"
            value={info.address}
          />

          <input
            type="email"
            placeholder="Email "
            onChange={(e) => inputchange(e)}
            name="email"
            value={info.email}
          />

          <input
            type="ph"
            placeholder="Phone"
            onChange={(e) => inputchange(e)}
            name="phoneNumber"
            value={info.phoneNumber}
          />

          <input className="btn bdr4 comm_btn" type="submit" />
        </form>
      ) : (
        <div className="info_box">
          <div className="flex-box">
            <h3>Name :</h3>
            <p> {`${info.firstName} ${info.lastName}`} </p>
          </div>
          <div className="flex-box">
            <h3>Email :</h3>
            <p>{info.email}</p>
          </div>
          <div className="flex-box">
            <h3>Address :</h3>
            <p>{info.address}</p>
          </div>
          <div className="flex-box">
            <h3>Mobile :</h3>
            <p>{info.phoneNumber}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
