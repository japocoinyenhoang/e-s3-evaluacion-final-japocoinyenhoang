import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';

class CharacterCard extends Component {
  render() {
      const {name, image, house, ancestry} =this.props
    return (
        <Fragment>
              <h2 className="character__name">{name}</h2>
              <img src={image} alt ={name}/>
              <p className="character__house">{`House : ${house}`}</p>
              <p className="character__ancestry">{`Ancestry : ${ancestry}`}</p>
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