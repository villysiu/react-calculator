import { calc, isOperator, isMultiplyOrDivide, isPlusOrMinus, isFloat } from "./calcHelpers"

export const validateInput = (key) =>{
    const accepted = new Set(['AC','+','-','*','/','=','.','Del', 'neg','Enter','Backspace', 'Escape',"–"])
    for(let i=0;i<=9;i++)
        accepted.add(String(i))
    
    return accepted.has(key)
}
export const backSpaceHelper = (arr) =>{
    if(isOperator(arr[arr.length-1]) || arr[arr.length-1]==='='){
        // =+-*/ do nothing, maybe make a sound haha
        console.log('BEEP')
        return {}
    }
    // number
    let last=arr.pop()
    let updatedStr = last.slice(0,last.length-1)
    if(updatedStr.length===0 || last === '-0'){
        //last is single digit number or -0, removing -
        return {inputArr: [...arr, '0'], output: '0'}
    }
    if(updatedStr==='-'){
        return {inputArr: [...arr, '-0'], output: '-0'}
    }
    
    //number string
    return {inputArr: [...arr, updatedStr], output: updatedStr}
}

export const equalHelper = (arr) => {
    if(isOperator(arr[arr.length-1])){ 
        arr.pop()
    }
    if(arr[arr.length-1]!=='=' && arr.length>=3){
        //[num, op, num] =
        //[num, +, num, *, num] =
        while(arr.length >=3){
            let b = arr.pop()
            let op = arr.pop()
            let a = arr.pop()

            arr.push(calc(a, op,  b))
        }
        arr.push('=')
    }
    return {inputArr: arr, output: arr[0]}
}

export const negHelper =  (arr, mem) =>{
    //0,'-0', number (integer or decimal, pos or neg), +-*/
    switch(arr[arr.length-1]){
        case '=':
            //[num, '=']
            const firstNumStr = arr.shift()
            let negateStr = firstNumStr[0]==='-' ? firstNumStr.slice(1) : '-'+firstNumStr
            return {inputArr: [negateStr, ...arr], output: negateStr}
        case '+':
        case '-':
        case '*':
        case '/':   
            arr = updateArrWithPrevCalculatedNum(arr, mem)
            return {inputArr: [...arr, '-0'], output: '-0'}
        default:
            //isNumber(last) float or integer
            const lastNumStr = arr.pop() 
            let negateStr2 = lastNumStr[0]==='-' ? lastNumStr.slice(1) : '-'+lastNumStr
            return {inputArr: [...arr, negateStr2], output: negateStr2}
    }
}
export const dotHelper = (arr, mem) =>{
    //0 '-0' 1-9 +-*/  1.4
    let last = arr[arr.length-1]
    //do nothing if already a float
    switch (true) {
        case isFloat(last):
            return {}
        case last === '=':
            return {inputArr: ['0.'], output: '0.'}
        case isOperator(last):  //+-*/
            arr = updateArrWithPrevCalculatedNum(arr, mem)
            return { inputArr: [...arr, '0.'], output: '0.'}
        default: //isInteger
            let n = arr.pop()
            return {inputArr: [...arr, n+'.'], output: n+'.' }
    }
    
}
export const operatorHelper = (x, arr) =>{
    // duplicate op or '='

    if(isOperator(arr[arr.length-1]) || arr[arr.length-1]==='='){ //2 operators, remove last one in array
        arr.pop()
    }
    switch (arr.length) {
        case 5:
            //only 1 scenario [num, +, num, *, num]
            let temp = calc(arr[2], arr[3], arr[4])
            if(isMultiplyOrDivide(x)){
                // [num, +, num, *, num] *
                return {inputArr: [...arr, x], output: temp}
            }
            else{ 
                // [num, +, num, *, num] +
                return {inputArr: [...arr, x], output: calc(arr[0], arr[1], temp)}
            } 
        case 3:
            if(isMultiplyOrDivide(x) && isPlusOrMinus(arr[1])){
                // [num, +, num]  *
                return {inputArr: [...arr, x], output: arr[2]}
            }
            else{ 
                // [num, *, num]* OR [num, *, num]+ OR [num, +, num]+
                return {inputArr: [...arr, x], output: calc(arr[0], arr[1], arr[2])}
            }
        default: //case 1 , [num] +
            return {inputArr: [...arr, x], output: arr[0]}
    }
}
export const percentHelper = () =>{

}
export const digitHelper = (x, arr, calculatedNum) =>{
     // arr[arr.length-1] can be +-, */, 0, -0, number(integer or decimal,pos or neg), 
    switch(arr[arr.length-1]){
        case "=":
            return {inputArr: [x], output:x}
        case '-0':
            arr.pop()
            return {inputArr: [...arr, '-'+x], output: '-'+x}
        case '0':
            arr.pop()
            return {inputArr: [...arr, x], output: x}
        case "+":
        case '-':
        case '*':
        case '/':        
            arr = updateArrWithPrevCalculatedNum(arr, calculatedNum)
            return {inputArr: [...arr, x], output: x}
        default:
         //number (decimal, integer, pos or neg)
            let n = arr.pop()
            return {inputArr: [...arr, n+x], output: n+x}
         
    }
}

const updateArrWithPrevCalculatedNum=(arr, calculatedNum)=>{
    switch(arr.length){
        case 4:
            // [num, +, num, *] num   
            // do nothing
            if(!(isMultiplyOrDivide(arr[3]) && isPlusOrMinus(arr[1]))){
                // [num, *, num, *] or [num, *, num, +] or[num, +, num, +] 
                arr.splice(0,3, calculatedNum)
            }  
            return arr
        case 6: 
            //only two scenarios
            // [num, +, num, *, num, *] num
            if(isMultiplyOrDivide(arr[3]) && isMultiplyOrDivide(arr[5])){
                arr.splice(2,3,calculatedNum)
            }
            // [num, +, num, *, num, +] num
            else if(isMultiplyOrDivide(arr[3]) && isPlusOrMinus(arr[5])){
                arr.splice(0,5,calculatedNum)
            }
            return arr
        default:
            return arr
    }   
    
    
} 