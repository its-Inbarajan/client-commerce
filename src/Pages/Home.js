import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Home = () => {
  const Navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [proID, setProId] = useState([]);

  // render the products getting All
  useEffect(() => {
    axios
      .get("/api/product")
      .then((res) => {
        setPost(res.data.products);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Handel Cart function
  const handelCart = (id) => {
    // findout if user is login or not
    // if user is not login a toast will be show up
    // and show login button to navigate the user to login screen
    const user = localStorage.getItem("User");

    // if user login once then he will be able to add cart the products
    // and we send _id of the unique products
    // and save it in local stroage
    // then getIt from Carlist file for show the user which proudcts are he Added
    if (user) {
      axios.get(`/api/product/${id}`).then((res) => {
        setProId([...proID, res.data]);

        sessionStorage.setItem(
          "products",
          JSON.stringify([...proID, res.data])
        );

        if (!proID == "") {
          toast.success("product add success fully");
        } else {
          toast.error("Select any products");
        }
      });
    }

    if (!user) {
      toast(() => (
        <span>
          Need to <b>Login</b> first
          <span className="">
            <button
              className="btn btn-md btn-outline-secondary"
              onClick={() => Navigate("/Login")}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Login"
            >
              Login
            </button>
          </span>
        </span>
      ));
    }
  };

  return (
    <div className="container-fluid App-header">
      <div className="container">
        <div className="d-flex">
          {post.map((item, index) => {
            return (
              <div className="col-sm-3" key={index}>
                <div className="">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">{item.product}</p>
                      <div className="cart-title">{item.title}</div>
                      <p className="card-text">{item.Price}</p>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-md btn-outline-success"
                        onClick={(e) => handelCart(item._id)}
                      >
                        Add cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* {!proID ? <NotFount /> : ""} */}
        </div>
      </div>
    </div>
  );
};
