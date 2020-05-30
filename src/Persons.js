import React from "react";
import "./Persons.css";

const Persons = (props) => {
  return (
    <div className="persons">
      <div className="persons-card">
        <h3>{props.person.name}'s information</h3>
        <p>Name is {props.person.name}</p>
        <p>Age is {props.person.age}</p>
        <p>I am a {props.person.profession}</p>
      </div>
    </div>
  );
};
export default Persons;