// Consuming the render value using UseContext
// This is the simplest hook to use, you can ignore componentF
import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default ComponentE