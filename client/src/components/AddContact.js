import React from 'react';

//class component
class AddContact extends React.Component{
  render() {
    return (
      <div className='ui main container'>
        <h3>Add Contact</h3>
        <form className='ui form'>
          <div className='field'>
            <label>Name</label>
            <input type='text' name='name' placeholder='Name' />
          </div>
          <div className='field'>
            <label>Email</label>
            <input type='text' name='email' placeholder='Email' />
          </div>
          <button className='ui button blue'>Add</button>
        </form>

      </div>
    );
  }
};

export default AddContact;