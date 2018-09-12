import React, { Component } from "react";
import "./App.css";

import Form from "./components/form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordList: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    console.log(formData);
    let mockResp = [
      { facility: "Atlanta", sampleType: "virus" },
      { facility: "Seattle", sampleType: "bacteria" }
    ];
    fetch("https://mywebsite.com/endpoint/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            recordList: mockResp
          });
        },
        error => {
          this.setState({
            recordList: mockResp
          });
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
