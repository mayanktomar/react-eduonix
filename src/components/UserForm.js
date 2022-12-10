import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("Hello");
  }, [name]);

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input
            id="exampleName"
            name="name"
            placeholder="with a placeholder"
            type="text"
            onChange={props.onValueChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={props.onValueChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={props.onValueChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input
            id="exampleText"
            name="message"
            type="textarea"
            onChange={props.onValueChange}
          />
        </FormGroup>

        <Button onClick={props.onSubmitForm}>Submit</Button>
      </Form>
    </>
  );
}
