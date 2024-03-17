
import netflixCover from "../../Assets/LoginImages/netflixCover.jpeg"

const SignIn = () => {
    return   (<>
      
        <nav className="w-[100%]  h-20 px-4 absolute bg-gradient-to-b from-black z-20">
        <span className="text-red-600 text-center ml-[0.5rem]  font-bold text-[2rem] tracking-wider sm: md:">CHALCHITRA</span></nav> 
         <div className="w-[100%] h-[auto]  border border-green-500">
            <img src={netflixCover}  alt="background image" className="w-full "/>
            {/* <div className="border flex content-center justify-center items-center	 absolute mt-[-20vh] h-[90vh] w-[100%] bg-black opacity-60 z-10  */}
            {/* sm:mt-[-30vh] h-[30vh] md:mt-[-40vh] h-[60vh]  lg:mt-[-40vh] h-[100vh]  xl:mt-[-100vh] h-[100vh] 2xl:mt-[-40] h-[100vh]"> */}
                <form action="" className="h-[20rem] w-[20rem] border flex flex-col justify-evenly item-center border-red-400 absolute xl:mt-[-40%] ml-[40%] ">
                    <input type="email" placeholder="Enter Your Emain.."/>
                    <input type="email" placeholder="Enter Your Emain.."/>
                    <input type="email" placeholder="Enter Your Emain.."/>
                </form>
            {/* </div> */}
            
        </div>
       </>)
}

export default SignIn