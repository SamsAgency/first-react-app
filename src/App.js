import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Persons from "./Persons";
import Addpersons from './Addpersons'

class App extends React.Component {
  state = {
    Persons : [
      {name : 'Jaymo', age: 23, profession: 'pianist', id:1  },
      {name : 'Gideon', age: 24, profession: 'professer', id : 2},
      {name : 'Alexis', age: 29, profession: 'BlackSmith', id : 3},
      {name : 'Gedi', age: 21, profession: 'Anoying Asshole', id : 4},
    ]
  }


  nightmare = (e) => {
    alert('Yes I said nightmare')
  }

  addPerson = (person) => {
    person.id = Math.random();
    let Persons = [...this.state.Persons, person];
    this.setState({
      Persons : Persons
    });

  }

  handleNavbarClick = (e) => {
    alert('The individual components do not work, I just like to see them there')
  }


  render() {
    return (
      <div className="App">
        <Navbar handleNavbarClick = {this.handleNavbarClick}/>
        <div className="main">
          <center>
            <h2>Hey there!!!</h2>
            <p className="nightmare" onClick ={this.nightmare} >Welcome to another React Js nightmare</p>
            < Persons Persons={this.state.Persons} />
            < Addpersons addPerson = {this.addPerson} />
          </center>
        </div>
      </div>
    );
  }
}

export default App;
