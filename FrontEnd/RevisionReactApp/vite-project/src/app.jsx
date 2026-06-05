import { FaWifi } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

import contactImage from "./assets/contactPage.jpg";
import LoginPage from "./assets/pages/LoginPage";

function App() {
  const age = 5;

  return (
    <>
      <div className="bg-primary p-2 text-light">
        <FaWifi /> <span>My Revision App</span>
      </div>

      <LoginPage />

      {/* <p>My age is {age}</p>

      <hr />
      <input type="number" />

      <img src={contactImage} alt="" className="w-100" />

      <button className="btn btn-primary d-flex gap-2 align-items-center">
        <IoIosSave className="fs-5 text-danger" /> <span>Save Data</span>
      </button> */}
    </>
  );
}

export default App;