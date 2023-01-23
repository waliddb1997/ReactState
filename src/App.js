
import "./App.css";
import React, { useState } from "react";
class App extends React.Component {
  state = {
    Person: {
      fullName: "Dabbaghi Walid",
      bio: "I just love  developed",
      imgSrc: "imgg.jpg",
      profession: "full stack developer",
    },
    show: true,
  };
  ShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  
  
  

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <div className="App-header">
              <div className="container">
                <h1> {this.state.Person.fullName}</h1>
                <div className="logoo">
                  <img src={this.state.Person.imgSrc} alt="logo" />
                </div>
                <div className="box">
                  <h2>{this.state.Person.bio} </h2>
                  <h3>{this.state.Person.profession}</h3>
                </div>
                
              </div>
            </div>
        
          </>
        )}
        <div className="btn">
          <button onClick={this.ShowPerson}>click here</button>
        </div>
      </>
    );
  }
}

export default App;
