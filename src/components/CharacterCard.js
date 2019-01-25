import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';
import './../styles/CharacterCard.scss';

class CharacterCard extends Component {
  render() {
        const {name, image, house, ancestry} =this.props;
        const noHouse = (house !== '') ? house:'No house Found';
        const noAncestry=(ancestry !== '') ? house: 'No ancestry Found';

        return (
            <Fragment>
                <img className="character__pic" src={image} alt ={name}/>
                <h2 className="character__name">{name}</h2>
                <div className="character__info">
                    <p className="character character__house">{`House: ${ noHouse}`}</p>
                    <p className="character character__ancestry">{`Ancestry:  ${noAncestry}`}</p>
                </div>
            </Fragment>    
        );
    }
}
CharacterCard.propTypes={
    name: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    house:PropTypes.string.isRequired,
    ancestry:PropTypes.string.isRequired
}

export default CharacterCard;