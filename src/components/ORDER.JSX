
import React from 'react'

function ORDER() {
    return (
      <div className="info_box">
      <div className="flex-box">
        <h3>Name :</h3>
        <p> {`${props.info.firstName} ${props.info.lastName}`} </p>
      </div>
      <div className="flex-box">
        <h3>Email :</h3>
        <p>{props.info.email}</p>
      </div>
      <div className="flex-box">
        <h3>Address :</h3>
        <p>{props.info.address}</p>
      </div>
      <div className="flex-box">
        <h3>Mobile :</h3>
        <p>{props.info.phoneNumber}</p>
      </div>
    </div>
  )
}

export default ORDER