import React, {Component, Fragment} from "react";
import GoBackLink from "./GoBackLink";

class FailedSearch extends Component {
  render() {
    return (
      <Fragment>
        <p className="failed__result">Sorry, no matches found</p>
        <GoBackLink />
      </Fragment>
    );
  }
}

export default FailedSearch;