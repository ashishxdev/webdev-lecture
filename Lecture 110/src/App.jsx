import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(false)

  const [todos, setTodos] = useState([
    {
    title: "Hey",
    desc: "I am good. How are u?"
    },
    {
    title: "Hey Another to do",
    desc: "me good too"
    },
    {
    title: "Hey okay nice",
    desc: "Awesome"
    }
])

  // Instead of creating components we can do like this too (small component) but we make components most of the time always component name starts with capital letter
  // const Todo = () => {
  //   return (<>
  //   <div className='todo'>I am todo</div></>)
  // }

  // list rendering
  // const Todo = ({todo}) => {
  //   return (<>
  //   <div className="m-4 border-1 border-purple-400">
  //   <div className='todo'>{todo.title}</div>
  //   <div className='todo'>{todo.desc}</div>
  //   </div>
  //   </>)
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <Todo></Todo> */}
      
      {todos.map(todo=>{
        // return <Todo key={todo.title} todo = {todo}/>

        return <div key={todo.title} className="m-4 border-1 border-purple-400">
          <div className='todo'>{todo.title}</div>
          <div className='todo'>{todo.desc}</div>
          </div>
      })}

      {/* {showBtn?<button>I will be shown only when second button is clicked</button>: "thenga"} */}
      {/* {showBtn?<button> showBtn is true</button>: <button>showBtn is false</button>} */}
      {/* {showBtn && <button>showBtn is true</button>} */}

      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
          Toggle showBtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
