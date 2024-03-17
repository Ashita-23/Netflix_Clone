

const Navigation= ()=>{
    return <nav className="w-[100%]  h-20 px-4 absolute bg-gradient-to-b from-black z-20 flex justify-between items-center">
    <span className="text-red-600 text-center ml-[0.5rem]  font-bold text-[2rem] tracking-wider sm: md:">CHALCHITRA</span>
   <div className="border border-red-600 w-4/12 flex justify-around items-center">
    <button className="text-white bg-red-600 px-4 py-1 rounded-md">Do Search</button>
    <button  className="text-white bg-slate-400 px-4 py-1 rounded-md"> <i className="fa-regular fa-face-smile"></i> log in</button>
   </div>
    </nav> 
}

export  default Navigation