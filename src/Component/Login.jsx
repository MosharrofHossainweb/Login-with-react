import { useState } from "react"
import Navbar from "./Navbar"


const Login = () => {
// ============variable part start========
const[Email , setEmail] =useState('')
const[password, setPassword]= useState('')
const[emailError , setEmailerror] = useState('')
const[passwordError , setPassworderror] = useState('')

// ===============function part start=============
const handelEmail =(e)=>{
  setEmail(e.target.value)
}

const handelPassword =(e)=>{
  setPassword(e.target.value)
}

const handelSubmit =(e)=>{
  e.preventDefault()
  console.log(e)
  if(Email==''){
    setEmailerror('PLease Enter Your Email')
  }
  if(password==''){
    setPassworderror('Please Enter Your Password')
  }
}
  return (
    <>
        <Navbar/>

        <div className="container">
            <div className="w-full h-screen flex flex-col justify-center items-center m-5 p-5">
                <h2 className="text-6xl mr-[110px] text-yellow-300 font-bold">Login</h2>
                <form onSubmit={handelSubmit} className="border-2 border-solid border-yellow-300 m-7 p-7">
                    <label className="text-3xl text-black font-semibold flex justify-start  ml-4 ">Email</label>
                    <br />
                    <input onChange={handelEmail} className="text-2xl shadow-2xl text-black font-semibold px-5 bg-transparent placeholder:text-yellow-400" type="text" placeholder="Enter your Email" />
                    <br />

                    <p className="text-3xl text-blue-950 font-semibold inline-block float-start mr-5 m-5">{emailError}</p>
                    <br />
                    <br />
                    <h2 className="invisible">ooo 0000000000000o</h2>
                    <label className="text-3xl text-black font-semibold flex justify-start  ml-5">Password</label>
                    <br />
                    <input onChange={handelPassword} className="text-2xl inline-block text-black font-semibold px-5  bg-transparent placeholder:text-yellow-400" type="password" placeholder="Enter your Password" />
                    <br />
                    <p className="text-3xl text-black font-semibold mt-5 flex-start">{passwordError}</p>
                    <br />
                    <br />
                    <button type="submit" className="text-2xl w-full text-yellow-200 flex justify-center bg-yellow-600 rounded-md p-1.5 active:scale-[1.1]" >Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login
