import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
      const { 
        register, 
        handleSubmit, 
        setError, 
        formState: { errors, isSubmitting } 
       } = useForm();

  // To add delay 
  // const delay = (d)=>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       resolve()
  //     }, d*1000);
  //   })
  // }

  const onSubmit = async(data) => {
    // await delay(2) // simulating network delay
    let r = await fetch("http://localhost:3000/", {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    // if(data.username !== "rohan"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username == "shubham"){
    //   setError("blocked", {message: "This user is blocked"})
    }

  return (
    <>
    {isSubmitting && <div>Loading</div>}
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        
        <input {...register("username", {required: {value: true, message: "This field is required"}, minLength: {value: 3, message: "Min Length is 3"}, maxLength: {value: 8, message: "Max Length is 8"}})} type="text" placeholder='username'/>

        {errors.username && <div className='red'>{errors.username.message}</div>}
        <br />

        <input {...register("password", {minLength: {value: 7, message: "Min Length is 7"}})} type="password" placeholder='password'/>
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <br />

        <input disabled={isSubmitting} type="submit" value="submit"/>

       {errors.myform && <div className='red'>{errors.myform.message}</div>}
       {errors.blocked && <div className='red'>{errors.blocked.message}</div>}

      </form>
    </div>
      
    </>
  )
}

export default App
