import React from 'react';

class Input extends React.Component {
    shouldComponentUpdate(nextProps){
        if(nextProps.value === this.props.value){
            return false;
        }
        return true;
    }
    render(){
    return(
     <React.Fragment>
       <label htmlFor={this.props.name}>{this.props.ltext}</label>
       <input {...this.props} />
     </React.Fragment>
     );
    }
}

export default Input;
