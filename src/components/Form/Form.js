import React from "react";

const Form = (props) => {
  const getdata = (event) => {
    event.preventDefault()
    const data = {
      Id: document.getElementById("Id").value,
      Price: document.getElementById("price").value,
      Name: document.getElementById("name").value,
    };
    props.onsubmit(data)
  };
  return (
    <form onSubmit={getdata}>
      <label>Product ID : </label>
      <input type="number" id="Id"></input>
      <label>Price : </label>
      <input type="number" id="price"></input>
      <label>Product Name : </label>
      <input type="text" id="name"></input>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default Form;
