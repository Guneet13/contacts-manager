import React from 'react';

//class component
class AddContact extends React.Component{
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();// don't want to refresh the page on button click
    if(this.state.name === "" || this.state.email === ""){
      alert("all fields required");
      return;
    }
    console.log(this.state);
    this.props.addContactHandler(this.state);
    this.setState({name:"",email:""});
  }
  render() {
    return (
      <div className='ui main container'>
        <h3>Add Contact</h3>
        <form className='ui form' onSubmit={this.add}>
          <div className='field'>
            <label>Name</label>
            <input 
            type='text' 
            name='name' 
            placeholder='Name'
            value= {this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}/>
          </div>
          <div className='field'>
            <label>Email</label>
            <input 
            type='text' 
            name='email' 
            placeholder='Email' 
            value= {this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}/>
          </div>
          <button className='ui button blue'>Add</button>
        </form>

      </div>
    );
  }
};

export default AddContact;