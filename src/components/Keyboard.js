import { useEffect } from 'react';
import { useState } from 'react';
import { main } from './calc';
import { validateInput } from './inputHelpers';
import { isOperator } from './calcHelpers';
import { ButtonLtGray } from './ButtonLtGray';
import { ButtonOrange } from './ButtonOrange';
import { ButtonDkGray } from './ButtonDkGray';
const Keyboard = () => {
    const [output, setOutput] = useState('0')
    const [clickedOp, setClickedOp] = useState(null)
    
    const [keyPressed, setKeyPressed] = useState(null)
    const [altPressed, setAltPressed] = useState(false)

    const handleClick = (input) =>{
        const res = main(input)
        setOutput(res)
        setClickedOp(isOperator(input) ? input : null)
    }
    
    const handleKeyUp = (e)=>{
        if(e.key==='Alt'){
            setAltPressed(false)
        }
    }
    const handleKeyPressed = (e) =>{
        // console.log(e)
        let btn=null
        if(validateInput(e.key) || (e.keyCode === 189 && altPressed)){
            if(e.key === 'Alt'){
                setAltPressed(e.type === 'keydown')
            }
            else{
                if(e.key==='Escape'){
                    btn = 'btn-AC'
                }
                else if(e.keyCode === 189 && altPressed){
                    btn = 'btn-neg'
                }
                else if(e.key === 'Enter'){
                    btn = 'btn-='
                }
                else if(e.key === 'Backspace'){
                    btn = 'btn-Del'
                }
                else {
                    btn = `btn-${e.key}`
                }
                setKeyPressed(btn)
                document.getElementById(btn).click();
            } 
        }
        
    }
    const handleChange = (e) => {
        // console.log("what is changing????")
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          setKeyPressed(null);
        }, 300);
        return () => clearTimeout(timer);
      }, [keyPressed])

    return(
        
        <div className='background' style={{textAlign: 'center'}}>
            <div>
                <input 
                autoFocus
                type="text" className='display_input' value={output} 
                onChange={handleChange} 
                onKeyDown={handleKeyPressed}
                onKeyUp={handleKeyUp}
                 />
            </div>
            <div className='keys'>
                <div className='keys_pad'>
                    <div className='misc'>
                        {
                            ['AC','neg', 'Del'].map(val =>(
                                <ButtonDkGray key={val} btnName={"btn-"+val} val={val} keyPressed={keyPressed} handleClick={handleClick} />
                            ))
                        }
                    </div>
                    <div className='number_pad'>
                        {
                            ['7','8','9','4','5','6','1','2','3', '0','.'].map(num=>(
                                <ButtonLtGray key={num} btnName={"btn-"+num} val={num} keyPressed={keyPressed} handleClick={handleClick} />
                            ))
                        }
                        
                    </div>
                </div>
                <div className='operators_pad'>
                    {
                        ['/','*','+','-','='].map(op=>(
                            <ButtonOrange key={op} btnName={"btn-"+op} op={op} clickedOp={clickedOp} handleClick={handleClick} />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}
export default Keyboard