import React, { Component } from "react";

export class Image extends Component {
  render() {
    return <img src={this.props.i} alt="Peronal image" />;
  }
}

export default Image;
