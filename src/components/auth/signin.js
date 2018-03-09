import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  };

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    
    return (
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className="form-group">
        <label>Email</label>
      <div>
        <Field name="email" component="input" className="form-control" tpe="text" />
      </div>
      </fieldset>
      <fieldset className="form-group">
        <label>Password </label>
      <div>
        <Field name="password" component="input" type="text" className="form-control" />
      </div>
      </fieldset>
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
    );
  }
}

export default reduxForm({
  form: "signin",
  fields: ["email", "password"]
},null, actions)(Signin);
