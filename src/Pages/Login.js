import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const NavigateTo = useNavigate();

  const [loginUser, setLoginUser] = useState([]);
  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("/api/users/usersLogin", {
          email,
          password,
        })
        .then((response) => {
          setLoginUser([...loginUser, response.data]);
          localStorage.setItem(
            "User",
            JSON.stringify([...loginUser, response.data])
          );
          NavigateTo("/");
          toast.success("Login Successflly");
        });
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="row App-header">
      <div className="col-sm-5 mb-4">
        <div className="card ">
          <form noValidate onSubmit={handelSubmit}>
            <div className="col-sm-11 m-3 mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-sm-11 m-3 mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="mb-3 mt-3 m-3">
              Create Account
              <NavLink to={"/Signup"}> Signup</NavLink>
            </p>
            <div className="col-sm-11 m-3 mb-3 text-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
