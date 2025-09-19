import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, setName] = useState("Aashish")
  // const handleChange = (e)=>{
  //   setName(e.target.value)
  // }

  // const [form, setForm] = useState({email: "", phone: ""})
  // const handleChange = (e)=>{
  //   setForm({...form, [e.target.name]: e.target.value})
  //   console.log(form)
  // }
  
  const [form, setForm] = useState({})
  const handleChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }

  const handleClick = ()=>{
    alert("Hey I am clicked")
  }
  const handleMouseOver = ()=>{
    alert("Hey I am a mouse over")
  }
  

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am red
      </div> */}

      {/* <input type="text" value={name} onChange={handleChange} /> */}

      {/* <input type="text" name = "email" value={form.email} onChange={handleChange}/>
      <input type="text" name = "phone" value={form.phone} onChange={handleChange}/> */}

      <input type="text" name='email' value={form.email?form.email:"" } onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleChange} /> 

    </>
  )
}

export default App
