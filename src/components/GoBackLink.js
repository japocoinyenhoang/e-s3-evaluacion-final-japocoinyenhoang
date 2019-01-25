import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './../styles/GoBackLink.scss';

class GoBackLink extends Component {
  render() {
    return (
        <div className="link__container">
        <Link to="/" className="link link__return">Back to List</Link>
        </div>
    );
  }
}

export default GoBackLink;