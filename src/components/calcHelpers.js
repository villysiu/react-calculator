

export const calc=(n1, op, n2)=>{
    if(!isNumber(n1) || !isNumber(n2) || !isOperator(op))
        return 'Error'
    if(op==='/' && (n2==='0' || n2==='-0'))
        return 'Error'
        
    let numStr = ''
    if(op === '+' || op === '-')
        numStr = plusOrMinus(n1,n2,op) 
    else if(op==='*')
        numStr= multiply(n1,n2)
    else
        numStr = divide(n1,n2)
    return numStr
}
export const splitFloatToIntAndDec = (numStr)=>{
    
    const regex = /(?<int>-?\d+)(\.?)(?<dec>\d*)/
    const match = numStr.match(regex)
    // console.log(match)
    return [match.groups['int'], match.groups['dec']]
}
export const convertFloatToIntWSameDecimalPlaces = (intStr, decStr, decPl)=> Number(intStr+decStr.padEnd(decPl, '0'))


export const plusOrMinus = (numStr1,numStr2, op) =>{
    let [intStr1, decStr1] = splitFloatToIntAndDec(numStr1)
    let [intStr2, decStr2] = splitFloatToIntAndDec(numStr2)
    let dec_pl=Math.max(decStr1.length, decStr2.length)
    let num1 = convertFloatToIntWSameDecimalPlaces(intStr1, decStr1, dec_pl)
    let num2 = convertFloatToIntWSameDecimalPlaces(intStr2, decStr2, dec_pl)

    return String((op==='+' ? num1+num2 : num1-num2)/Math.pow(10, dec_pl))
}
export const divide = (numStr1,numStr2) =>{
    let [intStr1, decStr1] = splitFloatToIntAndDec(numStr1)
    let [intStr2, decStr2] = splitFloatToIntAndDec(numStr2)
    let dec_pl=Math.max(decStr1.length, decStr2.length)
    let num1 = convertFloatToIntWSameDecimalPlaces(intStr1, decStr1, dec_pl)
    let num2 = convertFloatToIntWSameDecimalPlaces(intStr2, decStr2, dec_pl)

    return String(num1/num2)
}
// console.log(plusOrMinus('-57', '-0.5','+'))
// console.log(plusOrMinus('-0.57', '23','-'))

export const multiply = (numStr1,numStr2) => {
    let ans1 = multiply_decimal(numStr1,numStr2)
    let ans2 = String(Number(numStr1) * Number(numStr2))
    return ans1.length>ans2.length ? ans2 : ans1
}

const multiply_decimal = (numStr1,numStr2) =>{
    let [intStr1, decStr1] = splitFloatToIntAndDec(numStr1)
    let [intStr2, decStr2] = splitFloatToIntAndDec(numStr2)
    let dec_pl = decStr1.length+decStr2.length
    let num1 = Number(intStr1 + decStr1)
    let num2 = Number(intStr2 + decStr2)
    return String(num1*num2/Math.pow(10, dec_pl))

}
// console.log(MultiplyOrDivide('2.3', '0.3', '/'))

export const isMultiplyOrDivide = (op) => op==='*' || op==='/'

export const isPlusOrMinus = (op) => op==='+' || op==='-'

export const isOperator=(op)=> isPlusOrMinus(op) || isMultiplyOrDivide(op)


export const isFloat = (numStr)=> /^-?\d+\.{1}\d*$/.test(numStr)

export const isInteger = (numStr) =>  /^-?\d+$/.test(numStr)

export const isNumber = (numStr) => isFloat(numStr) || isInteger(numStr)

