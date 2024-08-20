import { useState } from 'react'
import './App.css'
import TopNav from './Component/TopNav/TopNav'
import Screen from './Component/Screen/Screen'
import Signs from './Component/Signs/Signs'
import Warning from './Component/Warning/Warning'

function App() {
  const [num , setNum] = useState(0);
  const[ warningDis , setWarningDis] = useState(false)

  return (
    <div>
      <TopNav setAppear={setWarningDis}/>
      <Screen numb={num}/>
      <Signs display={num} setDisplay={setNum}/>
      {warningDis ? <Warning setDisappear={setWarningDis}/> : null}
    </div>
  )
}

export default App
