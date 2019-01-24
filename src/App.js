import React, { Component } from 'react';
import {fetchApi} from './services/CharacterService';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      query: '',
      characters: []

    }
    this.handleSearch=this.handleSearch.bind(this);
  }
  componentWillMount(){
    this.getApiCharacters();
  }


  handleSearch(e){
    const toSearch = e.currentTarget.value;
    this.setState({
      query: toSearch
    })
  }

  searchFilter(){
   const searchFiltered= this.state.characters.filter(item=>{
     const characterName=item.name;
     console.log(characterName);
     if (characterName.includes(this.state.query)){
        return true;
     }else{ 
       return false;
       }
     });
     return searchFiltered;
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
    const filteredCharacters=this.searchFilter();
    return (
      <div className="app">
       <header className="app__header">
          <h1 className="app__title">Harry Potter Characters</h1>
          <div className="app__search">
            <input type="text" className= "app__search--input" onKeyUp={this.handleSearch} placeholder="Search your favorito Harry Potter Character"></input>
          </div>
        </header>
      <ul className="app__list">
        {filteredCharacters.map(item=>{
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
