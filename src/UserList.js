import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="cp">
      <h3
        style={{
          fontFamily: "Nanum Myeongjo",
          textAlign: "center",
          color: "white",
        }}
      >
        Liste des Utilisateurs
      </h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Site Web</th>
          </tr>
        </thead>
        <tbody>
          {listOfUsers.map((user) => (
            <tr>
              <td className="idRow">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.address.street}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
