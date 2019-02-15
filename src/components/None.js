import React, { Component } from "react";

class None extends Component {
  state = {};

  handleClick = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Oopss you got nothing to do today.</h3>
            <button
              onClick={this.props.onClick}
              className="btn btn-primary mt-3"
            >
              Create Task Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default None;
