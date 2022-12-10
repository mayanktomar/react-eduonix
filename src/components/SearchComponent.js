import { useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { dishDetails } from "../dishDetails";
import { Button } from "reactstrap";

export default function SearchComponent() {
  const [searchIerm, setSearchIerm] = useState("");

  const filteredResult = dishDetails.filter((val) => {
    // console.log(val);
    if (searchIerm === "") {
      console.log(val);
      return val;
    } else if (
      val.title.toLocaleLowerCase().includes(searchIerm.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  // useEffect(() => {
  //   filteredResult();
  // }, [searchIerm]);

  return (
    <>
      <div className="container my-3">
        <form className="d-flex" role="search">
          <input
            className="form-control me-3 bg-light"
            name="InputField"
            type="search"
            placeholder="Search Your Fav Dish"
            aria-label="Search"
            onChange={(e) => setSearchIerm(e.target.value)}
          />
        </form>

        <div className="container row my-4">
          {filteredResult.map((val) => {
            return (
              <div className="col-md-4 my-3" key={val.title}>
                <Card
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src={val.imageSrc} />
                  <CardBody>
                    <CardTitle tag="h5">{val.title}</CardTitle>
                    <CardText>{val.description}</CardText>
                    <Button>
                      <a href={val.url}>Click</a>
                    </Button>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
