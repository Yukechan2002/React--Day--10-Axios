import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Read.css";

const Read = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const setData = (data) => {
    let { id, name, username, email, phone } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Username", username);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6690d8f726c2a69f6e8d508d.mockapi.io/axioscrud/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://6690d8f726c2a69f6e8d508d.mockapi.io/axioscrud`)
      .then((response) => {
        setAPIData(response.data);
      });
  };

  return (
    <div>
      <div className="create-button">
        <Link to="/create">
          <button className="btn btn-primary">Create New Record</button>
        </Link>
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>
                <Link to="/update">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setData(data)}
                  >
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
