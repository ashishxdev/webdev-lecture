import { useState } from 'react'

import './App.css'

function App() {
const [count, setCount] = useState(1)
// count -> state and uski initial value zero krdo (useState(0)) and ek function bnao setCount jo is count ko update kr ske

return (
  <>
   <div>The count is {count}</div>
   <button onClick={()=> setCount(count * 4)}>Update Count</button>
  </>
)
}

export default App
