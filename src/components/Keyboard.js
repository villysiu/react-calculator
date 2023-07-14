import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { PlusSlashMinus } from 'react-bootstrap-icons'
import { useState } from 'react';
import { main } from './calc';
import { validateInput } from './inputHelpers';
import { isOperator } from './calcHelpers';
const Keyboard = () => {
    const [val, setVal] = useState('0')
    const [clickedOp, setClickedOp] = useState(null)
    
    const [keyPressed, setKeyPressed] = useState(null)
    const [altPressed, setAltPressed] = useState(false)
    const handleClick = (input) =>{
        const output = main(input)
        setVal(output)
        setClickedOp(isOperator(input) ? input : null)
    }
    
    const handleKeyUp = (e)=>{
        if(e.key==='Alt'){
            console.log('key is up')
            setAltPressed(e.type === 'keydown')
        }/* insert conditional here */
    }
    const handleKeyPressed = (e) =>{
        
        
        if(validateInput(e.key) || (e.keyCode === 189 && altPressed)){
            console.log("not here")
            if(e.key==='Escape'){
                setKeyPressed('AC')
                setAltPressed(false)
                document.getElementById(`btn-AC`).click();
            }
            else if(e.key === 'Alt'){
                setAltPressed(e.type === 'keydown')
            }
            else if(e.keyCode === 189 && altPressed){
                setKeyPressed('neg')
                setAltPressed(false)
                document.getElementById(`btn-neg`).click();
            }else {
                setKeyPressed(e.key)
                setAltPressed(false)
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
                type="text" className='display_input' value={val} 
                onChange={handleChange} 
                onKeyDown={handleKeyPressed}
                onKeyUp={handleKeyUp}
                 />
            </div>
            <div className='keys'>
                <div className='keys_pad'>
                    <div className='misc'>
                        <Button id="btn-AC" className="key key_double key_dkgray" onClick={e=>handleClick('AC')}>AC</Button>
                        <Button id="btn-neg" className={keyPressed==='neg' ? "key key_num_active" : "key key_dkgray"} onClick={e=>handleClick('+/-')}><PlusSlashMinus /></Button>
                    </div>
                    <div className='number_pad'>
                        {
                            ['7','8','9','4','5','6','1','2','3'].map(num=>(
                                <Button key={num} id={"btn-"+num} value={num} 
                                    className={keyPressed===num? "key key_num_active":"key key_ltgray"}
                                    onClick={e=>handleClick(e.target.value)}>
                                        {num}
                                </Button>
                            ))
                        }
                        
                        <Button id="btn-0" 
                            className={keyPressed==="0" ? "key key_double key_num_active":"key key_ltgray key_double"}
                            onClick={e=>handleClick('0')}>
                                0
                        </Button>
                        <Button id="btn-." 
                            className={keyPressed==="." ? "key key_num_active":"key key_ltgray"}
                            onClick={e=>handleClick('.')}>
                                .
                        </Button> 
                    </div>
                </div>
                <div className='operators_pad'>
                    {
                        ['/','*','+','-'].map(op=>(
                            <Button 
                                key={op}
                                id={"btn-"+op} 
                                className={clickedOp===op ? 'key key_white' : 'key key_orange'} 
                                onClick={e=>handleClick(op)}>
                                    {op==='*' ? 'x' : op==='/'? '÷' : op}
                            </Button>
                        ))
                    }
                    <Button id="btn-Enter" 
                    className={keyPressed==="Enter" ? "key key_num_active":"key key_orange"}
                    onClick={e=>handleClick('Enter')}>=</Button>
                </div>
            </div>
            
        </div>
            
        
            
            
 
    )
}
export default Keyboard