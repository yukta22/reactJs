import React, { Component } from "react";

export class Collage extends Component {
  render() {
    return (
      <article className="person">
        <div>
          <p>
            Collage Name: <span>{this.props.c.collegeName}</span>
          </p>
          <p>
            Collage Address: <span>{this.props.c.collegeAddress}</span>
          </p>
          <p>
            Collage Logo: <span>{this.props.c.collegeLogo}</span>
          </p>
        </div>
      </article>
    );
  }
}

export default Collage;
