import Button from 'react-bootstrap/Button';
import { PlusSlashMinus } from 'react-bootstrap-icons'

export const ButtonDkGray = ({btnName, val, keyPressed, handleClick}) => {

    return(
        <Button 
            key={btnName}
            id={btnName} 
            className={keyPressed===btnName? "key key_num_active":"key key_dkgray"}
            onClick={e=>handleClick(val)}>
                {val==='neg' ? <PlusSlashMinus /> : val}
        </Button>
    )
}