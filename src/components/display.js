import React from 'react';
import {Component} from 'react';
import './app.css';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


const Style1 = {
  backgroundImage: 'url("http://4.bp.blogspot.com/-v95TY0bAoVc/VfEHTPbnyOI/AAAAAAAA4ck/cg6Ra0creME/s1600/15660.jpg")',
  // position:"fixed",
  WebkitBackgroundSize: 'cover', // note the capital 'W' here
  height:"100%",
  width:"100%",
  backgroundColor: "white",
  minHeight: 700,
}

// this is the second style for a second component, if need be
const Style2 = {
  backgroundImage: 'url("http://4.bp.blogspot.com/-v95TY0bAoVc/VfEHTPbnyOI/AAAAAAAA4ck/cg6Ra0creME/s1600/15660.jpg")',
  // position:"fixed",
  WebkitBackgroundSize: 'cover', // note the capital 'W' here
  height:"100%",
  width:"100%",
  backgroundColor: "white",
  minHeight: 600,
}



export default class Display extends React.Component{
  render(){
    return(
      <div>



          <div className="first" style={Style1}>
            <h2 className="firsth2">Come and Write Code ...</h2>
            <h2 className="secondh2">JSNYC hackathon</h2>
            <h2 className="thirdh2">03/07/17</h2>
          </div>

          <div className="second" style={Style2}> 
            <Container fluid={true}>
              <Row>
                <Col md="4">md-4</Col>
                <Col md="4">md-4</Col>
                <Col md="4">md-4</Col>
              </Row>
            </Container> 
            <h3>SECOND DISPLAY, THIS SECTION SHOULD HAVE A GRID SYSTEM WITH MORE INFO ABOUT THE EVENT </h3>
          </div> 




      </div>
      );
  }
}