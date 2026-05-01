import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Body  from './components/Body.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[350px] h-[500px] p-4">
    <Nav/>
    <Body/>
    </div>
  )
}

export default App
