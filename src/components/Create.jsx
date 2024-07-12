import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Create.css"; // Import your CSS file

const Create = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const postData = () => {
    if (!name || !username || !email || !phone) {
      setErrorMessage("All fields are required.");
      return;
    }

    axios
      .post(`https://6690d8f726c2a69f6e8d508d.mockapi.io/axioscrud`, {
        name,
        username,
        email,
        phone,
      })
      .then(() => setRedirect(true))
      .catch((error) => console.error("Error posting data:", error));
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="create-form">
      <h2>Create Data</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form>
        <div className="form-group mb-3">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="InputUserName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="InputUserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="InputNumber" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="InputNumber"
            name="mobileNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={postData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
