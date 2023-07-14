import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
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
            setAltPressed(e.type === 'keydown')
        }
    }
    const handleKeyPressed = (e) =>{
        console.log(e)
        
        if(validateInput(e.key) || (e.keyCode === 189 && altPressed)){
            if(e.key==='Escape'){
                setKeyPressed('AC')
                setAltPressed(false)
                document.getElementById(`btn-AC`).click();
            }
            else if(e.key === 'Alt'){
                setAltPressed(e.type === 'keydown')
            }
            else if(e.keyCode === 189 && altPressed){
                setKeyPressed('btn-neg')
                // setAltPressed(false)
                document.getElementById(`btn-neg`).click();
            }

            else if(e.key === 'Enter'){
                setKeyPressed('btn-=')
                document.getElementById(`btn-=`).click();
            }
            else if(e.key === 'Backspace'){
                setKeyPressed('btn-Del')
                document.getElementById(`btn-Del`).click();
            }
            else {
                setKeyPressed(`btn-${e.key}`)
                // setAltPressed(false)
                document.getElementById(`btn-${e.key}`).click();
   
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
                            ['7','8','9','4','5','6','1','2','3'].map(num=>(
                                <ButtonLtGray key={num} btnName={"btn-"+num} val={num} keyPressed={keyPressed} handleClick={handleClick} />
                            ))
                        }
                        
                        <Button id="btn-0" 
                            className={keyPressed==="0" ? "key key_double key_num_active":"key key_ltgray key_double"}
                            onClick={e=>handleClick('0')}>
                                0
                        </Button>
                        <ButtonLtGray key="dot" btnName="btn-." val="." keyPressed={keyPressed} handleClick={handleClick} />
                       

                    </div>
                </div>
                <div className='operators_pad'>
                    {
                        ['/','*','+','-','='].map(op=>(
                            <ButtonOrange key={op} btnName={"btn-"+op} op={op} clickedOp={clickedOp} handleClick={handleClick} />
                        ))
                    }
                    {/* <Button id="btn-Enter" 
                    className={keyPressed==="Enter" ? "key key_num_active":"key key_orange"}
                    onClick={e=>handleClick('Enter')}>=</Button> */}
                </div>
            </div>
            
        </div>
            
        
            
            
 
    )
}
export default Keyboard