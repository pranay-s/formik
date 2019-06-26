import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Debug } from './Debug';
const getFields = (i) => {
  return (
    <React.Fragment>
    <label htmlFor={`${i}firstName`}>First Name</label>
    <Field name={`${i}firstName`} placeholder="Jane" />
`
    <label htmlFor={`${i}lastName`}>Last Name</label>
    <Field name={`${i}lastName`} placeholder="Doe" />

    <label htmlFor={`${i}email`}>Email</label>
    <Field name={`${i}email`} placeholder="jane@acme.com" type="email" />
    </React.Fragment>
  );
}
const getMultipleFileds = () => {
  const toReturn = [];
  for(let i=0;i<100; i+=1){
    toReturn.push(getFields(i));
  }
  return toReturn;
}
const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
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

export default Basic;
