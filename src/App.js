import React, { Component } from 'react';
import {fetchApi} from './services/CharacterService';
import {Route, Switch} from 'react-router-dom';
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
          <Switch>
              <Route exact path="/" render={()=><Filter action={this.handleSearch}/>} />
          </Switch>
        </header>
        <main className="app__main">
        <Switch>
              <Route exact path="/" render={()=><CharacterList filteredCharacters={filteredCharacters} />} />
              <Route exact path="/details/:id" render={props=><CharacterDetails  match={props.match} details={characters} characterId={2}/>} />
        </Switch>
       </main>
      </div>
    );
  }
}

export default App;
