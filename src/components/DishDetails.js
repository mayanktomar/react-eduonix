import { buildQueries } from '@testing-library/react';
import React from 'react';
import {Card, CardBody, CardTitle, Form, FormGroup, Label, Input, CardSubtitle, CardText, Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { dishDetails } from '../dishDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function DishDetails() {

  const [dishes,setDishes] = useState([]);
  const [isLoading,SetIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('/dishes')
    .then((response)=>{
      setTimeout(()=>{
        SetIsLoading(false);
        setDishes(response.data);
      },1000)
    })
    .catch((error)=>{
      console.log("Api error",error);
    })
  }, [])
  
  const fetchDishes = () => {
    SetIsLoading(true);
    axios.get('/dishes')
    .then((response)=>{
      setTimeout(()=>{
        SetIsLoading(false);
        setDishes(response.data);
      },100)
    })
    .catch((error)=>{
      console.log("Api error",error);
    })
  }

  const updateDishesState = () => {
    const dishesToChange = dishes; //creating a copy of dishes state
    const index = dishes.indexOf(selectedDish); //finding index number of selected dish inside dishes
    selectedDish.title = title; //updating selected dish with new title
    selectedDish.description = description; //updating selected dish with new description

    dishesToChange[index] = selectedDish; //Updating the element at the repective index number with the new object

    setDishes(dishesToChange); //updating dishes state with the changed copy
  }

  const styling = {
    heading : {
      color:'red',
    backgroundColor:'blue'
    },
    paragraph: {
      color:'grey'
    }
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const updateDish = () => {
    console.log("Selected Dish",selectedDish);
    console.log("Title",title);
    console.log("Description",description);
    axios.put('/updateDish/'+selectedDish._id,{
      title: title,
      description: description
    })
    .then((response)=>{
      console.log(response);
      toggleModal();
      updateDishesState();
    })
    .catch((error)=>{
      console.log(error);
      alert(error);
    })
    
  }

  const deleteDish = () => {
    axios.delete('/deleteDish/'+selectedDish._id)
    .then((response)=>{
      console.log(response);
      fetchDishes();
    })
    .catch((error)=>{
      console.log(error);
      alert(error);
    })
  }

  const onValueChange = (event) => {
    const value = event.target.value;
    if (event.target.name=='title') {
      setTitle(value);
    } else {
      setDescription(value);
    }
  }
  
  const displayDetails = () => {
    return(
      dishes.map((dishDetail)=>{
        console.log(dishDetail);
        return (
          <div className='col-md-4'>
          <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Sample"
          src={dishDetail.imageSrc}
        />
        <CardBody>
          <CardTitle tag="h5">
            {dishDetail.title}
          </CardTitle>
          <CardText>
            {dishDetail.description}
          </CardText>
          <Button onClick={()=>{
            setSelectedDish(dishDetail)
            setTitle(dishDetail.title)
            setDescription(dishDetail.description)
            toggleModal();
          }}>
            Update
          </Button>

          <Button onClick={()=>{
            setSelectedDish(dishDetail)
            deleteDish();
          }}>Delete</Button>
        </CardBody>
      </Card>
        </div>
        )
      
              
      })
    )
  }

  return (
    <>
      <div className='row'>
        <h2 style={styling.heading}>Dish Details</h2>
        <p style={styling.paragraph}>Here are details of our popluar dishes</p>
        {isLoading ? <Spinner>Loading...</Spinner> : displayDetails()}
      </div>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
        <Form >
          <FormGroup>
                <Label for="exampleName">
                  Title
                </Label>
                <Input
                  id="exampleName"
                  name="title"
                  placeholder="with a placeholder"
                  type="text"
                  defaultValue={selectedDish.title}
                  onChange={onValueChange}
                />
          </FormGroup>
          <FormGroup>
                <Label for="exampleName">
                  Description
                </Label>
                <Input
                  id="exampleName"
                  name="description"
                  placeholder="with a placeholder"
                  type="text"
                  defaultValue={selectedDish.description}
                  onChange={onValueChange}
                />
          </FormGroup>
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateDish}>
            Update
          </Button>{' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
