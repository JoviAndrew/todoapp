import React, { Component } from "react";
import Task from "./Task";
import Title from "./Title";
import Axios from "axios";
import Create from "./Create";
import Update from "./Update";

class Content extends Component {
  state = {
    task: [],
    isModal: false
  };

  componentDidMount() {
    this.retrieveData();
  }

  setData = insertVal => {
    this.setState({
      task: [...this.state.task, insertVal]
    });
  };

  retrieveData = () => {
    Axios.get("/task")
      .then(res => {
        this.setState({
          task: res.data.taskdata
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = taskid => {
    const tempState = this.state.task.filter(function(singleTask) {
      return singleTask.taskid !== taskid;
    });

    this.setState({
      task: tempState
    });

    Axios.delete(`/task/delete/${taskid}`)
      .then(res => {
        console.log("delete success");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <Title name="Task List" />
        <div className="col-md-12 mt-4">
          <Create val={this.state.task} onInsert={this.setData} />
          <Task
            onDelete={this.handleDelete}
            value={this.state.task}
            modal={this.handleOpen}
          />
        </div>
      </div>
    );
  }
}

export default Content;
