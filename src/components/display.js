import React from 'react';
import {Component} from 'react';
import './app.css';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';


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
            <Grid>
              <Row>
                <Col md={4}><h3>Come, write code and participate at this hackathon that serves as a festival that will feature congregations of local coders just like you. You're invited to come and show what you've got in a competitive yet friendly and supportive environment. </h3></Col>
                <Col md={4}><h3>Be a part of history at our first-ever hackathon. This is going to be our very first hackathon, so why not be a part of the start of something special? Come out and join us! </h3></Col>
                <Col md={4}><h3>Register and sign up by entering your email...</h3></Col>
              </Row>
            </Grid> 
          </div> 




      </div>
      );
  }
}