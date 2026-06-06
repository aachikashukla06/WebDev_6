import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("userName :", userName);
    console.log("password :", password);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Welcome Back!!!</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <hr />
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;