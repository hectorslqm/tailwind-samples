'use client'

export default function PlayGround() {
  return (
    <main className="p-4">
      <h1 className="text-center text-lg text-slate-50 bg-slate-900">Hello People, This project is a playground. So I can learn how to use Tailwind</h1>
      <div className="w-full h-10 bg-slate-400 border-blue-900 border-4 rounded-md my-4 p-1">
        <p className="text-center font-mono font-extrabold text-[20px]">A DIV</p>
      </div>
      {/* layout - arrangement and positioning of elements in a website*/}
      <div className="fixed w-10 h-10 bg-red-500 top-2 rounded-full"></div>
      <div className="flex justify-center space-x-6">
        <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">I'm</div>
        <div className="h-16 w-16 rounded-md bg-blue-500 flex items-center justify-center">Using</div>
        <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">Space</div>
      </div>
      <div className="pt-2 flex justify-between items-center">
        <div className="h-16 w-16 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[60px] border-b-blue-500"></div>
        <p className="font-bold">Now</p>
        <div className="h-16 w-16 rounded-md bg-blue-500 text-center"></div>
        <p className="font-bold">Flex Box</p>
        <div className="h-16 w-16 rounded-full bg-blue-500 text-center"></div>
      </div>
      <div className="pt-2 grid grid-cols-3 gap-2">
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
      </div>
      {/* media queries */}
      <div className="md:block hidden">
        <p>I will appear for device Resolution &gt; 768px</p>
      </div>
      <div className="max-md:block hidden">
        <p>I will appear for device Resolution &lt; 768px</p>
      </div>
      {/* hover effect */}  
      <button className="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring focus:ring-green-400 active:bg-blue-800">
        Click me
      </button>
      <ul className="my-2 space-y-2">
        {
        [1,2,3,4,5].map((item, index) => (
          <li key={index}
            className={`bg-white p-2 ${index === 0 ? `first:bg-yellow-400` : `even:bg-green-400 odd:bg-blue-400` }`}>
            Item {item}
          </li>
        ))
        }
      </ul>
      {/* Theme Dark:*/}
      {/* card holds multiple properties and is in globals.css */}
      <div className="card">
        <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">This is a Text Element</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-blue-100">This is an even longer p tag element</p>
        <button 
          id="toggleDark" 
          className="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-400 rounded-md"
          onClick={(event) => {
            document.body.classList.toggle('dark');
            console.log("click");
          }}

        >
          The Dark Mode Button
        </button>
      </div>
      <button className="gradient-button">Gradient Button</button>
      <p className="text-[12px] text-[#973f29] bg-stone-200 p-[16px]">Chestnut custom color</p>
      <p className="text-[12px] text-customChestnutColor bg-stone-200 p-[16px]">Chestnut custom color see tailwind.config.ts</p>
    </main>
  );
}

