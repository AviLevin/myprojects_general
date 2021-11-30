import React, { Component } from "react";
import Project from "./Project/Project";
import classes from "./Projects.module.css";

class projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    fetch("/data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            projects: result,
          });
          console.log(result);
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const projects = this.state.projects;
    console.log("projects", projects);
    return (
      <div className={classes.container}>
        <div className="col-10">
          <div className={classes.row}>
            {projects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default projects;
