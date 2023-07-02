import Button from 'react-bootstrap/Button';
import { PlusSlashMinus } from 'react-bootstrap-icons'
import { useState } from 'react';
import { main } from './Calc';
const Keyboard = () => {
    const [val, setValue] = useState('0')
    const handleClick = (input) =>{
        // console.log("clicked: "+input)
        const t = main(input)
        setValue(t)
    }
    return(
        
        <div className='background' style={{textAlign: 'center'}}>
            <div className='display'>
                <div className='res'>{val}</div>
                
            </div>
            <div className='keys'>
                <div className='keys_pad'>
                    <div className='misc'>
                        <Button className="key key_AC" onClick={e=>handleClick('AC')}>AC</Button>
                        <Button className="key key_neg" onClick={e=>handleClick('+/-')}><PlusSlashMinus /></Button>
                    </div>
                    <div className='number_pad'>
                        <Button className="key key_num" value='7' onClick={e=>handleClick(e.target.value)}>7</Button>
                        <Button className="key key_num" value='8' onClick={e=>handleClick(e.target.value)}>8</Button>
                        <Button className="key key_num" value='9' onClick={e=>handleClick(e.target.value)}>9</Button>
                        <Button className="key key_num" value='6' onClick={e=>handleClick(e.target.value)}>6</Button>
                        <Button className="key key_num" value='5' onClick={e=>handleClick(e.target.value)}>5</Button>
                        <Button className="key key_num" value='4' onClick={e=>handleClick(e.target.value)}>4</Button>
                        <Button className="key key_num" value='1' onClick={e=>handleClick(e.target.value)}>1</Button>
                        <Button className="key key_num" value='2' onClick={e=>handleClick(e.target.value)}>2</Button>
                        <Button className="key key_num" value='3' onClick={e=>handleClick(e.target.value)}>3</Button>
                        <Button className="key key_0" value='0' onClick={e=>handleClick(e.target.value)}>0</Button>
                        <Button className="key key_num" value='.' onClick={e=>handleClick(e.target.value)}>.</Button>
                        
                    </div>
                </div>
                <div className='operators_pad'>
                    <Button  className="key key_operator" value='/' onClick={e=>handleClick(e.target.value)}>÷</Button>
                    <Button  className="key key_operator" value='*' onClick={e=>handleClick(e.target.value)}>x</Button>
                    <Button  className="key key_operator" value='-' onClick={e=>handleClick(e.target.value)}>-</Button>
                    <Button  className="key key_operator" value='+' onClick={e=>handleClick(e.target.value)}>+</Button>
                    <Button  className="key key_operator" value='=' onClick={e=>handleClick(e.target.value)}>=</Button>
                </div>
            </div>
                
        </div>
            
        

 
    )
}
export default Keyboard