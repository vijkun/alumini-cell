import React from "react";
import './Carousel.css';
import { Carousel } from "react-bootstrap";

export default function Gallery(){
    return(
        <div>
            <Carousel>
            <Carousel.Item>
               <img
                   className="d-block w-100"
                   src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizeb/1484231521526212.jpg"
                   alt="First slide"
               />
               <Carousel.Caption>
                   <h5>First Convocation</h5>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/1484231521528752.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
                <h5>Second convocation</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/1484231521531834.jpg"
                 alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third convocation</h5>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/1484231521532712.jpg"
                 alt="Fourth slide"
                />
                <Carousel.Caption>
                  <h5>Fourth convocation</h5>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/1484231521532960.jpg"
                 alt="fifth slide"
                />
                <Carousel.Caption>
                  <h5>Fifth convocation</h5>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/539.jpg"
                 alt="sixth slide"
                />
                <Carousel.Caption>
                  <h5>Magnum opus 2019</h5>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/eventlogos/sizea/1912.jpg"
                 alt="seventh slide"
                />
                <Carousel.Caption>
                  <h5>Magnus opus 2020</h5>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBk8dqZlNOAQ4HdD6sFTCpQFHaxrsDllrCxjaxNn_xmDd9RCGQLvgEWEZdGx8jhK9k4w&usqp=CAU"
                 alt="eigth slide"
                />
                <Carousel.Caption>
                  <h5>Alumni meetup</h5>
               </Carousel.Caption>
            </Carousel.Item>
            

            </Carousel>
        </div>
    );
}