import { buildQueries } from '@testing-library/react';
import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Spinner} from 'reactstrap';
import { dishDetails } from '../dishDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function DishDetails() {

  const [dishes,setDishes] = useState([]);
  const [isLoading,SetIsLoading] = useState(true);

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
  

  const styling = {
    heading : {
      color:'red',
    backgroundColor:'blue'
    },
    paragraph: {
      color:'grey'
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
          <Button>
            <a href={dishDetail.url}>Click</a>
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
    </>
  )
}
