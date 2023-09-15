import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import { useDispatch } from "react-redux";
// import { IncreaseById, DecreaseById } from "../Context/action";
// import { toast } from "react-toastify";
// import { ProductCount } from "../hooks/Counter";
// import { INCREMENT, DECREMENT } from "../hooks/CounterSlice";
// import { Counter } from "../hooks/Counter";
// const [dublicate, setDublicate] = useState([]);

export const CartList = ({ product }) => {
  const Navigate = useNavigate();
  const [uniqueId, setUniqueId] = useState([]);
  const [email, setEmail] = useState([]);
  const [seprateProduct, setseprateProduct] = useState([{}]);

  // const [addCount, setAddCount] = useState([]);
  // const [minusCount, setMinusCoun] = useState([]);
  // const [username] = useState([]);
  // const [bookings, setBookings] = useState([]);
  // const [Price] = useState([]);
  // const [title] = useState([]);
  // const [load] = useState([]);

  // const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    let uniqueId = [...JSON.parse(sessionStorage.getItem("products"))];
    return setUniqueId(uniqueId);
  }, []);

  // const handelIncrease = (id) => {
  //   axios.get(`/api/product/${id}`).then((response) => {
  //     setAddCount([...addCount, response.data]);
  //     if (addCount) {
  //       sessionStorage.setItem(
  //         "products",
  //         JSON.stringify([...addCount, response.data])
  //       );

  //       toast.success("Add one more items successflly");
  //     }
  //   });
  // };

  // get user useEffect

  useEffect(() => {
    let usersData = [...JSON.parse(localStorage.getItem("User"))];
    setEmail(usersData.map((item) => item.email)[0]);
  }, []);

  useEffect(() => {
    let productData = [...JSON.parse(sessionStorage.getItem("products"))];

    setseprateProduct([...productData]);
  }, []);

  const handelConfirm = async () => {
    Navigate("/ConfirmOrder");
    const details = {
      email,
      seprateProduct,
    };

    await axios
      .post("/api/bookings", details)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handelDecreace = (id) => {
  //   try {
  //     axios.get(`/api/product/${id}`).then((res) => {
  //       let minusCount = [
  //         ...JSON.parse(sessionStorage.getItem("incProduct", res.data._id)),
  //       ];

  //       // const findbyID = minusCount.find((p) => p._id === id);
  //       // console.log("particul", findbyID);

  //       setMinusCoun([...minusCount]);
  //       minusCount.forEach((items, index) => {
  //         console.log(index);
  //         minusCount.splice(minusCount.indexOf(items), 1);
  //       });

  //       sessionStorage.setItem("incProduct", JSON.stringify(minusCount));
  //       toast.success("Successflly removed", minusCount);
  //     });
  //   } catch (error) {
  //     console.log("remove error", error);
  //   }
  // };

  // useEffect(() => {
  //   const handelDecreace = (id) => {
  //     try {
  //       axios.get(`/api/product/${id}`).then((res) => {
  //         let minusCount = [
  //           ...JSON.parse(sessionStorage.getItem("incProduct", res.data._id)),
  //         ];

  //         setMinusCoun([...minusCount]);

  //         minusCount.forEach((items) => {
  //           sessionStorage.clear(items, minusCount);
  //         });
  //       });
  //     } catch (error) {
  //       console.log("remove error", error);
  //     }
  //   };
  //   return handelDecreace();
  // }, [minusCount]);

  var total = 0;
  const getTotalValue = () => {
    for (let index = 0; index < uniqueId.length; index++) {
      total += uniqueId[index].Price;
      // console.log(total);
    }
    return total;
  };
  getTotalValue();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-4">
          <div className="card">
            <div className="card-body">
              <table className="table table-striped  border">
                <thead>
                  <tr>
                    <th scope="col">_id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                {uniqueId.length &&
                  uniqueId.map((item, index) => (
                    <tbody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.title}</td>
                        <td>{item.product}</td>
                        <td>{item.Price}</td>
                      </tr>
                    </tbody>
                  ))}

                <tr className="">
                  <td colSpan="3" className="text-center p-3">
                    <b> Total Price</b>
                  </td>
                  <td className="col">{total}</td>
                </tr>
              </table>
            </div>

            {/* <div className="d-flex gap-2">
                    <button
                      className="btn btn-md btn-round btn-outline-danger"
                      onClick={() =>
                        handelDecreace(item._id, DecreaseById(product))
                      }
                    >
                      <i className="bi bi-dash-square"></i>
                    </button>

                    <button
                      className="btn btn-md btn-round btn-outline-success"
                      onClick={
                        (e) =>
                          handelIncrease(
                            item._id,
                            dispatch(IncreaseById(product))
                          )
                        // handelIncrease
                      }
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Increase"
                    >
                      <i className="bi bi-plus-square"></i>
                    </button>
                  </div> */}
            <div className="text-center mt-3 mb-3">
              <button
                className="btn btn-md btn-outline-secondary"
                onClick={(e) => handelConfirm(e.target.value)}
              >
                Confirm order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
