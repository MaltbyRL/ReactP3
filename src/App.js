import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    console.log("Prop: ", this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3> Here are some numbers {this.props.propNumber}</h3>
        <h3> Here are some numbers {this.props.propString}</h3>
  <h3> Here are some numbers {this.props.propObject.obj1}</h3>
  <h3> Here are some numbers {this.props.propObject.obj2}</h3>
  <h3> Here are some numbers {this.props.propObject.obj3}</h3>
  <h3> Here are some numbers {this.props.propObject.obj4}</h3>
        <Parent />
      </div>
    );
  }
}

class Parent extends Component {
  render(){
    return(
      <div>
        <h1>Text from the parent: </h1>
        <Cars
          msg="I can do it!"
          richard="I am Richard! :-)"
          coolCars={this.props.cars}
          />
      </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber: 300,
  propString: "I am propString: ",
  propObject: {
    obj1: "I am object 1",
    obj2: "I am object 2",
    obj3: "I am object 3",
    obj4: "I am object 4",
  }

}

class Cars extends Component {
  render(){
    console.log("Cars: ", this.props);
    return(
      <div>
        <h3>I am from the "Cars" component! </h3>
        <p>{this.props.msg}</p>
        <p>{this.props.richard}</p>
        <p>{this.props.coolCars.map((item,i)=>{
            return i+": "+ item ;
          })}</p>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['audi', 'bmw', 'merc', 'jeep']
}

export default App;
