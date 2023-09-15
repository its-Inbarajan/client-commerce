import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [users, setUsers] = useState([]);

  const NavigateTo = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("/api/users/userSignup", {
          email,
          password,
          username,
        })
        .then((res) => {
          console.log(res.data);

          setUsers([...users, res.data]);

          localStorage.setItem("User", JSON.stringify([...users, res.data]));
          if (res.status === "200") {
            NavigateTo("/");
            toast.success("Account Created Successfully");
          }
        });
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };
  return (
    <div className="row App-header">
      <div className="col-sm-6 mb-3 mt-4 m-4 ">
        <form noValidate onSubmit={handelSubmit}>
          <div className="row">
            <div className="card text-bg-light mb-3">
              <div className=" mb-3">
                <label className="form-label">username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">password</label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                  className="form-control"
                />
              </div>
              {/* {error && <div className="error">{error}</div>} */}
              <div className=" mb-3 text-center">
                <button
                  className="btn btn-md btn-outline-primary"
                  type="submit"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
