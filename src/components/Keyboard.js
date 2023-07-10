import Button from 'react-bootstrap/Button';
import { PlusSlashMinus } from 'react-bootstrap-icons'
import { useState } from 'react';
import { main } from './calc';
const Keyboard = () => {
    const [val, setVal] = useState('0')
    const [clickedBtn, setClickedBtn] = useState(null)
    


    const handleClick = (input) =>{
        const output = main(input)
        setVal(output)
        setClickedBtn(input)
    }
    
    const handleKeyPressed = (e) =>{
        console.log(e.key, typeof(e.key))
        // console.log("what is keyPressed")
        // let bb = `btn-${e.key}`
        // bb.addClass('active')
        const output = main(e.key)
        setVal(output)
        setClickedBtn(e.key)
    }
    const handleChange = (e) => {
        // console.log("what is changing????")
    }
    
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
                        <Button className="key key_AC" onClick={e=>handleClick('AC')}>AC</Button>
                        <Button className="key key_neg" onClick={e=>handleClick('+/-')}><PlusSlashMinus /></Button>
                    </div>
                    <div className='number_pad'>
                        {
                            ['7','8','9','4','5','6','1','2','3'].map(num=>(
                                <Button key={num} id={"btn-"+num} value={num} className="key key_num"
                                    onClick={e=>handleClick(e.target.value)}>
                                        {num}
                                </Button>
                            ))
                        }
                        
                        <Button className="key key_0" value='0' onClick={e=>handleClick(e.target.value)}>0</Button>
                        <Button className="key key_num" value='.' onClick={e=>handleClick(e.target.value)}>.</Button> 
                    </div>
                </div>
                <div className='operators_pad'>
                    {
                        ['/','*','+','-'].map(op=>(
                            <Button  
                                value={op} 
                                key={op}
                                className={clickedBtn===op ? 'key key_operator_clicked' : 'key key_operator'} 
                                onClick={e=>handleClick(e.target.value)}>
                                    {op==='*' ? 'x' : op==='/'? '÷' : op}
                            </Button>
                        ))
                    }
                    <Button  className="key key_operator" value='=' onClick={e=>handleClick(e.target.value)}>=</Button>
                </div>
            </div>
            
        </div>
            
        
            
            
 
    )
}
export default Keyboard