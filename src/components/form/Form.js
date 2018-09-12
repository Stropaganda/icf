import React, { PureComponent } from "react";
import "./Form.css";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sampleIds: "",
      category: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id="input">
          <label>
            Sample Ids:
            <input
              type="text"
              name="sampleIds"
              value={this.state.sampleIds.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Category:
            <select
              value={this.state.category.value}
              onChange={this.handleChange}
              name="category"
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
