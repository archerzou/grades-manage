import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Typography } from '@material-ui/core';
import { Button, TextField, MenuItem } from '@material-ui/core';
import styles from './styles';

class AddUser extends Component {
  state = {
    name: '',

    email: '',
    password: '',
    role: ''
  };

  componentDidMount() {
    if (this.props.selectedUser) {
      const { name, email, password, role } = this.props.selectedUser;
      this.setState({
        name,
        email,
        password,
        role
      });
    }
  }

  handleChange = e => {
    this.setState({
      state: e.target.value
    });
  };

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };
    newState[field] = value;
    this.setState(newState);
  };

  onAddUser = () => {
    const user = { ...this.state };
    this.props.addUser(user);
  };

  onUpdateUser = () => {
    const user = { ...this.state };
    this.props.updateUser(user, this.props.selectedUser._id);
  };

  render() {
    const { classes, className, selectedUser } = this.props;
    const { name, email, password, role } = this.state;

    const rootClassName = classNames(classes.root, className);
    const title = selectedUser ? 'Edit User' : 'Add User';
    const submitButton = selectedUser ? 'Update User' : 'Add User';
    const submitAction = selectedUser ? () => this.onUpdateUser() : () => this.onAddUser();

    return (
      <div className={rootClassName}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <form autoComplete="off" noValidate>
          <div className={classes.field}>
            <TextField
              fullWidth
              className={classes.textField}
              helperText="Please specify the Full Name"
              label="Full Name"
              margin="dense"
              required
              value={name}
              variant="outlined"
              onChange={event => this.handleFieldChange('name', event.target.value)}
            />
            <TextField
              fullWidth
              select
              className={classes.textField}
              helperText="Teacher or Student"
              label="Role"
              margin="dense"
              required
              value={role}
              variant="outlined"
              onChange={event => this.handleFieldChange('role', event.target.value)}
            >
              {['student', 'teacher'].map(role => (
                <MenuItem key={`role-${role}`} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.field}>
            <TextField
              fullWidth
              className={classes.textField}
              label="Email"
              margin="dense"
              required
              value={email}
              variant="outlined"
              onChange={event => this.handleFieldChange('email', event.target.value)}
            />
            <TextField
              fullWidth
              className={classes.textField}
              label="Password"
              margin="dense"
              required
              value={password}
              variant="outlined"
              onChange={event => this.handleFieldChange('password', event.target.value)}
            />
          </div>
        </form>

        <Button
          className={classes.buttonFooter}
          color="primary"
          variant="contained"
          onClick={submitAction}
        >
          {submitButton}
        </Button>
      </div>
    );
  }
}

AddUser.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddUser));