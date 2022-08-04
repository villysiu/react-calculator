import React, { Component } from 'react';
import { connect } from 'react-redux';
class Answer extends Component {

    render() {
    
        return (
            <div id="ans"><h2 className='right'>{this.props.result ? this.props.result : this.props.userInput}</h2></div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        result: state.result,
        userInput: state.userInput
    }
}
export default connect(mapStateToProps, null) (Answer);
