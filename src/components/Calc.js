import { calc, isOperator, isMultiplyOrDivide, isPlusOrMinus, isFloat, isInteger, validateInput, isNumber } from "./helpers"

let inputArr = ['0']
let output = '0'
export const main = (x) =>{
    if(!validateInput(x))
        return null

    console.log('input: '+ x)
    if(x==='AC'){
        inputArr=['0']
        output = '0'
    }

    else if(inputArr[0] === 'Error')
        output = 'Error'

    else if(x=== 'Backspace'){
        //=+-*/
        // console.log(inputArr)
        
        if(isOperator(inputArr[inputArr.length-1]) || inputArr[inputArr.length-1]==='='){
            //do nothing, maybe make a sound haha
            console.log('BEEP')
            output = null
        } else {
            console.log('a num')
            let last=inputArr.pop()
            let n = last.slice(0,last.length-1)
   
            if(n.length===0 || last === '-0'){
                inputArr.push('0')

            }else if(n==='-'){
                inputArr.push('-0')
            }else{
                inputArr.push(n)
            }
            // console.log(inputArr)
            output = inputArr[inputArr.length-1]
        }
    }
    else if(x === '=' || x==='Enter'){
        if(isOperator(inputArr[inputArr.length-1])){ 
            inputArr.pop()
        }
        if(!inputArr[inputArr.length-1]==='=' && inputArr.length>=3){
            while(inputArr.length >=3){
                console.log(inputArr)
                let b = inputArr.pop()
                let op = inputArr.pop()
                let a = inputArr.pop()

                inputArr.push(calc(a, op,  b))
            }
            inputArr.push('=')
            output = inputArr[0]
        }
    }
    
    else if(x==='+/-'){ 
        
        //0,'-0', number (integer or decimal, pos or neg), +-*/
        let last = inputArr[inputArr.length-1]
        if(last === '='){
            const n = inputArr[0]
            inputArr[0]= n[0]==='-' ? n.slice(1) : '-'+n
            output = inputArr[0]
            
        }
        else if(isOperator(last)){ //+-*/
            inputArr.push('-0')
            output = '-0'
        }
        else{ //isNumber(last) float or integer
            const n = inputArr.pop()    
            inputArr.push( last[0]==='-' ? n.slice(1) : '-'+n)
            output = inputArr[inputArr.length-1]
        }

    }
    else if(x === '.'){
        //0 '-0' 1-9 +-*/  1.4
        let last = inputArr[inputArr.length-1]
        if(!isFloat(last)){
            if(last === '='){
                inputArr=['0.']
                output = '0.'
            }
            else if(isOperator(last)){ //+-*/
                inputArr.push('0.')
                output = '0.'
            }
            else if(isInteger(last)) { //integer 
                let n = inputArr.pop()
                inputArr.push(n+'.')
                output = inputArr[inputArr.length-1]
            }
        }
     
        
    }
    else if(isOperator(x)){  //operator + - * /
        // duplicate op or '='
        if(isOperator(inputArr[inputArr.length-1]) || inputArr[inputArr.length-1]==='='){ //2 operators, remove last one in array
            inputArr.pop()
        }
       
        if(inputArr.length===5){
            //only 1 scenario
            // [num, +, num, *, num] *
            if(isMultiplyOrDivide(x)){
                output = calc(inputArr[2], inputArr[3], inputArr[4]) 
            }
            // [num, +, num, *, num] +
            else{ 
                let temp = calc(inputArr[2], inputArr[3], inputArr[4])
                output = calc(inputArr[0], inputArr[1], temp)
            } 
        }
        if(inputArr.length===3){ 
            if(isMultiplyOrDivide(x) && isPlusOrMinus(inputArr[1])){
                // [num, +, num]  *
                output = inputArr[2]
            }
            else{ 
                // [num, *, num]* OR [num, *, num]+ OR [num, +, num]+
                output = calc(inputArr[0], inputArr[1], inputArr[2])
            }
        }
        inputArr.push(x)
    }
    else{ //if(isDigit(x))
        
        // inputArr[inputArr.length-1] can be +-, */, 0, -0, number(integer or decimal,pos or neg), 
        let last = inputArr[inputArr.length-1]
        if(last === '='){
            inputArr=[x]
            output = x
        }
        else if(last === '-0'){
            inputArr.pop()
            inputArr.push('-'+x)
            output = inputArr[inputArr.length-1]
        }
        else if(last === '0'){
            inputArr.pop()
            inputArr.push(x)
            output = inputArr[inputArr.length-1]
        }
        else if(isOperator(last)){
            if(inputArr.length===4){
                // [num, +, num, *]   num do nothing
                if(!(isMultiplyOrDivide(last) && isPlusOrMinus(inputArr[1]))){
                    // [num, *, num, *] or [num, *, num, +] or[num, +, num, +] 
                    inputArr.splice(0,3, output)
                }  
            }
            else if(inputArr.length===6){
                //only two scenarios
                // [num, +, num, *, num, *] num
                if(isMultiplyOrDivide(inputArr[3]) && isMultiplyOrDivide(inputArr[5])){
                    inputArr.splice(2,3,output)
                }
                // [num, +, num, *, num, +] num
                else if(isMultiplyOrDivide(inputArr[3]) && isPlusOrMinus(inputArr[5])){
                    inputArr.splice(0,5,output)
                }
            }
            
            inputArr.push(x)
            output = x 
        
        }
        else{ //number (decimal, integer, pos or neg)
            let n = inputArr.pop()
            inputArr.push(n+x)
            output = inputArr[inputArr.length-1]
        }
    }
    console.log(inputArr)

    if(output==='Error')
        inputArr=['Error']
    return output
}