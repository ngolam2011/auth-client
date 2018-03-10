import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  };

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

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
      {this.renderAlert()}
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signin = reduxForm({ form: 'sigin', fields: ['email', 'password'] })(Signin);
export default connect(mapStateToProps, actions)(Signin);
