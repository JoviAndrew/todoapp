import React, { Component } from "react";
import { Link } from "react-router-dom";
import Update from "./Update";

class Task extends Component {
  state = {
    isModal: false
  };

  handleModal = modalVal => {
    this.setState({
      isModal: modalVal
    });
  };
  render() {
    const { value } = this.props;

    return (
      <div className="container">
        <div className="row">
          {value.map((task, i) => {
            return (
              <div key={i} className="col-md-4 mt-4">
                <div className="card" width="18rem">
                  <div className="card-header">{task.taskname}</div>
                  <div className="card-body">
                    <h5 className="card-title">{task.taskdesc}</h5>
                    <p className="card-text">{task.taskdone}</p>
                    <button
                      onClick={e => {
                        e.preventDefault();

                        this.handleModal(true);
                      }}
                      className="btn btn-primary btn-color-white mr-3"
                    >
                      Update
                    </button>

                    <button
                      onClick={e => {
                        e.preventDefault();
                        this.props.onDelete(task.taskid);
                      }}
                      className="btn btn-danger btn-color-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {this.state.isModal === true ? (
                  <Update currentData={task} modal={this.handleModal} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Task;
