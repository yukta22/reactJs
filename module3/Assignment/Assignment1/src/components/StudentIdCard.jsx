import React, { Component } from "react";
import Image from "./Image";
import Personal from "./Personal";
import Collage from "./Collage";

export default class StudentIdCard extends Component {
  render() {
    // const {}

    return (
      <div className="container">
        <div className="main">
          <div className="personal">
            <Image i={this.props.e.img} />
          </div>
          <div className="personal2">
            <Personal p={this.props.e.Personal} />
          </div>
        </div>
        <div className="collage">
          <Collage c={this.props.e.Collage} />
        </div>
      </div>
    );
  }
}
