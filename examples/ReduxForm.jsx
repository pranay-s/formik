import React from 'react';
import deepEqual from 'deep-equal';
import { Field } from 'redux-form';

class FieldWrapper extends React.Component {
    render() {
        const {id,name,placeholder, ...rest} = this.props;
        return(
        <Field id={id} name={name} placeholder={placeholder} {...rest} />
    );
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            initRenderTime:0,
            reRenderTime:[]
          }
        }
        componentDidMount() {
          this.setState({initRenderTime:new Date().getTime() % 10000000});
        }
        componentDidUpdate(prevProps) {
          if (!deepEqual(prevProps, this.props)) {
            this.setState({ reRenderTime: this.state.reRenderTime.concat(new Date().getTime() % 10000000) });
          }
        }
    render() {
    const {label, type=`text`, id, input, ...restProps} = this.props;
    return (
    <div>
        <div>Init at: {this.state.initRenderTime}</div>
        <div>Updated at: {this.state.reRenderTime.join(',')} </div>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={input.name} type={type} {...restProps} value={input.value} {...input}/>
    </div>);
    }
};

class InpFields extends React.Component {
  render() { 
    const { i } = this.props;
    return (
    <React.Fragment>
      <label htmlFor={`${i}firstName`}>First Name</label>
      <FieldWrapper id={`${i}firstName`} name={`${i}firstName`} placeholder="John" component={Input}/>
      <label htmlFor={`${i}lastName`}>Last Name</label>
      <FieldWrapper id={`${i}lastName`} name={`${i}lastName`} placeholder="Doe" component={Input}/>
      <label htmlFor={`${i}email`}>Email</label>
      <FieldWrapper id={`${i}email`} name={`${i}email`} placeholder="john@acme.com" type="email" component={Input}/>
    </React.Fragment>
  );
  }
}
const getMultipleFileds = () => {
  const toReturn = [];
  for(let i=0;i<300; i+=1){
    toReturn.push(<InpFields i={i} />);
  }
  return toReturn;
}

export default class ReduxForm extends React.Component {
      render() {
      return (<div>
        <h1>Signup</h1>
            <form>
              {getMultipleFileds()}
              <button type="submit">Submit</button>
            </form>
      </div>);
      }
}