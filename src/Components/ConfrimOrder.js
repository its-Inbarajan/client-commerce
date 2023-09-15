import React, { useEffect, useState } from "react";
import orderConfirm from "../images/orderConfirm.jpg";

export const ConfrimOrder = () => {
  const [selected, setSelected] = useState([]);
  // const [totalProduct, setTotalProduct] = useState([]);

  useEffect(() => {
    let getProducts = JSON.parse(sessionStorage.getItem("products"));

    setSelected(...selected, getProducts);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="cols-md-12">
          <div className="card" style={{ width: "25rem" }}>
            <img src={orderConfirm} alt="confirm order" />
          </div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">_id</th>
              <th scope="col">Title</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          {selected.length &&
            selected.map((items, index) => (
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{items.title}</td>
                  <td>{items.product}</td>
                  <td>{items.Price}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};
