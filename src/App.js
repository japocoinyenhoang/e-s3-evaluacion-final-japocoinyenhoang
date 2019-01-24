import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      characters: []
    }


  }
  componentDidMount(){
    this.getCharacters();
  }
  getCharacters(){
    const ENDPOIND='http://hp-api.herokuapp.com/api/characters/?results=25'

    fetch(ENDPOIND)
    .then (response=>response.json())
    .then(data=>{
      console.log (data)
    })
  }
  render() {
    return (
      <div className="App">
       ;P
      </div>
    );
  }
}

export default App;
