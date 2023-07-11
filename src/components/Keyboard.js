import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { PlusSlashMinus } from 'react-bootstrap-icons'
import { useState } from 'react';
import { main } from './calc';
import { validateInput } from './inputHelpers';
const Keyboard = () => {
    const [val, setVal] = useState('0')
    const [clickedBtn, setClickedBtn] = useState(null)
    
    const [selected, setSelected] = useState(null)

    const handleClick = (input) =>{
        const output = main(input)
        setVal(output)
        setSelected(input)
        setClickedBtn(input)
    }
    
    
    const handleKeyPressed = (e) =>{
        console.log(e)
        console.log(e.key, e.code)
        
        if(validateInput(e.key)){
            
            
            document.getElementById(`btn-${e.key}`).click();
        }
        
    }
    const handleChange = (e) => {
        // console.log("what is changing????")
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          setSelected(null);
        }, 200);
        return () => clearTimeout(timer);
      }, [selected])
    return(
        
        <div className='background' style={{textAlign: 'center'}}>
            <div>
                <input 
                // onFocus={this.focus()}
                type="text" className='display_input' value={val} 
                onChange={handleChange} 
                onKeyDown={handleKeyPressed}
                 />
            </div>
            <div className='keys'>
                <div className='keys_pad'>
                    <div className='misc'>
                        <Button id="btn-AC" className="key key_double key_dkgray" onClick={e=>handleClick('AC')}>AC</Button>
                        <Button id="btn-+/-" className="key key_dkgray" onClick={e=>handleClick('+/-')}><PlusSlashMinus /></Button>
                    </div>
                    <div className='number_pad'>
                        {
                            ['7','8','9','4','5','6','1','2','3'].map(num=>(
                                <Button key={num} id={"btn-"+num} value={num} 
                                    className={selected===num? "key key_num_active":"key key_ltgray"}
                                    onClick={e=>handleClick(e.target.value)}>
                                        {num}
                                </Button>
                            ))
                        }
                        
                        <Button id="btn-0" 
                            className={selected==="0" ? "key key_double key_num_active":"key key_ltgray key_double"}
                            onClick={e=>handleClick('0')}>
                                0
                        </Button>
                        <Button id="btn-." 
                            className={selected==="." ? "key key_num_active":"key key_ltgray"}
                            onClick={e=>handleClick('.')}>
                                .
                        </Button> 
                    </div>
                </div>
                <div className='operators_pad'>
                    {
                        ['/','*','+','-'].map(op=>(
                            <Button  
                                // value={op} 
                                key={op}
                                id={"btn-"+op} 
                                className={clickedBtn===op ? 'key key_white' : 'key key_orange'} 
                                onClick={e=>handleClick(op)}>
                                    {op==='*' ? 'x' : op==='/'? '÷' : op}
                            </Button>
                        ))
                    }
                    <Button id="btn-Enter" 
                    // className="key key_operator" 
                    className={selected==="Enter" ? "key key_num_active":"key key_orange"}
                    onClick={e=>handleClick('Enter')}>=</Button>
                </div>
            </div>
            
        </div>
            
        
            
            
 
    )
}
export default Keyboard