import React from "react";
import classes from "../Projects.module.css";

const Project = (props) => {
  

  return (
    <div className={classes.card}>
      <div className={classes.img_hover_zoom}>
        <img
          className={classes.imageArea}
          // style={mystyle}
          src={props.project.pic_url}
        />
      </div>
      <br></br>

      <br></br>

      <div className={classes["card-body"]}>
        <ul>
          <li>
            <b>
              <a href={props.project.github}>GitHub</a>{" "}
            </b>
          </li>
          <li>
            <b>
              <a href={props.project.live}>LIVE</a>{" "}
            </b>
          </li>
          <li>
            <b>Stack: </b> {props.stack}
          </li>
        </ul>
      </div>

      <br></br>
    </div>
  );
};

export default Project;
