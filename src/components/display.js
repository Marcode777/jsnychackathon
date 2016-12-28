import React from 'react';

const Style1 = {
  backgroundImage: 'url("http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-19.png")',
  // position:"fized",
  WebkitBackgroundSize: 'cover', // note the capital 'W' here
  height:"100%",
  width:"100%",
  backgroundColor: "white",
  minHeight: 600,
}

const Style2 = {
  backgroundColor: "gray",
  minHeight: 300
}



export default class Display extends React.Component{
  render(){
    return(
      <div>

        

          <div className="first" style={Style1}>
            <h1 style={{color:'white'}}>JSNYC --- HACKATHON</h1>
            <h3></h3>
          </div>
          <div className="second" style={Style2}>
            <h2>SECOND DISPLAY </h2>
          </div>



      </div>
      );
  }
}