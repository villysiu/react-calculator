import { calc, isOperator, isMultiplyOrDivide, isPlueOrMinus } from "./helpers"

let res = ['0']
export const main = (x) =>{
    console.log('input: '+ x)
    if(x==='AC'){
        res=['0']
        return '0'
    }

    if(res[res.length-1] === 'Error')
        return 'Error'
    
    if(x === '='){
        while(res.length >=3){
            console.log(res)
            let b = res.pop()
            let op = res.pop()
            let a = res.pop()
            res.push(calc(a, op,  b))
            
        }
        res.push('=')
        return res[0]
    }
    
    if(x==='+/-'){ 
        console.log(res)
        //0,'-0', number (integer or decimal, pos or neg), +-*/
        let last = res[res.length-1]
        if(last === '='){
            if(res.length>=2){
                res[res.length-2]='-'+res[res.length-2]
            }
            return res[res.length-2]
        }
        if(isOperator(last)){ //+-*/
            res.push('-0')
            // return res[res.length-1]
        }
        if(last[0]==='-'){//number (integer or decimal, neg)
            let n = res.pop()
            res.push(n.slice(1))
            // return res[res.length-1]
        }
        // if(last === '='){

        // }
        else{  //number (integer or decimal, pos)
            let n = res.pop()
            res.push('-'+n)
            // return res[res.length-1]
        }
        console.log(res)
        return res[res.length-1]
    }
    if(x === '.'){
        //0 '-0' 1-9 +-*/  1.4
        let last = res[res.length-1]
        if(last === '='){
            res=['0']
            last='0'
        }
        if(isOperator(last)){ //+-*/
            res.push('0.')
            return res[res.length-1]
        }
        else if(Number(last)%1===0) { //integer 
            let n = res.pop()
            res.push(n+'.')
            return res[res.length-1]
        }
        else{ //decimal
            //do nothing
            return res[res.length-1]
        } 
        
    }
    if(isOperator(x)){  //operator + - * /
        if(isOperator(res[res.length-1]) || res[res.length-1]==='='){ //2 operators, remove last one in array
            res.pop()
        }
        else if(res.length>=3){
            if(isMultiplyOrDivide(res[res.length-2]) || 
              (isPlueOrMinus(x) && isPlueOrMinus(res[res.length-2])) ){
                let b = res.pop()
                let op = res.pop()
                let a = res.pop()
                res.push(calc(a,op,b))
            }    
        }
        res.push(x)
        return res[res.length-2]
    }
    else{ //if(isDigit(x))
        
        // res[res.length-1] can be +-, */, 0, -0, number(integer or decimal,pos or neg), 
        let last = res[res.length-1]
        if(last === '='){
            res=['0']
            last='0'
        }

        if(x==='0' && last === '/'){
            res.push('Error')
            return 'Error'
        }
        if(last === '-0'){
            res.pop()
            res.push('-'+x)
            return res[res.length-1]
        }
        if(last === '0'){
            res.pop()
            res.push(x)
            return res[res.length-1]
        }
        if(isOperator(last)){
            res.push(x)
            return res[res.length-1]
        }
        else{ //number (decimal, integer, pos or neg)
            let n = res.pop()
            res.push(n+x)
            return res[res.length-1]
        }
    }
}