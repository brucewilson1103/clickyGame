import React from "react";
import "./style.css";

// function FriendCard(props) {
  const FriendCard = (props)=>(
    <div className="card" onClick={() => props.handleClick(props.friendId)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span 
        className="remove" 
        ></span>
    </div>
  );


export default FriendCard;
