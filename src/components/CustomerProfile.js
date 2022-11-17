import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const id = props.id;
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        //Question: where should this logic be handled? here or when render?
        if (!data.error) {
          setCustomerData(data);
        }
      });
  }, [id]);

  return (
    <div>
      <h5>Customer {id} profile </h5>
      <p>Name: {customerData.surname}</p>
      <p>Email: {customerData.email} </p>
      <p>Phone: {customerData.phoneNumber}</p>
      <p>Vip: {customerData.vip ? "Yes" : "No"} </p>
    </div>
  );
};

export default CustomerProfile;
