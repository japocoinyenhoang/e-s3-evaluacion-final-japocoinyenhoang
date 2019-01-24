import React, {Component} from "react";
import{Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from './ListItem';


class CharacterList extends Component {
  render() {
      const {filteredCharacters}= this.props
    return (
        <ul className="app__list">
        {filteredCharacters.map(item=>{
          console.log(item)
          return(
            <li className="app__list__character" id={item.id} key={item.id}>
            <Link to={`character/${item.id}`} className="link link__details">
              <ListItem 
                id={item.id} 
                name={item.name}
                image={item.image}
                house={item.house}
                ancestry={item.ancestry}
                />
            </Link>
            </li>
            
          );
        })}
      </ul>

    );
  }
}
CharacterList.PropTypes={
    filteredCharacters: PropTypes.arrayOf(PropTypes.object)
}

export default CharacterList;