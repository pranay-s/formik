import React from 'react';
import { Formik, FastField, Form } from 'formik';

class FieldsForm extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render(){
    const {i} = this.props;
    return (
    <div key={i}>
      <label htmlFor={`${i}firstName`}>First Name</label>
      <FastField name={`${i}firstName`} placeholder="Jane" />

      <label htmlFor={`${i}lastName`}>Last Name</label>
      <FastField name={`${i}lastName`} placeholder="Doe" />

      <label htmlFor={`${i}email`}>Email</label>
      <FastField name={`${i}email`} placeholder="jane@acme.com" type="email" />
    </div>
    );
  }
}
const getFields = (i) => {
  return (
    <FieldsForm i = {i}/>
  );
}
const getMultipleFileds = () => {
  const toReturn = [];
  for(let i=0;i<300; i+=1){
    toReturn.push(getFields(i));
  }
  return toReturn;
}
class Basic extends React.PureComponent {
  render() {
    return (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      render={() => (
        <Form>
         {getMultipleFileds()}
         <button type="submit">Submit</button>
        </Form>
      )}
    />
  </div>
  );
  }
}

export default Basic;
