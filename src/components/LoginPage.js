import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

const LoginPage = () => {
  return (
    <>
    <Head/>
    <div className='w-full h-screen bg-yellow-900 items center flex justify-center '>
      <div className=' w-1/2 h-full  justify-center shadow-lg bg-gray-100 flex flex-col items-center'>
        <div className='w-[600px] h-[400px]'>
        <p className='text-xl font-bold mt-3 underline'>UserName :</p>
        <input type="text" placeholder="u_name" className='w-[350px] h-[30px] mt-3 p-2 rounded-lg shadow-lg'/>
        <p className='text-xl font-bold mt-3 underline'>Password :</p>
        <input type="password" placeholder="psswd" className='w-[350px] shadow-lg h-[30px] mt-3 p-2 rounded-lg'/>
        <div className='bg-gray-200 w-44 mt-[20px]'>
        <Link to="/"><button className='w-[50px] h-[30px] p-3 ml-4 shadow-lg underline font-bold'>Login</button></Link>
        </div>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginPage
