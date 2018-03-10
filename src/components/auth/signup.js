import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
    return (
      <form>
        <fieldset>
          <label>Email</label>
          <div>
            <Field name="email" component="input" className="form-control" tpe="text" />
          </div>
        </fieldset>
        <fieldset>
          <label>Password</label>
          <div>
            <Field name="password" component="input" className="form-control" tpe="text" />
          </div>
        </fieldset>
        <fieldset>
          <label>Confirm Password</label>
          <div>
            <Field name="passwordConfirm" component="input" className="form-control" tpe="text" />
          </div>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};
  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = "Password must match";
  }

  return errors;
}


Signup = reduxForm({ form: 'signup', fields: ['email', 'password', 'passwordConfirm'], validate })(Signup);
export default connect(null, actions)(Signup);


