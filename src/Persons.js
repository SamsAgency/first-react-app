import React from "react";
import "./Persons.css";

const Persons = ({ Persons }) => {
  return (
    <div className="persons">
      <div className="persons-card">
        <h3>{Persons[0].name}'s information</h3>
        <p>Name is {Persons[0].name}</p>
        <p>Age is {Persons[0].age}</p>
        <p>I am a {Persons[0].profession}</p>
      </div>

      <div className="persons-card">
        <h3>{Persons[1].name}'s information</h3>
        <p>Name is {Persons[1].name}</p>
        <p>Age is {Persons[1].age}</p>
        <p>I am a {Persons[1].profession}</p>
      </div>

      <div className="persons-card">
        <h3>{Persons[2].name}'s information</h3>
        <p>Name is {Persons[2].name}</p>
        <p>Age is {Persons[2].age}</p>
        <p>I am a {Persons[2].profession}</p>
      </div>

      <div className="persons-card">
        <h3>{Persons[3].name}'s information</h3>
        <p>Name is {Persons[3].name}</p>
        <p>Age is {Persons[3].age}</p>
        <p>I am a {Persons[3].profession}</p>
      </div><br/><br/>
      
    </div>
  );
};
export default Persons;