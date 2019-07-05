import * as React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

const FieldWrapper = ({id,name,placeholder, ...rest}) => (
    <Field id={id} name={name} placeholder={placeholder} {...rest} />
);

const Input = ({label, type=`text`, id, input, ...restProps}) => {
    return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={input.name} type={type} {...restProps} value={input.value} {...input}/>
    </div>);
};

const getFields = (i) => {
  return (
    <React.Fragment>
      <FieldWrapper id={`${i}firstName`} name={`${i}firstName`} placeholder="John" component={Input}/>
      <FieldWrapper id={`${i}lastName`} name={`${i}lastName`} placeholder="Doe" component={Input}/>
      <FieldWrapper id={`${i}email`} name={`${i}email`} placeholder="john@acme.com" type="email" component={Input}/>
    </React.Fragment>
  );
}
const getMultipleFileds = () => {
  const toReturn = [];
  for(let i=0;i<300; i+=1){
    toReturn.push(getFields(i));
  }
  return toReturn;
}
 
const Basic =  () => (
  <div>
    <h1>Signup</h1>
        <form>
          {getMultipleFileds()}
          <button type="submit">Submit</button>
        </form>
  </div>
);
const mapStateToProps = (state) => ({ 
  initialValues: {a:'b'},
 });
const form = reduxForm({
    form:'storybook-form'
})(Basic);

export default connect(mapStateToProps, null)(form);