import { validateInput } from "./numHelpers"
import { backSpaceHelper, equalHelper,negHelper, dotHelper, operatorHelper, digitHelper } from "./calcHelpers"
let inputArr = ['0']
let output = null

export const main = (x) =>{
    if(!validateInput(x))
        return output

    console.log('input: '+ x)
    
    if(x==='AC'){
        inputArr=['0']
        return '0'
    }

    else if(inputArr[0] === 'Error')
        return 'Error'

    else {
        switch (x) {
            
            case 'Backspace':
                [inputArr, output] = backSpaceHelper(inputArr, output)
                break;
            case '=':
            case 'Enter':
                [inputArr, output] = equalHelper(inputArr)
                break;
            case '+/-':
                [inputArr, output] = negHelper(inputArr, output)
                break;
            case '.':
                [inputArr, output] = dotHelper(inputArr, output)
                break;
            case '+':
            case '-': 
            case 'x':
            case '÷':
                [inputArr, output] = operatorHelper(x,inputArr)
                break;

            default: //digit 0 to 9
                [inputArr, output] = digitHelper(x,inputArr, output)
                break;
        }
    }
    // else if(x=== 'Backspace'){
        // if(isOperator(inputArr[inputArr.length-1]) || inputArr[inputArr.length-1]==='='){
        //     // =+-*/ do nothing, maybe make a sound haha
        //     console.log('BEEP')
            
        // } else {
        //     // number
        //     let last=inputArr.pop()
        //     let n = last.slice(0,last.length-1)
   
        //     if(n.length===0 || last === '-0'){
        //         //last is single digit number or -0, removing -
        //         inputArr.push('0')
        //     }else if(n==='-'){
        //         inputArr.push('-0')
        //     }else{
        //         inputArr.push(n)
        //     }
        //     output = inputArr[inputArr.length-1]
        // }
    // }
    // else if(x === '=' || x==='Enter'){
    //     if(isOperator(inputArr[inputArr.length-1])){ 
    //         inputArr.pop()
    //     }
    //     if(inputArr[inputArr.length-1]!=='=' && inputArr.length>=3){
    //         //[num, op, num] =
    //         //[num, +, num, *, num] =
    //         while(inputArr.length >=3){
    //             let b = inputArr.pop()
    //             let op = inputArr.pop()
    //             let a = inputArr.pop()

    //             inputArr.push(calc(a, op,  b))
    //         }
    //         inputArr.push('=')
    //         output = inputArr[0]
    //     }
    // }
    
    // else if(x==='+/-'){ 
        
    //     //0,'-0', number (integer or decimal, pos or neg), +-*/
    //     let last = inputArr[inputArr.length-1]
    //     if(last === '='){
    //         const n = inputArr[0]
    //         inputArr[0]= n[0]==='-' ? n.slice(1) : '-'+n
    //         output = inputArr[0]
    //     }
    //     else if(isOperator(last)){ //+-*/
    //         updateArr(last)
    //         inputArr.push('-0')
    //         output = '-0'
    //     }
    //     else{ //isNumber(last) float or integer
    //         const n = inputArr.pop()    
    //         inputArr.push( last[0]==='-' ? n.slice(1) : '-'+n)
    //         output = inputArr[inputArr.length-1]
    //     }
    // }
    // else if(x === '.'){
    //     //0 '-0' 1-9 +-*/  1.4
    //     let last = inputArr[inputArr.length-1]
    //     //do nothing if already a float
    //     if(!isFloat(last)){
    //         if(last === '='){
    //             inputArr=['0.']
    //             output = '0.'
    //         }
    //         else if(isOperator(last)){ //+-*/
    //             updateArr(last)
    //             inputArr.push('0.')
    //             output = '0.' 
    //         }
    //         else if(isInteger(last)) { //integer 
    //             let n = inputArr.pop()
    //             inputArr.push(n+'.')
    //             output = n+'.'
    //         }
    //     }
    // }
    // else if(isOperator(x)){  //operator + - * /
    //     // duplicate op or '='
    //     if(isOperator(inputArr[inputArr.length-1]) || inputArr[inputArr.length-1]==='='){ //2 operators, remove last one in array
    //         inputArr.pop()
    //     }
       
    //     if(inputArr.length===5){
    //         //only 1 scenario
    //         // [num, +, num, *, num] *
    //         if(isMultiplyOrDivide(x)){
    //             output = calc(inputArr[2], inputArr[3], inputArr[4]) 
    //         }
    //         // [num, +, num, *, num] +
    //         else{ 
    //             let temp = calc(inputArr[2], inputArr[3], inputArr[4])
    //             output = calc(inputArr[0], inputArr[1], temp)
    //         } 
    //     }
    //     if(inputArr.length===3){ 
    //         if(isMultiplyOrDivide(x) && isPlusOrMinus(inputArr[1])){
    //             // [num, +, num]  *
    //             output = inputArr[2]
    //         }
    //         else{ 
    //             // [num, *, num]* OR [num, *, num]+ OR [num, +, num]+
    //             output = calc(inputArr[0], inputArr[1], inputArr[2])
    //         }
    //     }
    //     inputArr.push(x)
    // }
    // else{ //if(isDigit(x))
        
        // // inputArr[inputArr.length-1] can be +-, */, 0, -0, number(integer or decimal,pos or neg), 
        // let last = inputArr[inputArr.length-1]
        // if(last === '='){
        //     inputArr=[x]
        // }
        // else if(last === '-0'){
        //     inputArr.pop()
        //     inputArr.push('-'+x)
        // }
        // else if(last === '0'){
        //     inputArr.pop()
        //     inputArr.push(x)
        // }
        // else if(isOperator(last)){
        //     updateArr(last)
        //     inputArr.push(x) 
        // }
        // else{ //number (decimal, integer, pos or neg)
        //     let n = inputArr.pop()
        //     inputArr.push(n+x)
            
        // }
        // output = inputArr[inputArr.length-1]
    // }
    console.log(inputArr)

    if(output==='Error')
        inputArr=['Error']
    return output
}


