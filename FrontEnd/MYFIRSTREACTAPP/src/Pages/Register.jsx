import { Link } from "react-router-dom";  
function Register() {
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Welcome!!!</h1>
          <br />
          <form>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" className="form-control" />
            <br />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="form-control" />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" />
            <br />
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>

          <hr />

          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;