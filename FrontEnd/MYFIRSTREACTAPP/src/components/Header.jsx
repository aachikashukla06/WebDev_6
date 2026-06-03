import { Link } from "react-router-dom";
import { FaWifi } from "react-icons/fa";
function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between">
        <div className="text-primary fs-4 fw-bold">< FaWifi /><span> My Company </span></div>

        <div className="d-flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>
        <div className="d-flex gap-3">
          <Link to={"/login"}>
            <button className="btn btn-outline-primary">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Header;
