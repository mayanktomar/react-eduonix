import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import { dishDetails } from '../dishDetails';

export default function DishDetails() {
  
  const displayDetails = () => {
    return(
      dishDetails.map((dishDetail)=>{
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
        <h2>Dish Details</h2>
        {displayDetails()}
      </div>
    </>
  )
}
