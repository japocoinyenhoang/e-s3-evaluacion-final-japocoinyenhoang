import React, {Component} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FailedSearch from "./FailedSearch";

class CharacterDetails extends Component {
  render() {
    const {details}=this.props;
    const characterId=this.props.match.params.id;
    if (details.length === 0 || characterId>=details.length){
        return <FailedSearch />;

    }else {
        const selectedCharacter=details[characterId];
    return (
        <React.Fragment>
        <div className="Character__details">
              <h2 className="character__name">{selectedCharacter.name}</h2>
              <img src={selectedCharacter.image} alt ={selectedCharacter.name}/>
              <p className="character__house">{`House : ${selectedCharacter.house}`}</p>
              <p className="character__ancestry">{`Ancestry : ${selectedCharacter.ancestry}`}</p>
        </div>
        <div className="link__container">
        <Link to="/" className="link link__return">Return</Link>
        </div>
        </React.Fragment>
    );}
  }
}
CharacterDetails.PropTypes={
    selectedCharacter: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.object
}


export default CharacterDetails;