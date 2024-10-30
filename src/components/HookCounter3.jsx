import React, {useState} from 'react'

const HookCounter3 = () => {

    const [name, setName] = useState({firstname:'', lastname:''})
  return (
    <form>
        <input 
        type="text" 
        value={name.firstname} 
        onChange={e => setName({firstname: e.target.value})}
        />
        <input 
        type="text" 
        value={name.lastname} 
        onChange={e => setName({lastname: e.target.value})}
        />

        <h2>Your Firstname is -{name.firstname}</h2>
        <h2>Your lastname is -{name.lastname}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounter3