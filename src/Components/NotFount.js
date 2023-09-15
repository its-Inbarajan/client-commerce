/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Notproducts from "../images/Notproducts.png";
import { useNavigate } from "react-router-dom";

export const NotFount = () => {
  const Navigate = useNavigate();

  const Hander = () => {
    Navigate("/");
  };

  return (
    <div className="row">
      <div className="cols-sm-12 mb-3 mt-3 mx-3">
        <div className="text-center mb-3 mt-3">
          <button
            className="btn btn-md btn-outline-light"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Home"
            onClick={Hander}
          >
            Go Back
          </button>
        </div>

        {/* <div className="App-header"> */}
        <img src={Notproducts} alt="My Image" class="rounded mx-auto d-block" />
        {/* </div> */}
      </div>
    </div>
  );
};
