import Button from 'react-bootstrap/Button';
export const ButtonOrange = ({btnName, op, keyActive, clickedOp, handleClick}) => {
    if(btnName==='btn-='){
        return (
            <Button 
            key={btnName}
            id={btnName} 
            className={keyActive===btnName ? "key key_num_active" : 'key key_orange'} 
            onClick={e=>handleClick('=')}>
                =
            </Button>
        )
    }
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