import { useState } from 'react'
import './App.css'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookCounter3'
import HookCounter4 from './components/HookCounter4'
import UseEffectAfterRender from './components/UseEffectAfterRender'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IncorrectIndependecyUse from './components/IncorrectIndependecyUse'

function App() {

  return (
    <>
    {/* <HookCounter />
    <HookCounter2 />
    <HookCounter3 />
    <HookCounter4 />
    <UseEffectAfterRender />
    <HookMouse />
    <MouseContainer /> */}
    <IncorrectIndependecyUse />
    </>
  )
}

export default App
