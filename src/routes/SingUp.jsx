import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom"
import {UserAuth} from "../context/AuthContext"


function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try{
            await signUp(email,password)
            navigate("/account")
        }catch{
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
    <div className='max-w-[350px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-color font-semibold text-3xl flex justify-center'>회원 가입</h1>
        {error ? <p className='text-red-500 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
            <div className='my-5'>
                <label className='text-color text-sm' htmlFor="email">이메일</label>
                <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                    <input onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border rounded-2xl' required id='email' type="email" placeholder='이메일' />
                    <AiOutlineMail className='absolute right-4 top-3 text-gray-400'/>
                </div>
            </div>
            <div className='my-5'>
                <label className='text-color text-sm' htmlFor="password">비밀번호</label>
                <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                    <input onChange={(e) => setPassword(e.target.value)} className='w-full p-2 border rounded-2xl' required id='password' type="password" placeholder='비밀번호' />
                    <RiLockPasswordLine className='absolute right-4 top-3 text-gray-400'/>
                </div>
            </div>
            <button className='sign-btn' type="submit">회원 가입</button>
        </form>
        <p className='my-3 text-gray-500 dark:text-gray-400 text-sm'>
            Already have an account? <Link className='text-slate-800 font-semibold dark:text-blue-200' to="/signin">로그인</Link>
        </p>
    </div>
  )
}

export default SignUp