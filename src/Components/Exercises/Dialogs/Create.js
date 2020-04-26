import React, { Fragment, Component } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
  Button,
  DialogActions,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  withStyles
} from "@material-ui/core";

import { Add } from "@material-ui/icons";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      exercise: { title: "", description: "", muscles: "" }
    };

    handleToggle = () => this.setState({ open: !this.state.open });
    handleChange = name => event => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: event.target.value
        }
      });
    };

    handleSumbit = () => {
      //TODO: validate
      const { exercise } = this.state;
      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
      });
      this.setState({
        open: false,
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
    };

    render() {
      const {
        open,
        exercise: { title, description, muscles }
      } = this.state;
      const { classes, muscles: categories } = this.props;
      return (
        <Fragment>
          <Button varient="fab" onClick={this.handleToggle} mini>
            <Add />
          </Button>
          <Dialog
            open={open}
            onClose={this.handleToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Create a New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below.
              </DialogContentText>
              <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange("title")}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                  <InputLabel id="demo-simple-select-label">Muscles</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={muscles}
                    onChange={this.handleChange("muscles")}
                  >
                    {categories.map(cat => (
                      <MenuItem value={cat}>{cat}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <TextField
                  multiline
                  rows="4"
                  label="Description"
                  value={description}
                  onChange={this.handleChange("description")}
                  margin="normal"
                  className={classes.FormControl}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleSumbit}>
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
