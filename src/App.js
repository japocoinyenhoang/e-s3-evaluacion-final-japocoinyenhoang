import React, { Component } from 'react';
import {fetchApi} from './services/CharacterService';
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
    fetchApi()
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
