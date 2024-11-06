import { useState } from 'react'
import './App.css'
import React, {useReducer} from 'react'
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
import ReducerComplexStateAction from './components/ReducerComplexStateAction'
import MultipleReducer from './components/MultipleReducer'
import ComponentAUse from './components/ComponentAUse'
import ComponentBUse from './components/ComponentBUse'
import ComponentCUse from './components/ComponentCUse'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
        return state + 1
        case 'decrement':
        return state - 1
        case 'reset':
        return initialState
        default :
        return state
    }
}

export const UserContext = React.createContext()
export  const ChannelContext = React.createContext()

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
   <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
<>
Count - {count}
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
</UserContext.Provider> 
<ReducerSimpleStateAction /> 
<ReducerComplexStateAction /> 
<MultipleReducer /> */}
<ComponentAUse />
<ComponentBUse />
<ComponentCUse />
</>

</CountContext.Provider>
  )
}

export default App
