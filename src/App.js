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
        <h5> Here are some numbers {this.props.propNumber}</h5>
        <h5> Here are some numbers {this.props.propString}</h5>
  <h5> Here are some numbers {this.props.propObject.obj1}</h5>
  <h5> Here are some numbers {this.props.propObject.obj2}</h5>
  <h3> Here are some numbers {this.props.propObject.obj3}</h3>
  <h3> Here are some numbers {this.props.propObject.obj4}</h3>
        <Parent />
      </div>
    );
  }
}

class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: ['dodge', 'camry', 'audi', 'hummer']
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log("Clicked")
    this.setState({cars: this.state.cars.reverse()})
  }

  render(){
    return(
      <div>
        <h1 onClick={this.handleClick}>Text from the parent: Click to reverse.</h1>
        <Cars
          msg="I can do it!"
          richard="I am Richard! :-)"
          coolCars={this.state.cars.map((item, i) => {
            console.log("coolCars: ", item)
            return <p key={i}>{item}</p> ;
          })}
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
        <h3 >I am from the "Cars" component! </h3>
        <p>{this.props.msg}</p>
        <p>{this.props.richard}</p>
        <div>{this.props.coolCars.map((item,i)=>{
            return <div key={i}>{item}</div> ;
          })}</div>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['audi', 'bmw', 'merc', 'jeep']
}

export default App;
