import React, {Component,Fragment} from "react";
import PropTypes from 'prop-types';
import FailedSearch from "./FailedSearch";
import GoBackLink from "./GoBackLink";

class CharacterDetails extends Component {
  render() {
    const {details}=this.props;
    const characterId=this.props.match.params.id;
    if (details.length === 0 || characterId >= details.length){
        return <FailedSearch />;

    }else {
        const selectedCharacter=details[characterId];
    return (
        <Fragment>
            <div className="Character__details">
                <h2 className="character__name">{selectedCharacter.name}</h2>
                <img src={selectedCharacter.image} alt ={selectedCharacter.name}/>
                <p className="character__house">{`House : ${selectedCharacter.house}`}</p>
                <p className="character__ancestry">{`Ancestry : ${selectedCharacter.ancestry}`}</p>
            </div>
            <GoBackLink />
        </Fragment>
    );}
  }
}
CharacterDetails.PropTypes={
    selectedCharacter: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.object
}


export default CharacterDetails;