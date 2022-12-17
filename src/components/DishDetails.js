import { buildQueries } from '@testing-library/react';
import React from 'react';
import {Card, CardBody, CardTitle, Form, FormGroup, Label, Input, CardSubtitle, CardText, Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { dishDetails } from '../dishDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function DishDetails(props) {

  const [dishes,setDishes] = useState([]);
  const [isLoading,SetIsLoading] = useState(true);
  const [selectedDish,setSelectedDish] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    axios.get('/dishes')
    .then((response)=>{
      setTimeout(()=>{
        SetIsLoading(false);
        setDishes(response.data);
      },5000)
    })
    .catch((error)=>{
      console.log("Api error",error);
    })
  }, [])
  
  const fetchDishes = async () => {
    SetIsLoading(true);
    axios.get('/dishes')
    .then((response)=>{
      setTimeout(()=>{
        SetIsLoading(false);
        setDishes(response.data);
      },5000)
    })
    .catch((error)=>{
      console.log("Api error",error);
    })
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

  const onValueChange = (event) => {
    const value = event.currentTarget.value;
    if (event.currentTarget.name=='title') {
      setTitle(value);
    } else {
      setDescription(value);
    }
  }

  const onModalClose = () => {

    toggleModal();
   fetchDishes();
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
            setSelectedDish(dishDetail);
            toggleModal();
          }}>
            Click
          </Button>
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
          defaultValue={selectedDish.title}
          type="text"
          onChange={onValueChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">
        Description
        </Label>
        <Input
          id="exampleEmail"
          name="description"
          defaultValue={selectedDish.description}
          type="text"
          onChange={onValueChange}
        />
      </FormGroup>
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onModalClose}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
