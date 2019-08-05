import React from 'react';
import { Formik, Form } from 'formik';
import Input from './Input';

class FieldsForm extends React.Component {
  render(){
    const {i, handleChange, values={}} = this.props;
    return (
    <div key={i}>
      <Input
        name={`${i}firstName`}
        type="text"
        ltext="First Name"
        onChange={handleChange}
        value={values[`${i}firstName`] || ''}
      />
      <Input
        name={`${i}lastName`}
        type='text'
        ltext="Last Name"
        onChange={handleChange}
        value={values[`${i}lastName`] || ''}
      />
      <Input
        name={`${i}email`}
        type="email"
        ltext="Email"
        onChange={handleChange}
        value={values[`${i}email`] || ''}
        />
    </div>
    );
  }
}
const getFields = (i, props) => {
  return (
    <FieldsForm i = {i} {...props}/>
  );
}
const getMultipleFileds = (props) => {
  const toReturn = [];
  for(let i=0;i<300; i+=1){
    toReturn.push(getFields(i, props));
  }
  return toReturn;
}
class Basic extends React.Component {
  render() {
    return (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{}}
      render={(props) => (
        <Form>
         {getMultipleFileds(props)}
         <button type="submit">Submit</button>
        </Form>
      )}
    />
  </div>
  );
  }
}

export default Basic;
