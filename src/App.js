import React, { Component } from "react";
import "./App.css";

import Form from "./components/form/Form";
import RecordList from "./components/record-list/RecordList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordListTitles: ["Facility", "Sample Type"],
      recordList: [{}, {}, {}, {}, {}]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    let mockResp = [
      { facility: "Atlanta", sampleType: "virus" },
      { facility: "Seattle", sampleType: "bacteria" },
      {},
      {},
      {}
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
        <RecordList
          recordListTitles={this.state.recordListTitles}
          recordList={this.state.recordList}
        />
      </div>
    );
  }
}

export default App;
