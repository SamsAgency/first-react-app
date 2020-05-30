import React from 'react';
import './Addpersons.css';

class Addpersons extends React.Component {

    state = {
        name : null,
        age : null,
        profession: null,
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addPerson(this.state);
    }

render() {
    return(
        <div>
            <center> <br/>
                <form className ="form" onSubmit = {this.submitHandler} >
                    <label htmlFor="name">Name : </label>
                    <input className="input-classname" placeholder="Name" id="name" type="text" onChange={this.handleChange} /><br/>

                    <label htmlFor="name">Age : </label>
                    <input className="input-classname" placeholder="Age" id="age" type="text" onChange={this.handleChange} /><br/>

                    <label htmlFor="name">Profession : </label>
                    <input className="input-classname" placeholder="Profession" id="profession" type="text" onChange={this.handleChange} /><br/><br/>

                    <button>Submit</button>
                    {/* <button className="button2">switch names</button> */}
                </form>
            </center>
        </div>
    )
}

}
export default Addpersons