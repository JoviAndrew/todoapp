import React, { Component } from "react";
import Axios from "axios";
import styled from "styled-components";

class Update extends Component {
  state = {
    taskid: "",
    taskname: "",
    taskdesc: "",
    taskdone: ""
  };

  updateData = task => {
    console.log(task);

    Axios.put(`/task/update/${task.taskid}`, {
      taskname: task.taskname,
      taskdesc: task.taskdesc,
      taskdone: task.taskdone
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { taskid, taskname, taskdesc, taskdone } = this.props.currentData;
    console.log(this.props.currentData);

    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4 mb-5">
              <div id="modal" className="col-md-6 mx-auto box">
                <h3 className="mb-5 text-center">Update a Task</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="task">
                      <strong>Task ID</strong>
                    </label>
                    <input
                      value={taskid}
                      type="text"
                      className="form-control"
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="task">
                      <strong>Task</strong>
                    </label>
                    <input
                      value={taskname}
                      type="text"
                      className="form-control"
                      placeholder="Playing, gym, coding.."
                      onChange={e =>
                        this.setState({
                          taskid,
                          taskname: e.target.value
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="task">
                      <strong>Description</strong>
                    </label>
                    <input
                      value={taskdesc}
                      type="text"
                      className="form-control"
                      placeholder="Playing bla2"
                      onChange={e =>
                        this.setState({
                          taskdesc: e.target.value
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <strong>To be done by</strong>
                    </label>
                    <input
                      value={taskdone}
                      type="text"
                      className="form-control"
                      placeholder="Tommorow, Today.."
                      onChange={e =>
                        this.setState({
                          taskdone: e.target.value
                        })
                      }
                    />
                  </div>

                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.updateData(this.state);
                      this.props.modalClose(false);
                    }}
                    className="btn btn-success mt-3"
                  >
                    Update Task
                  </button>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      this.props.modal(false);
                    }}
                    className="btn btn-secondary mt-3 ml-4"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: white;
  }
`;

export default Update;
