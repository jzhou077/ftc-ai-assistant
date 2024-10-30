'use client'
import { useEffect, useState } from "react"
import { createClient } from "../../app/utils/supabase/client"

export default function PasswordForms(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [form, setForm] = useState('sendEmail')

    const supabase = createClient()

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
          if (event == "PASSWORD_RECOVERY") {
            setForm('resetPassword')
          }
        })
      }, [])

    return (
        form === "sendEmail" ?
        <section className="flex flex-col justify-center items-center text-center top-1/2 translate-y-1/2">
            <h1 className="text-3xl pb-3">Reset Password</h1>
            <p className="mb-5">Enter your email below to reset your password.</p>
            <div className="py-5 h-[25vh] aspect-[2/1] bg-[#363636] rounded-2xl">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.forgotPassword(email)
                    setEmail('')
                    }} className="flex flex-col items-center justify-evenly h-full">
                    <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-sm"></input>
                    <button type="submit" className="bg-[#5130B2] p-3 w-4/5 aspect-[6] rounded-[10px] px-3 text-sm">Reset Password</button>
                </form>
            </div>
            <a href="/signup" className="font-normal text-sm mt-5">Don't Have an Account? <span className="text-[#855BFF] underline hover:cursor-pointer">Sign Up!</span></a>
        </section>
        :
        <section className="flex flex-col justify-center items-center text-center top-1/2 translate-y-1/2">
            <h1 className="text-3xl pb-3">Reset Password</h1>
            <h2 className="mb-5">Choose a new password.</h2>
            <div className="py-5 h-[35vh] aspect-[2/1] bg-[#363636] rounded-2xl">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    password === confirmPassword ? props.resetPassword(password) : alert("Please reconfirm your password.")
                    setPassword('')
                    setConfirmPassword('')
                    }} className="flex flex-col items-center justify-evenly h-full">
                    <input type="text" placeholder="Enter your email" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-sm"></input>
                    <input type="text" placeholder="Enter your email" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-sm"></input>
                    <button type="submit" className="bg-[#5130B2] w-4/5 aspect-[6] rounded-[10px] px-3 text-xl">Reset Password</button>
                </form>
            </div>
        </section>
    )
}