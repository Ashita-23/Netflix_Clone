
import netflixCover from "../../Assets/LoginImages/netflixCover.jpeg"
import { footerCardsData ,footerSecCD } from "../../utils/hardCodedData"

const SignIn = () => {
    // console.log(footerCardsData)
    return   (<>
      
        <nav className="w-[100%]  h-20 px-4 absolute bg-gradient-to-b from-black z-20">
        <span className="text-red-600 text-center ml-[0.5rem]  font-bold text-[2rem] tracking-wider sm: md:">CHALCHITRA</span></nav> 
         <div className="w-[100%] h-[auto]  border border-green-500">
            <img src={netflixCover}  alt="background image" className="w-screen "/>
            <div className="border border-green-600 mt-[-40%] ml-[40%] bg-black  absolute py-6 rounded-md"> 
            {/* <h1>Unlimited movies, TV shows and more</h1> */}
                <form action="" className="border border-red-600  w-[20rem] px-4 py-2 rounded-md bg-black flex flex-col justify-evenly item-center  ">
                    <input type="text" placeholder="Enter Your Name.." className="text-md rounded-md p-2 m-1"/>
                    <input type="email" placeholder="Enter Your Email.." className="text-md rounded-md p-2 m-1"/>
                    <input type="password" placeholder="Enter Your Password" className="text-md rounded-md p-2 m-1"/>
                    <button className="text-md bg-red-600 text-white rounded-md p-2 m-1">Submit</button>
                </form>
                {/* <form action="" className="border border-red-600  w-[20rem] px-4 py-2 rounded-md bg-black flex flex-col justify-evenly item-center  ">
                    <input type="email" placeholder="Enter Your Email.." className="text-md rounded-md p-2 m-1"/>
                    <input type="password" placeholder="Enter Your Password" className="text-md rounded-md p-2 m-1"/>
                    <button className="text-md bg-red-600 text-white rounded-md p-2 m-1">Submit</button>
                </form> */}
            <div className="text-white px-6 py-0  text-left"><span className="text-sm">If you are already sign in ? than </span><button className="text-red-500 text-sm">Sign up</button></div>
            <div className="text-white px-6 py-0  text-left"><span className="text-sm">If you are already not sign in ? than </span><button className="text-red-500 text-sm">Sign in</button></div>
            </div> 

            <div className="border border-red-700 ">
                <h1>A plan to suit your needs</h1>
                <div className="flex">
                   {footerCardsData?.map((data) =>{return( <div key={data.key}>
                        <p>{data.title}</p>
                        <p>{data.text}</p>
                        <p>{data.cost}</p>
                    </div>)
                   })}
                   
                </div>
            </div>
            <div className="border border-red-700 ">
                <h1>More reasons to join </h1>
                <div className="flex">
                   {footerSecCD?.map((data) =>{return( <div key={data.key}>
                        <p>{data.title}</p>
                        <p>{data.text}</p>
                        <i className={data.Icon}></i>
                    </div>)
                   })}
                   
                </div>
            </div>
        </div>
       </>)
}

export default SignIn