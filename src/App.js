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
    this.getSavedCharacters();
  }


  handleSearch(e){
    const toSearch = e.currentTarget.value;
    this.setState({
      query: toSearch
    })
  }

 
  searchFilter(){
    const {characters, query} =this.state;
   return characters.filter(item=>item.name.toUpperCase().includes(query.toUpperCase()));
}

   
      
      


   getApiCharacters(){
    fetchApi()
    .then(data=>{
      const newData=data.map((item, index)=>{
        return {...item, id:index};
      });
      this.saveCharacters(newData);
      this.setState({
        characters: newData
      })

    })
    
  }
  saveCharacters(data){
    localStorage.setItem('Howards',JSON.stringify(data));
  }

  getSavedCharacters (){
    if (localStorage.getItem('Howards')!== null){
    const savedCharacters=JSON.parse(localStorage.getItem('Howards'));
    this.setState({
      characters: savedCharacters
    });
  } else{
    this.getApiCharacters();
  }
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
