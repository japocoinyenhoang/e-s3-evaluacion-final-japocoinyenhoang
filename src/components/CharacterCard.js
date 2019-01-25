import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';

class CharacterCard extends Component {
  render() {
        const {name, image, house, ancestry} =this.props
        if(house=== null){return house='no data found';}
        
    return (
        <Fragment>
                <img className="character__pic" src={image} alt ={name}/>
                <h2 className="character__name">{name}</h2>
                <div className="character__info">
                    <p className="character__house">{`House:  ${house}`}</p>
                    <p className="character__ancestry">{`Ancestry:  ${ancestry}`}</p>
                </div>
            
        </Fragment>    
    );
  }
}
CharacterCard.PropTypes={
    name: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    house:PropTypes.string.isRequired,
    ancestry:PropTypes.string.isRequired
}

export default CharacterCard;