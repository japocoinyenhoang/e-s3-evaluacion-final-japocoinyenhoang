import React, { Component } from 'react';
import {fetchApi} from './services/CharacterService';
import Filter from './components/Filter';
import './App.css';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

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
      this.setState({
        characters: newData
      })

    })
    
  }
  render() {
    const filteredCharacters=this.searchFilter();
    const {characters}=this.state;
    return (
      <div className="app">
       <header className="app__header">
          <h1 className="app__title">Harry Potter Characters</h1>
          <Filter action={this.handleSearch} />
        </header>
        <main className="app__main">
        <CharacterDetails details={characters} characterId={2}/>
        <CharacterList filteredCharacters={filteredCharacters} />
       </main>
      </div>
    );
  }
}

export default App;
