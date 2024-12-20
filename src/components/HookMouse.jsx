import React, {useState, useEffect} from 'react'

const HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log(MouseEvent)
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect (() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
          console.log('component Unmounting code')
          window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
  return (
    <div>
        Hook X - {x} Y-{y}
    </div>
  )
}

export default HookMouse