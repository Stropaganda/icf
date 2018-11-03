import React, { PureComponent } from "react";
import Button from "@material-ui/core/Button";
import "./Form.css";
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sampleIds: "",
      category: ""
    };
    this.initialState = this.state;

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
    const { classes } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          id="sampleIds"
          name="sampleIds"
          label="Sample Ids"
          className={classes.textField}
          value={this.state.sampleIds}
          onChange={this.handleChange}
          margin="normal"
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            value={this.state.category}
            onChange={this.handleChange}
            name="category"
            inputProps={{
              id: "category"
            }}
          >
            <MenuItem value="virus">Virus</MenuItem>
            <MenuItem value="bacteria">Bacteria</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" color="primary">
          Search
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  classes: PropTypes.any
};

export default withStyles(styles)(Form);
