export const calculate=data=>{
    // console.log(data)
    let ops=["+", "-", "*", "/"]
    return (dispatch)=>{
         if(data==="="){
            //  state.question+=op+input
            //  input=eval(question)
             dispatch({ type: "EQUAL"})
            //  , result: input})
         }
         else if(data==="ac"){
            dispatch({ type: "RESET"})
         }
         else if(data=== "+/-"){
            dispatch({ type: "NEG"})
            
         }
         else if(ops.includes(data)){
            dispatch({ type: "OP", data: data})
         }

         else{
            dispatch({ type: "NUMBER",data:data})
         }

            
    }
}

