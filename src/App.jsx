import { useState } from 'react'
import './App.css'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookCounter3'
import HookCounter4 from './components/HookCounter4'
import HookMouse from './components/HookMouse'
import UseEffectAfterRender from './components/UseEffectAfterRender'

function App() {

  return (
    <>
    {/* <HookCounter />
    <HookCounter2 />
    <HookCounter3 />
    <HookCounter4 />
    <HookMouse /> */}
    <UseEffectAfterRender />
    </>
  )
}

export default App
