import { calc, isOperator, isMultiplyOrDivide, isPlusOrMinus, isFloat, isInteger } from "./calcHelpers"

export const validateInput = (key) =>{
    const accepted = new Set(['AC','+','-','*','/','=','.','Del', 'neg','Enter','Backspace', 'Escape', 'Alt'])
    for(let i=0;i<=9;i++)
        accepted.add(String(i))
    
    return accepted.has(key)
}
export const backSpaceHelper = (inputArr, mem) =>{
    console.log(inputArr, mem)
    if(isOperator(inputArr[inputArr.length-1]) || inputArr[inputArr.length-1]==='='){
        // =+-*/ do nothing, maybe make a sound haha
        console.log('BEEP')
        return [inputArr, mem]
    }

    // number
    let last=inputArr.pop()
    let updatedStr = last.slice(0,last.length-1)

    if(updatedStr.length===0 || last === '-0'){
        //last is single digit number or -0, removing -
        return [[...inputArr, '0'],'0']
    }
    if(updatedStr==='-'){
        return [[...inputArr, '-0'],'-0']
    }
    //number string
    return [[...inputArr, updatedStr], updatedStr]
}

export const equalHelper = (inputArr) => {
    if(isOperator(inputArr[inputArr.length-1])){ 
        inputArr.pop()
    }
    if(inputArr[inputArr.length-1]!=='=' && inputArr.length>=3){
        //[num, op, num] =
        //[num, +, num, *, num] =
        while(inputArr.length >=3){
            let b = inputArr.pop()
            let op = inputArr.pop()
            let a = inputArr.pop()

            inputArr.push(calc(a, op,  b))
        }
        inputArr.push('=')
    }
    return [inputArr, inputArr[0]]
}

export const negHelper =  (inputArr, mem) =>{
    //0,'-0', number (integer or decimal, pos or neg), +-*/
    let last = inputArr[inputArr.length-1]
    if(last === '='){
        const n = inputArr[0]
        inputArr[0]= n[0]==='-' ? n.slice(1) : '-'+n
        // output = inputArr[0]
        return [inputArr, inputArr[0]]
    }
    if(isOperator(last)){ //+-*/
        updateArr(inputArr, mem)
        // inputArr.push('-0')
        // output = '-0'
        return [[...inputArr, '-0'], '-0']
    }
    //isNumber(last) float or integer
    const n = inputArr.pop()    
    inputArr.push( last[0]==='-' ? n.slice(1) : '-'+n)
    return [inputArr, inputArr[inputArr.length-1]]
    
}
export const dotHelper = (inputArr, mem) =>{
    //0 '-0' 1-9 +-*/  1.4
    let last = inputArr[inputArr.length-1]
    //do nothing if already a float
    if(isFloat(last))
        return [inputArr, mem]
    
    if(last === '='){
        return [['0.'], '0.']
    }
    if(isOperator(last)){ //+-*/
        updateArr(inputArr, mem)
        return[[...inputArr, '0.'], '0.']
    }
    if(isInteger(last)) { //integer 
        let n = inputArr.pop()
        return[[...inputArr, n+'.'], n+'.']
    }
    
    // return [inputArr, output]
}
export const operatorHelper = (x, inputArr) =>{
    // duplicate op or '='

    if(isOperator(inputArr[inputArr.length-1]) || inputArr[inputArr.length-1]==='='){ //2 operators, remove last one in array
        inputArr.pop()
    }

    if(inputArr.length===5){
        let temp = calc(inputArr[2], inputArr[3], inputArr[4])
        //only 1 scenario [num, +, num, *, num]
        if(isMultiplyOrDivide(x)){
            // [num, +, num, *, num] *
            return [[...inputArr, x], temp]
        }
        else{ 
            // [num, +, num, *, num] +
            return [[...inputArr, x], calc(inputArr[0], inputArr[1], temp)]
        } 
    }
    if(inputArr.length===3){ 
        if(isMultiplyOrDivide(x) && isPlusOrMinus(inputArr[1])){
            // [num, +, num]  *
            // output = inputArr[2]
            return [[...inputArr, x], inputArr[2]]
        }
        else{ 
            // [num, *, num]* OR [num, *, num]+ OR [num, +, num]+
            return [[...inputArr, x], calc(inputArr[0], inputArr[1], inputArr[2])]
        }
    }
    //[num]
    return [[...inputArr, x], inputArr[0]]
    
}
export const percentHelper = () =>{

}
export const digitHelper = (x, inputArr, mem) =>{
     // inputArr[inputArr.length-1] can be +-, */, 0, -0, number(integer or decimal,pos or neg), 
     let last = inputArr[inputArr.length-1]
     if(last === '='){
        //  inputArr=[x]
        return [[x], x]
     }
     if(last === '-0'){
         inputArr.pop()
        //  inputArr.push('-'+x)
         return[[...inputArr, '-'+x], '-'+x]
     }
     if(last === '0'){
         inputArr.pop()
        //  inputArr.push(x)
        return[[...inputArr, x], x]
     }
     if(isOperator(last)){
         updateArr(inputArr, mem)
        //  inputArr.push(x) 
         return[[...inputArr, x], x]
     }
    //  else{ //number (decimal, integer, pos or neg)
         let n = inputArr.pop()
        //  inputArr.push(n+x)
         return[[...inputArr, n+x], n+x]
         
    //  }

}

const updateArr=(inputArr, output)=>{
    if(inputArr.length===4){
        // [num, +, num, *] num   do nothing
        if(!(isMultiplyOrDivide(inputArr[3]) && isPlusOrMinus(inputArr[1]))){
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
} 