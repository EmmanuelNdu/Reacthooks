import { useState } from 'react'
import './App.css'
import React from 'react'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookCounter3'
import HookCounter4 from './components/HookCounter4'
import UseEffectAfterRender from './components/UseEffectAfterRender'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IncorrectIndependecyUse from './components/IncorrectIndependecyUse'
import DataFetching from './components/DataFetching'
import DataFetching2 from './components/DataFetching2'
import ComponentC from './components/ComponentC'
import ReducerSimpleStateAction from './components/ReducerSimpleStateAction'

export const UserContext = React.createContext()
export  const ChannelContext = React.createContext()

function App() {

  return (
   
<>
{/* <HookCounter />
<HookCounter2 />
<HookCounter3 />
<HookCounter4 />
<UseEffectAfterRender />
<HookMouse />
<MouseContainer /> 
<IncorrectIndependecyUse /> 
<DataFetching /> 
<DataFetching2 /> 
<UserContext.Provider value={'Emmanuel'}>
  <ChannelContext.Provider value={'CodeEvolution'}>
  <ComponentC />
  </ChannelContext.Provider>
</UserContext.Provider> */}
<ReducerSimpleStateAction />
</>
  )
}

export default App
