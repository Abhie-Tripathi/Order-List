import React from "react";

const ProductList = (props) => {
    
    const handleRemove = (s) => {
      localStorage.removeItem(s);
    };
    return (
        <>
      <h1>Product List</h1>
      <ul>
        {props.list.map((obj) => {
          localStorage.setItem(
            obj.Id,
            `Product ID : ${obj.Id} Price : ${obj.Price} Product Name : ${obj.Name}`
          );

          return (
            <li key={obj.Id}>
              {`Product ID : ${obj.Id} Price : ${obj.Price} Product Name : ${obj.Name}`}
              <button onClick={()=>handleRemove(obj.Id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <h3>Total Worth of Products :- {props.sum}</h3>
    </>
  );
};

export default ProductList;
