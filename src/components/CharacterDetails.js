import React, {Component,Fragment} from "react";
import PropTypes from 'prop-types';
import FailedSearch from './FailedSearch';
import GoBackLink from './GoBackLink';
import noAlivePic from './../images/noAlivePic.png';
import './../styles/CharacterDetails.scss';

class CharacterDetails extends Component {
    
  render() {
    const {details}=this.props;
    const characterId=this.props.match.params.id;
    if (details.length === 0 || characterId >= details.length){
        return <FailedSearch />;
    }else {
        const selectedCharacter=details[characterId];
        const noHouse = (selectedCharacter.house !== '') ? selectedCharacter.house:'No house Found';
        const noAncestry=(selectedCharacter.ancestry !== '') ? selectedCharacter.ancestry: 'No ancestry Found';
        const noPatronus=(selectedCharacter.patronus !== '') ? selectedCharacter.patronus: 'No patronus Found';
        function aliveOrNot(){
            if(selectedCharacter.alive!==true ){
                return (
                    <span className="noalive">
                        <p className="character__alive--result">NOT</p>
                        <img className="icon noalive__pic" src={noAlivePic} alt="RIP"/>
                    </span>
                    );
            }else{
                return <span className="character__alive--result">YES</span>
            }
        };

    return (
        <Fragment>
            <div className="character__details">
                <img className="character__details--img" src={selectedCharacter.image} alt ={selectedCharacter.name}/>
                <div className="character__details--info">
                    <h2 className="character__name">{selectedCharacter.name}</h2>
                    <p className="character__house">{`House: ${noHouse}`}</p>
                    <p className="character character__ancestry">{`Ancestry: ${noAncestry}`}</p>
                    <p className="character__patronus">{`Patronus: ${noPatronus}`}</p>
                    <div className="character__alive--container">
                        <p className="character__alive">Alive??? {aliveOrNot()}</p>
                    </div>
                </div>
            </div>
            <GoBackLink />
        </Fragment>
    );}
  }
}
CharacterDetails.propTypes={
    selectedCharacter: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.object
}


export default CharacterDetails;