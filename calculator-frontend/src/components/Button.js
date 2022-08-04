import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculate } from '../actions/calculate';

class Button extends Component {
    state = {
        color: this.props.color
      }
    
      hanleMouseDown = (n) => {
        this.setState({
           color: 'white' 
        })
        
        this.props.keyPressed(n)
      }
      hanleMouseUp = () => {
        this.setState({ 
          color: this.props.color 
        })
      }
    render() {
    
        return (
            <div className={this.props.c}
              onMouseDown={() => this.hanleMouseDown(this.props.label)}
              onMouseUp={() => this.hanleMouseUp()}
              style={{backgroundColor: this.state.color}} >
                  {this.props.label} 
            </div> 
                
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
      // keyPressed: formData => dispatch({ type: 'KEY_PRESSED', payload: formData })
      keyPressed: formData => dispatch(calculate(formData))
      
    }
  }
export default connect(null, mapDispatchToProps)(Button)
// export default Button