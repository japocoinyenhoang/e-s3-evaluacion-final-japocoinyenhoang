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
    this.getApiCharacters();
  }
 

   getApiCharacters(){
    fetchApi()
    .then(data=>{
      const newData=data.map((item, index)=>{
        return {...item, id:index};
      });
      this.setState({
        characters: newData
      })
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
