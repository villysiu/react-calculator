import { useEffect } from 'react';
import { useState, useReducer } from 'react';
// import { main } from './calc';
import { validateInput } from './inputHelpers';
import { isOperator } from './calcHelpers';
import { ButtonLtGray } from './ButtonLtGray';
import { ButtonOrange } from './ButtonOrange';
import { ButtonDkGray } from './ButtonDkGray';
import {reducer} from './reducer'
const Keyboard = () => {
    // const [output, setOutput] = useState('0')
    const initialState = {inputArr: ['0'], output: '0'}
    const [state, dispatch] = useReducer(reducer, initialState);

    const [clickedOp, setClickedOp] = useState(null)
    const [keyActive, setKeyActive] = useState(null)

    const handleClick = (input) =>{
        dispatch({type: input})
        setClickedOp(isOperator(input) ? input : null)
        console.log(state.inputArr)
    }
    
    const handleKeyPressed = (e) =>{
        console.log(e)
        if(validateInput(e.key)){
            switch(true){
                case e.key === 'Escape':
                    setKeyActive('btn-AC')
                    document.getElementById('btn-AC').click()
                    break;
                
                case e.key==="–": //negate
                    setKeyActive('btn-neg')
                    document.getElementById('btn-neg').click()
                    break;
                case e.key === 'Enter':
                    setKeyActive('btn-=')
                    document.getElementById('btn-=').click()
                    break;

                case e.key === 'Backspace':
                    setKeyActive('btn-Del')
                    document.getElementById('btn-Del').click()
                    break;

                default:
                    setKeyActive(`btn-${e.key}`)
                    document.getElementById(`btn-${e.key}`).click()
                    break;
            }
        }
        
    }
    const handleChange = (e) => {
        // console.log("what is changing????")
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          setKeyActive(null);
        }, 300);
        return () => clearTimeout(timer);
      }, [keyActive])

    return(
        
        <div className='calculator'>
            <div className='display_input'>
                <input 
                    autoFocus
                    type="text" className='input_box' value={state.output} 
                    onChange={handleChange} 
                    onKeyDown={handleKeyPressed}
                 />
            </div>
            <div className='keys'>
                <div className='keys_pad'>
                    <div className='misc'>
                        {
                            ['AC','neg', 'Del'].map(val =>(
                                <ButtonDkGray key={val} btnName={"btn-"+val} val={val} keyActive={keyActive} handleClick={handleClick} />
                            ))
                        }
                    </div>
                    <div className='number_pad'>
                        {
                            ['7','8','9','4','5','6','1','2','3', '0','.'].map(num=>(
                                <ButtonLtGray key={num} btnName={"btn-"+num} val={num} keyActive={keyActive} handleClick={handleClick} />
                            ))
                        }
                        
                    </div>
                </div>
                <div className='operators_pad'>
                    {
                        ['/','*','+','-','='].map(op=>(
                            <ButtonOrange key={op} btnName={"btn-"+op} op={op} keyActive={keyActive} clickedOp={clickedOp} handleClick={handleClick} />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}
export default Keyboard