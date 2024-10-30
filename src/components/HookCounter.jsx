import React,{useState} from 'react'

const HookCounter = () => {

    const [counting, setCount] = useState(0) // Array Destructing
  return (
    <div>
        <button onClick={() => setCount(counting + 1)}>Count {counting}</button>
    </div>
  )
}

export default HookCounter