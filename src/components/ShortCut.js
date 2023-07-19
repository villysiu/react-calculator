import Table from 'react-bootstrap/Table';
export const ShortCut=()=>{
    const shortcuts = [
        ['Clear All', 'Esc'],
        ['Negate the displayed value', 'Option-Minus Sign (–)'],
        // ['Percent', 'Percent Sign (%)'],
        
        ['Divide', 'Forward Slash (/)'],
        ['Multiply', 'Asterisk (*)'],
        ['Subtract', 'Minus Sign (–)'],
        ['Add', 'Plus Sign (+)'],
        ['Equal', 'Equal Sign (=) or Return'],
        ['Remove the most recently entered digit or letter', 'Delete key']
    ]
    return (
        
        <div className="shortcut">
  
            <Table class="table" style={{textAlign: 'left'}}>
                <thead>
                    <tr>
                        <th scope="col">Action</th>
                        <th scope="col">Keyboard Shortcut</th>
                    </tr>
                </thead>
                <tbody>
                    {shortcuts.map(shortcut=>{
                        return (
                            <tr>
                                <td>{shortcut[0]}</td>
                                <td>{shortcut[1]}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}