// import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NotFount } from "./NotFount";
// import { CartList } from "./CartList";

export const Navbar = ({ setResult }) => {
  const [searchData, setSearchData] = useState([]);
  const [user, setUser] = useState([]);

  // submit function prevent it
  const handelSubmit = (e) => e.preventDefault();

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const results = data.filter((items) => {
          return (
            value &&
            items &&
            items.name &&
            items.name.toLowerCase().includes(value)
          );
        });
        setResult(results);
      });
  };

  const handelSearch = (value) => {
    setSearchData(value);
    fetchData(value);
  };

  useEffect(() => {
    const getUser = localStorage.getItem("User");
    setUser(getUser);
  }, []);

  const handelLogout = () => {
    localStorage.clear("User");
  };

  return (
    <div className="nav-bar shadow">
      <ul className="nav nav-tabs p-4 gap-3 ">
        <li>
          <Link to={"/"}>Logo</Link>
        </li>

        <div className="space"> </div>

        <li>
          <Link
            to={"/CartList"}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Cart"
          >
            <i className="bi bi-cart"></i>
          </Link>
        </li>

        {user ? (
          <>
            <li>
              <button
                className="btn btn-md btn-outline-danger  "
                onClick={handelLogout}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Logout"
              >
                <i className="bi bi-door-closed"></i>
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              to={"/Login"}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Login"
            >
              <button className="btn btn-md btn-outline-success">
                <i className="bi bi-person-fill"></i>
              </button>
            </Link>
          </li>
        )}

        {/* {user && (
          
        )} */}
        <form className="" role="search" onSubmit={handelSubmit}>
          <input
            className="form-control me-2"
            type="text"
            id="Search"
            placeholder="Search..."
            aria-label="Search"
            value={searchData}
            onChange={(e) => handelSearch(e.target.value)}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Search here"
          />
        </form>
      </ul>
    </div>
  );
};
