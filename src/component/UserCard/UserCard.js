import React, { useEffect } from "react";
import "./UserCard.css";
import userPD from "../../assets/userDP.jpg";
import axios from "axios";

function UserCard({ username, email, id }) {
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/alluser/${id}`);
    window.location.reload(false);
  };

  return (
    <div className="userCard">
      <div className="userCard__left">
        <img src={userPD} alt="" />
      </div>
      <div className="userCard__right">
        <div className="userCard__right-name">
          <p>{username}</p>
        </div>
        <div className="userCard__right-email">
          <p>{email}</p>
        </div>
        <div className="userCard__right-btn">
          <button className="userCard-delete" onClick={() => deleteUser(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
