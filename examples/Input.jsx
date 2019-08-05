import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.state={
          firstTime:0,
          reRenderTime:[]
        };
      }
      componentDidMount(){
        this.setState({firstTime:new Date().getTime()%10000000})
      }
      componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
         this.setState({ reRenderTime: this.state.reRenderTime.concat(new Date().getTime()%10000000) })
        }
      }
    shouldComponentUpdate(nextProps){
        if(nextProps.value === this.props.value){
            return false;
        }
        return true;
    }
    render(){
    return(
     <React.Fragment>
        <div>Init at: {this.state.firstTime}</div>
        <div>Updated at: {this.state.reRenderTime.join(',')}</div>
       <label htmlFor={this.props.name}>{this.props.ltext}</label>
       <input {...this.props} />
     </React.Fragment>
     );
    }
}

export default Input;
