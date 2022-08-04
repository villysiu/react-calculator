function manageInput(state = {
    question: "",
    result: null,
    userInput: ""

}, action) {
    console.log(action)
    console.log(state)
    let q, ui
    switch (action.type) {
        case 'RESET': 
            return { 
                question: "",
                result: null,
                userInput: ""
            }
        case 'EQUAL':
            
            return {
                question: state.question,
                result: (eval(state.question)).toString(),
            }
        case 'OP': 
        // console.log(state)
            
            if(state.result)
                q=state.result+action.data
            else{
                if(["+","-","*","/"].includes(state.question[state.question.length-1]))
                    q=state.question.slice(0,state.question.length-1)+action.data
                else
                    q=state.question+action.data
            }
            return {
                ...state,
                userInput: "",
                question: q,
                result: null
            }
        case 'NEG':
            
            if(state.result){
                if(state.result[0]==="-"){
                    ui=state.result.slice(1)
                    
                }else{
                    ui="-"+state.result
                }
                q=ui
            }else{
                let uLen=state.question.length-state.userInput.length
                if(state.userInput[0]==="-"){
                    ui=state.userInput.slice(1)
                    q=state.question.slice(0,uLen)+state.question.slice(uLen+1)
                }else{
                    ui="-"+state.userInput
                    q=state.question.slice(0,uLen)+"-"+state.question.slice(uLen)
                }

            }
                
            return {
                
                result: null,
                question: q,
                userInput: ui
                                            
            }
        case 'NUMBER':
            
            return {
                ...state,
                userInput: state.userInput+action.data,
                result: null,
                question: state.result ? action.data : state.question+action.data
            }    
        default:
            return state
    }
}
export default manageInput