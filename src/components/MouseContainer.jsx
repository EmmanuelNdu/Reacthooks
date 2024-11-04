// When you umount your component, make sure you cancel your subscription and listeners
import React, {useCallback, useEffect, useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)} >Toggle Display</button>
        {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer