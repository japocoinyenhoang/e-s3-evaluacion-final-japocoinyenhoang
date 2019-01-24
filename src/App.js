import React, { Component } from 'react';
import {fetchApi} from './services/CharacterService';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      characters: this.saveCharacters()

    }
  }
  componentDidMount(){
    this.getLocalStorageCharacter();
  }
  saveCharacters(data){
    localStorage.setItem('savedCharacters', JSON.stringify(data));
  }

  getLocalStorageCharacter(){
      if (localStorage.getItem('savedCharacters') !== null) {
      const mySavedCharacters = JSON.parse(localStorage.getItem('savedCharacters'));
      this.setState({
        characters:mySavedCharacters  
      });
    }else{
         this.getApiCharacters();
    }
  }

   getAPICharacters(){
    fetchApi()
    .then(data=>{
      const newData=data.characters.map((item, index)=>{
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
