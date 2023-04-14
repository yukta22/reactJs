import React, { Component } from "react";

export class Personal extends Component {
  render() {
    return (
      <article className="person">
        <div>
          <p>
            ID: <span>{this.props.p.Id}</span>
          </p>
          <p>
            First Name: <span>{this.props.p.firstName}</span>
          </p>
          <p>
            Last Name: <span>{this.props.p.lastName}</span>
          </p>
          <p>
            DOB: <span>{this.props.p.DOB}</span>
          </p>
        </div>
      </article>
    );
  }
}

export default Personal;
