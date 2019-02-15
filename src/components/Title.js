import React from "react";

function Title(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mt-4">
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Title;
