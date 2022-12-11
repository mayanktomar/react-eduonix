import axios from 'axios';
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
  
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((json)=>{
      console.log(json);
    })
    .catch(()=>console.log("Error occured while calling the api"))
  }


  storeDetails = (event) => {
    let name = event.target.name;  //email
    let value = event.target.value; //m@gmail.com
    this.setState({[name]:value}); 
  }

  submitForm = () => {
    axios.post('/feedback',
    {
      name:this.state.name,
      email:this.state.email,
      password:this.state.password,
      message:this.state.message
    })
    .then((response)=>{
      alert("Feedback data saved successfully");
      this.setState({output:
        {
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          message:this.state.message
        }
      })
    })
    .catch((error)=>{
      alert("Failed to save the feedback");
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





















