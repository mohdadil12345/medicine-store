

import React from 'react'

function components() {


const form_submit = () => {
    
}


  return (
    <div>
            <form
            onSubmit={(e) => form_submit(e)}
            className="flex-box"
          >
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => inputchange(e)}
              name="firstName"
            />

            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => inputchange(e)}
              name="lastName"
            />

            <input
              type="text"
              placeholder="Company Name"
              onChange={(e) => inputchange(e)}
              name="companyName"
            />

            <input
              type="text"
              placeholder="Address"
              onChange={(e) => inputchange(e)}
              name="address"
            />

            <input
              type="email"
              placeholder="Email "
              onChange={(e) => inputchange(e)}
              name="email"
            />

            <input
              type="ph"
              placeholder="Phone"
              onChange={(e) => inputchange(e)}
              name="phone"
            />

            <input type="submit" />
          </form>
    </div>
  )
}

export default components