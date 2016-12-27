import React from 'react';

const Style1 = {
  backgroundColor: "white",
  minHeight: 500
}

const Style2 = {
  backgroundColor: "gray",
  minHeight: 300
}



export default class Display extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="first" style={Style1}>
          <h2>FIRST DISPLAY </h2>
        </div>
        <div className="second" style={Style2}>
          <h2>SECOND DISPLAY </h2>
        </div>
      </div>
      );
  }
}