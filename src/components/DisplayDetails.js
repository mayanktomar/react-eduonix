import React from 'react'

export default function DisplayDetails(props) {
  return (
    <div>
      <h4>The details entered are displayed here:</h4>
      <p>Name: {props.details.name}</p>
      <p>Email: {props.details.email}</p>
      <p>Password: {props.details.password}</p>
      <p>Message: {props.details.message}</p>
    </div>
  )
}
