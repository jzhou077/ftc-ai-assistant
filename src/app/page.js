import Link from 'next/link'

export default function Home() {

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap py-6 px-14 bg-[#363636]">
        <div className="flex items-center flex-shrink-0 text-white">
          {/* <div className="bg-white p-6"></div> */}
          <span className="font-semibold text-xl tracking-tight ml-5">FTC Duck</span>
        </div>

        <div className="flex items-center justify-between flex-wrap">
          <div className="mx-5">
            <Link href="/signin" className="text-md text-white px-8 py-3 leading-none border rounded-xl border-white hover:border-transparent hover:bg-[#5130B2] transition-all duration-100 ease-linear">Login</Link>
          </div>
          
          <div className="mx-5">
            <Link href="/signup" className="text-md text-white px-8 py-3 bg-[#5130B2] leading-none rounded-xl transition-all duration-100 ease-linear">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-col flex-1 items-center justify-center text-white text-center">
        <div className="flex flex-col h-80 justify-around mb-28">
          {/* <div className="mt-44"></div> */}
          <h6 className="text-md">FTC Duck</h6>
          <h1 className="text-6xl font-light">Your personal assistant.<br></br>For ALL things FTC.</h1>
          <h3 className="text-xl font-semibold">A free and easy-to-use resource for teams starting off in FTC.<br></br>Powered by ChatGPT.</h3>
          <Link href="/signup" className="text-md text-white px-8 py-4 self-center bg-[#5130B2] leading-none rounded-xl hover:px-10 transition-all duration-200 ease-linear">Get Started</Link>
        </div>
      </main>
    </>
  );
}
