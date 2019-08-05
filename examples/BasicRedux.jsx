import * as React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReduxForm from './ReduxForm';


class Basic extends React.Component {
  render() {
  return (<ReduxForm />);
  }
}

const mapStateToProps = (state) => ({ 
  initialValues: {a:'b'},
 });
const form = reduxForm({
    form:'storybook-form'
})(Basic);

export default connect(mapStateToProps, null)(form);