import React from "react";
import { Input, Card, Button,CardBody,CardTitle,CardText } from "reactstrap";
import { useState } from "react";

import { dishDetails } from "../dishDetails";

export default function Search() {
  let [tital, setTital] = useState("");
  
  let searchdish = () => {
    return dishDetails.filter(
      (dish)=>{
        if(dish==""){
          return dish;
        }else{
          if(dish.title.toLowerCase().includes(tital.toLowerCase())){
            return dish;
          }
        }

      }
    ).map((data) => {
      return (
        <Card
          className="my-2"
          style={{
            width: "18rem",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">{data.title}</CardTitle>
            <CardText>
              {data.description}
            </CardText>
            <Button> <a href={data.url}></a>More Details</Button>
          </CardBody>
        </Card>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
        <br></br>
        <Input
          className="searchdish"
          type="text"
          placeholder="Search dishes"
          onChange={(e) => {
            setTital(e.target.value);
          }}
        />
        <br></br>
        {searchdish()}
      </div>
    </div>
  );
}
