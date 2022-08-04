import React, { Component } from 'react';
import { connect } from 'react-redux';
class Question extends Component {

    render() {
    
        return (
            <div id="ques"><h2 className="left">{'>'} {this.props.question}</h2></div>
            
        )
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         reset: ()=>dispatch({type: 'RESET'})
//     }
// }
const mapStateToProps = state => {
    console.log(state)
    return {
        question: state.question
    }
}
export default connect(mapStateToProps, null) (Question);
