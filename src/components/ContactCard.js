import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user-image.png";

export default function ContactCard(props) {
  const { id, name, email,phone } = props.contact;
  console.log(props.contact)

  return (
    <div className="item">
      <img src={user} alt="user" id="user-icon" className="ui avatar image" />

      <div className="content">
        {/* <div className="header">{name}</div>
        <div>{email}</div> */}
        <Link
          to={`/contact/${id}`} state={{contact: props.contact}}
        >
          <div className="header">{name}</div>
         
          <div>{phone}</div>
          <div>{email}</div>
        </Link>
      </div>

      <i
        id="trash-icon"
        className="trash alternate outline icon  right floated large"
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}
