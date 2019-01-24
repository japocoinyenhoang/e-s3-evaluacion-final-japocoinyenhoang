import React, {Component} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterDetails extends Component {
  render() {
    const {details, characterId}=this.props
    if (details.length === 0 || characterId>details.length){
        return <p>Sorry, no matches found</p>

    }else {
        const selectedCharacter=details[characterId];
    return (
        <React.Fragment>
        <div className="Character__details">
        <li className="app__list__character" id={characterId} key={characterId}>
              <h2 className="character__name">{selectedCharacter.name}</h2>
              <img src={selectedCharacter.image} alt ={selectedCharacter.name}/>
              <p className="character__house">{`House : ${selectedCharacter.house}`}</p>
              <p className="character__ancestry">{`Ancestry : ${selectedCharacter.ancestry}`}</p>
        </li>
        </div>
        <div className="link__container">
        <Link to="/" className="link link__return" />Return 
        </div>
        </React.Fragment>
    );}
  }
}
CharacterDetails.PropTypes={
    selectedCharacter: PropTypes.arrayOf(PropTypes.object)
}


export default CharacterDetails;