export default function Home() {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap py-6 px-14 bg-gray-700">
        <div class="flex items-center flex-shrink-0 text-white">
          <div class="bg-white p-6"></div>
          <span class="font-semibold text-xl tracking-tight ml-5">FTC Duck</span>
        </div>

        <div class="flex items-center justify-between flex-wrap">
          <div class="mx-5">
            <a href="#" class="text-md text-white px-8 py-3 leading-none border rounded-xl border-white hover:border-transparent hover:bg-blue-700 transition-all duration-100 ease-linear">Login</a>
          </div>
          
          <div class="mx-5">
            <a href="#" class="text-md text-white px-8 py-3 bg-blue-700 leading-none rounded-xl transition-all duration-100 ease-linear">Sign Up</a>
          </div>
        </div>
      </nav>

      <main class="flex flex-col flex-1 items-center justify-center text-white text-center">
        <div class="flex flex-col h-80 justify-around mb-28">
          {/* <div class="mt-44"></div> */}
          <p6 class="text-md">FTC Duck</p6>
          <p1 class="text-6xl font-light">Your personal assistant.<br></br>For ALL things FTC.</p1>
          <p3 class="text-xl font-semibold">A free and easy-to-use resource for teams starting off in FTC.<br></br>Powered by ChatGPT.</p3>
          <a href="#" class="text-md text-white px-8 py-4 self-center bg-blue-700 leading-none rounded-xl hover:px-10 transition-all duration-200 ease-linear">Get Started</a>
        </div>
      </main>
    </>
  );
}
