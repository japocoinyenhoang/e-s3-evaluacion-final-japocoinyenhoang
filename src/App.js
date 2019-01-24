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
      console.log(newData);

      this.setState({
        characters: newData
      })

    })
    
  }
  render() {
    return (
      <div className="app">
      <h1 className="app__title">Harry Potter Characters</h1>
      <ul className="app__list">
        {this.state.characters.map(item=>{
          console.log(item)
          return(
            <li className="app__list__character" id={item.id} key={item.id}>
              <h2 className="character__name">{item.name}</h2>
              <img src={item.image} alt ={item.name}/>
              <p className="character__house">{`House : ${item.house}`}</p>
              <p className="character__ancestry">{`Ancestry : ${item.ancestry}`}</p>
            </li>
          );
        })}
      </ul>
       ;P
      </div>
    );
  }
}

export default App;
