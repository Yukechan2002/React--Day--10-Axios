import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Update.css"; // Import your CSS file

const Update = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setUsername(localStorage.getItem("Username"));
    setEmail(localStorage.getItem("Email"));
    setPhone(localStorage.getItem("Phone"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://6690d8f726c2a69f6e8d508d.mockapi.io/axioscrud/${id}`, {
        name,
        username,
        email,
        phone,
      })
      .then(() => {
        console.log("Data updated successfully!");
        navigate("/"); // Navigate to "/read" page after successful update
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <div className="update-form">
      <h2>Update Data</h2>
      <form>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="InputNumber" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="InputNumber"
            name="mobileNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={updateAPIData}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
