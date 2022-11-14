import React, { Component } from 'react'
import DisplayDetails from './DisplayDetails'
import UserForm from './UserForm'

export class UserFormLayout extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      email:'',
      password:'',
      message:'',
      output:{}
    }
  }

  storeDetails = (event) => {
    let name = event.target.name;  //email
    let value = event.target.value; //m@gmail.com
    this.setState({[name]:value}); 
  }

  submitForm = () => {
    this.setState({output:
    {
      name:this.state.name,
      email:this.state.email,
      password:this.state.password,
      message:this.state.message
    }
  })
  }
  render() {
    return (
      <>
        <div className='container'>
          <h2>User Form</h2>
          <div className='row'>
            <div className='col-md-6'>
              <UserForm onValueChange={this.storeDetails} onSubmitForm={this.submitForm}/>
            </div>
            <div className='col-md-6'>
              <DisplayDetails details={this.state.output}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default UserFormLayout