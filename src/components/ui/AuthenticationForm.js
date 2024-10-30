'use client'
import { useState } from "react"

export default function AuthenticationForm(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    return (
        props.type === "signup" ?
        <>
            <section className="flex flex-col justify-center items-center text-center py-20">
                <h1 className="text-3xl">Create an Account</h1>
                <p className="mt-2 mb-5">Get your own FTC assistant today!</p>
                <div className="pt-8 pb-4 h-[65vh] aspect-[88/100] bg-[#363636] rounded-3xl">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        props.handleSubmit(email, password)
                    }} className="flex flex-col items-center justify-evenly h-full">
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-sm"></input>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-sm"></input>
                        <input type="password" placeholder="Confirm Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} className="bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-sm"></input>
                        <button type="submit" className="bg-[#5130B2] w-4/5 aspect-[6] rounded-[10px] px-3 text-xl">Sign Up</button>
                        <div className="flex flex-col w-full justify-center mb-3">
                            <span className="translate-y-3 bg-[#363636] w-20 justify-self-center self-center">Or With</span>
                            <hr className="bg-white h-[1px] w-[80%] self-center justify-self-center"/>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault()
                            props.handleGoogleOAuth()
                        }} className="flex flex-row items-center text-center justify-between bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-base font-light">
                            <svg className="fixed justify-self-start" width="40" height="40" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.6272 27.5247C50.6272 25.5822 50.4664 24.1647 50.1183 22.6947H27.4844V31.4621H40.77C40.5022 33.6409 39.0558 36.9222 35.8414 39.1271L35.7964 39.4206L42.9528 44.8537L43.4486 44.9022C48.0021 40.7809 50.6272 34.7171 50.6272 27.5247Z" fill="#4285F4"/>
                                <path d="M27.483 50.625C33.9918 50.625 39.456 48.5249 43.4472 44.9025L35.84 39.1273C33.8043 40.5185 31.0721 41.4898 27.483 41.4898C21.108 41.4898 15.6974 37.3686 13.7686 31.6723L13.4859 31.6958L6.04458 37.3397L5.94727 37.6048C9.91149 45.3223 18.0543 50.625 27.483 50.625Z" fill="#34A853"/>
                                <path d="M13.7702 31.6725C13.2613 30.2025 12.9667 28.6274 12.9667 26.9999C12.9667 25.3723 13.2613 23.7974 13.7434 22.3274L13.7299 22.0143L6.19532 16.2799L5.94881 16.3948C4.31495 19.5974 3.37744 23.1937 3.37744 26.9999C3.37744 30.8062 4.31495 34.4023 5.94881 37.6048L13.7702 31.6725Z" fill="#FBBC05"/>
                                <path d="M27.4831 12.5099C32.0098 12.5099 35.0633 14.4262 36.8045 16.0275L43.608 9.5175C39.4296 5.71126 33.9919 3.375 27.4831 3.375C18.0544 3.375 9.91152 8.67746 5.94727 16.3949L13.7419 22.3275C15.6974 16.6312 21.1081 12.5099 27.4831 12.5099Z" fill="#EB4335"/>
                            </svg>
                            <span className="fixed left-1/2 translate-x-[-50%] text-center">Sign Up With Google</span>
                        </button>
                    </form>
                </div>
                <a href="/signin" className="font-normal text-sm mt-5">Have an Account? <span className="text-[#855BFF] underline hover:cursor-pointer">Login</span></a>
            </section>
        </>
        :
        <>
            <section className="flex flex-col justify-center items-center text-center py-20">
                <h1 className="text-3xl pb-6">Sign In</h1>
                <div className="pt-8 pb-4 h-[65vh] aspect-[88/100] bg-[#363636] rounded-3xl">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        props.handleSubmit(email, password)
                        }} className="flex flex-col items-center justify-evenly h-full">
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-sm"></input>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-sm"></input>
                        <button type="submit" className="bg-[#5130B2] w-4/5 aspect-[6] rounded-[10px] px-3 text-xl">Sign In</button>
                        <a href="/password_recovery" className="text-sm font-light">Forgot Your Password?</a>
                        <div className="flex flex-col w-full justify-center">
                            <span className="translate-y-3 bg-[#363636] w-20 justify-self-center self-center">Or With</span>
                            <hr className="bg-white h-[1px] w-[80%] self-center justify-self-center"/>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault()
                            props.handleGoogleOAuth()
                        }} className="flex flex-row items-center text-center justify-between bg-[#3F3F3F] w-4/5 aspect-[6] rounded-[10px] px-3 text-base font-light">
                            <svg className="fixed justify-self-start" width="40" height="40" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.6272 27.5247C50.6272 25.5822 50.4664 24.1647 50.1183 22.6947H27.4844V31.4621H40.77C40.5022 33.6409 39.0558 36.9222 35.8414 39.1271L35.7964 39.4206L42.9528 44.8537L43.4486 44.9022C48.0021 40.7809 50.6272 34.7171 50.6272 27.5247Z" fill="#4285F4"/>
                                <path d="M27.483 50.625C33.9918 50.625 39.456 48.5249 43.4472 44.9025L35.84 39.1273C33.8043 40.5185 31.0721 41.4898 27.483 41.4898C21.108 41.4898 15.6974 37.3686 13.7686 31.6723L13.4859 31.6958L6.04458 37.3397L5.94727 37.6048C9.91149 45.3223 18.0543 50.625 27.483 50.625Z" fill="#34A853"/>
                                <path d="M13.7702 31.6725C13.2613 30.2025 12.9667 28.6274 12.9667 26.9999C12.9667 25.3723 13.2613 23.7974 13.7434 22.3274L13.7299 22.0143L6.19532 16.2799L5.94881 16.3948C4.31495 19.5974 3.37744 23.1937 3.37744 26.9999C3.37744 30.8062 4.31495 34.4023 5.94881 37.6048L13.7702 31.6725Z" fill="#FBBC05"/>
                                <path d="M27.4831 12.5099C32.0098 12.5099 35.0633 14.4262 36.8045 16.0275L43.608 9.5175C39.4296 5.71126 33.9919 3.375 27.4831 3.375C18.0544 3.375 9.91152 8.67746 5.94727 16.3949L13.7419 22.3275C15.6974 16.6312 21.1081 12.5099 27.4831 12.5099Z" fill="#EB4335"/>
                            </svg>
                            <span className="fixed left-1/2 translate-x-[-50%] text-center">Sign In With Google</span>
                        </button>
                    </form>
                </div>
                <a href="/signup" className="font-normal text-sm mt-5">Don't Have an Account? <span className="text-[#855BFF] underline hover:cursor-pointer">Sign Up!</span></a>
            </section>
        </>
    )
}