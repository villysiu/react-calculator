import Button from 'react-bootstrap/Button';

export const ButtonLtGray = ({btnName, val, keyPressed, handleClick}) =>{
    return (
        <Button id={btnName}
            className={keyPressed===btnName? "key key_num_active":"key key_ltgray"}
            onClick={e=>handleClick(val)}
        >
            {val}
        </Button>
    )
}