import { validateInput } from "./numHelpers"
import { backSpaceHelper, equalHelper,negHelper, dotHelper, operatorHelper, digitHelper } from "./calcHelpers"
let inputArr = ['0']
let output = null

export const main = (x) =>{
    if(!validateInput(x))
        return output

    console.log('input: '+ x)
    

    switch (true) {
        case x==='AC':
            inputArr=['0']
            return '0'
        case inputArr[0] === 'Error':
            return 'Error'
        case x==='Backspace':
            [inputArr, output] = backSpaceHelper(inputArr, output)
            break;
        case x==='=':
        case x==='Enter':
            [inputArr, output] = equalHelper(inputArr)
            break;
        case x==='+/-':
            [inputArr, output] = negHelper(inputArr, output)
            break;
        case x==='.':
            [inputArr, output] = dotHelper(inputArr, output)
            break;
        case x==='+':
        case x==='-': 
        case x==='x':
        case x==='÷':
        case x==='*':
        case x==='/':    
            [inputArr, output] = operatorHelper(x,inputArr)
            break;

        default: //digit 0 to 9
            [inputArr, output] = digitHelper(x,inputArr, output)
            break;
    }


    console.log(inputArr)

    if(output==='Error')
        inputArr=['Error']
    return output
}


