import React, { Component } from "react";
import { connect } from 'react-redux'

import Axios from "axios";

// Redux
import { addNewTask } from '../redux/taskActions'

class Create extends Component {
  state = {
    taskname: "",
    taskdesc: "",
    taskdone: ""
  };

  insertData = () => {
    // const length = this.props.val.length;
    let getLastId = 99;
    // if (length !== 0) {
    //   getLastId = this.props.val[length - 1].taskid + 1;
    // }

    const { taskname, taskdesc, taskdone } = this.state;

    const insertData = {
      taskid: getLastId,
      taskname,
      taskdesc,
      taskdone
    };

    this.props.addNewTaskToRedux(insertData);
    // Axios.post("/task/insert", insertData)
    //   .then(res => {
    //     console.log("Insert Status", res.status);

    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    this.setState({
      taskname: "",
      taskdesc: "",
      taskdone: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4 mb-5">
            <h3 className="mb-5 text-center">Create New Task</h3>
            <div className="col-md-6 mx-auto box">
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="task">
                    <strong>Task</strong>
                  </label>
                  <input
                    onChange={e => {
                      this.setState({
                        taskname: e.target.value
                      });
                    }}
                    type="text"
                    value={this.state.taskname}
                    className="form-control"
                    placeholder="Playing, gym, coding.."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="task">
                    <strong>Description</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.taskdesc}
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
                    type="text"
                    className="form-control"
                    value={this.state.taskdone}
                    placeholder="Tommorow, Today.."
                    onChange={e =>
                      this.setState({
                        taskdone: e.target.value
                      })
                    }
                  />
                </div>

                <button
                  onClick={() => {
                    this.insertData();
                  }}
                  className="btn btn-success mt-3"
                >
                  Submit Task
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewTaskToRedux: (task) => dispatch(addNewTask(task))
})

export default connect(null, mapDispatchToProps)(Create);
