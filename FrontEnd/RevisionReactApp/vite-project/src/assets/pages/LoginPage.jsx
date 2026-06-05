import { useState } from "react";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <input
        type="text"
        name="userName"
        onChange={(e) => setUserName(e.target.value)}
      />

      <hr />
      <br />
      <br />
      <br />
      <hr />
      <div>my uSer Name is {userName}</div>
      <div>My City is {city}</div>

      <hr />
      <br />
      <br />
      <br />
      <hr />

      <input
        type="text"
        name="city"
        onChange={(e) => setCity(e.target.value)}
      />
    </>
  );
}

export default LoginPage;