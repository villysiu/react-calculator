import Button from 'react-bootstrap/Button';

export const ButtonLtGray = ({btnName, val, keyPressed, handleClick}) =>{
    if(btnName === 'btn-0')
        return (
            <Button id={btnName}
                className={keyPressed===btnName? "key key_num_active key_double ":"key key_ltgray key_double"}
                onClick={e=>handleClick(val)}
            >
                {val}
            </Button>
        )
    
    return (
        <Button id={btnName}
            className={ keyPressed===btnName? "key key_num_active":"key key_ltgray"}
            onClick={e=>handleClick(val)}
        >
            {val}
        </Button>
    )
}