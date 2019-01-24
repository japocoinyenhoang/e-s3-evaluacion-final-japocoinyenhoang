import React, {Component} from "react";
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
              <ListItem 
                id={item.id} 
                name={item.name}
                image={item.image}
                house={item.house}
                ancestry={item.ancestry}
                />

            
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