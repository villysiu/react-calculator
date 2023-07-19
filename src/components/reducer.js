import { digitHelper } from "./inputHelpers"
import { operatorHelper } from "./inputHelpers"
import { backSpaceHelper } from "./inputHelpers"
import { equalHelper } from "./inputHelpers"
import { negHelper } from "./inputHelpers"
import { dotHelper } from "./inputHelpers"

export const reducer = (state, action)=>{
    console.log(action.type)
    switch(action.type){
        case 'AC':
            return {...state, inputArr: ['0'], output: '0'}

        case 'Backspace':
        case 'Del':
            return {...state, ...backSpaceHelper([...state.inputArr])}
            
        case '=':
        case 'Enter':
            return {...state, ...equalHelper([...state.inputArr])}
            
        case 'neg':
            return {...state, ...negHelper([...state.inputArr], state.output)}
        
        case '.':
            return {...state, ...dotHelper([...state.inputArr], state.output)}
           
        case '+':
        case '-': 
        case '*':
        case '/':    
            return {...state, ...operatorHelper(action.type, [...state.inputArr])}
            
        default:
            return {...state, ...digitHelper(action.type, [...state.inputArr], state.output) }
    }

}

