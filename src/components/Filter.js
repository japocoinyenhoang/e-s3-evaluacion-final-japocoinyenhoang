import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
        <div className="app__search">
        <input type="text" className= "app__search--input" onKeyUp={this.props.action} placeholder="Search your favorito Harry Potter Character"></input>
      </div>

    );
  }
}
Filter.propTypes={
    action: PropTypes.func.isRequired
}
export default Filter;