import React, { Component } from "react";
import data from "./data";
import StudentIdCard from "./components/StudentIdCard";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <div className="app">
        {this.state.data.map((element) => {
          return <StudentIdCard e={element} key={element.Personal.Id} />;
        })}
      </div>
    );
  }
}

export default App;
