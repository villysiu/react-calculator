import React from 'react';
import Button from '../components/Button.js';
import keys from '../data/keydata.js'

const KeyPad = () => {
    return (
      <div id="keypad">
          {/* { keys.map((k, idx) => <PianoKey key={idx} color={k.color} note={k.note} />)} */}
          { keys.map((k, idx)=> <Button key={idx} c={k.c} color={k.color} label={k.label} />)}
      </div>
    )
}
export default KeyPad;