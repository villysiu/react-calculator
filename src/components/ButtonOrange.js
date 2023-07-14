import Button from 'react-bootstrap/Button';
export const ButtonOrange = ({btnName, op, clickedOp, handleClick}) => {
    return(
        <Button 
            key={btnName}
            id={btnName} 
            className={clickedOp===op ? 'key key_white' : 'key key_orange'} 
            onClick={e=>handleClick(op)}>
                {op==='*' ? 'x' : op==='/'? '÷' : op}
        </Button>
    )
}