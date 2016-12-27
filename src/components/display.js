import React from 'react';

const Style1 = {
  backgroundImage: 'url("https://static.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg")',
  // position:"absolute",
  WebkitBackgroundSize: 'cover', // note the capital 'W' here
  height:"100%",
  width:"100%",
  backgroundColor: "white",
  minHeight: 500,
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