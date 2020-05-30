import React from 'react';
import './Addpersons.css';
import Navbar from './Navbar';
import Persons from './Persons'
import Title from './title';

class Addpersons extends React.Component {
    state = {
        name: null,
        age: null,
        profession: null,
        Persons: [
            { name: 'Jaymo', age: 23, profession: 'pianist', id: 1 },
            { name: 'Gideon', age: 24, profession: 'professer', id: 2 },
            { name: 'Alexis', age: 29, profession: 'BlackSmith', id: 3 },
            { name: 'Gedi', age: 21, profession: 'Anoying Asshole', id: 4 },
        ]
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        let person = { name: this.state.name, age: this.state.age, profession: this.state.profession, id: this.state.id }
        let Persons = [...this.state.Persons, person];
        this.setState({
            Persons: Persons
        });
        e.target.reset()
    }
    handleNavbarClick = (e) => {
        alert('The individual components do not work, I just like to see them there')
    }
    nightmare = (e) => {
        alert('Yes I said nightmare')
    }
    render() {
        const people = this.state.Persons
        return (
            <div>
                <Navbar handleNavbarClick={this.handleNavbarClick} />
                <Title nightmare={this.nightmare} />
                {
                    people.map((person) => {
                        return <Persons key={person.id} person={person} />
                    })
                }
                <center> <br />
                    <form className="form" onSubmit={this.handleFormSubmit} >
                        <label htmlFor="name">Name : </label>
                        <input className="input-classname" placeholder="Name" id="name" type="text" onChange={this.handleChange} /><br />

                        <label htmlFor="name">Age : </label>
                        <input className="input-classname" placeholder="Age" id="age" type="text" onChange={this.handleChange} /><br />

                        <label htmlFor="name">Profession : </label>
                        <input className="input-classname" placeholder="Profession" id="profession" type="text" onChange={this.handleChange} /><br /><br />

                        <button>Submit</button>
                        {/* <button className="button2">switch names</button> */}
                    </form>
                </center>
            </div>
        )
    }

}
export default Addpersons