import React, {Component} from "react";
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
      const {id, name, image, house, ancestry} =this.props
    return (
        <li className="app__list__character" id={id} key={id}>
              <h2 className="character__name">{name}</h2>
              <img src={image} alt ={name}/>
              <p className="character__house">{`House : ${house}`}</p>
              <p className="character__ancestry">{`Ancestry : ${ancestry}`}</p>
            </li>
    );
  }
}
ListItem.PropTypes={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    house:PropTypes.string.isRequired,
    ancestry:PropTypes.string.isRequired
}

export default ListItem;