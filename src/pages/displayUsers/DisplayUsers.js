import React, { useEffect, useState } from "react";
import UserCard from "../../component/UserCard/UserCard";
import "./DisplayUsers.css";
import axios from "axios";

function DisplayUsers() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/alluser")
        .then((res) => setUserList(res.data));
    };
    fetchData();
  }, []);

  console.log(userList);

  return (
    <div className="displayUsers wrapper">
      <div className="displayUsers__container">
        <div className="displayUsers__container-title">
          <h1>Registered User</h1>
        </div>
        <div className="displayUsers__container-card">
          {userList.map(({ username, email, _id }) => (
            <UserCard username={username} email={email} id={_id} key={_id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayUsers;
