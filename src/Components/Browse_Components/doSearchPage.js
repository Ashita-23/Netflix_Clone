import netflixCover from "../../Assets/LoginImages/netflixCover.jpeg"

const DoSearchPage = ()=>{
    return(
        <>
            <div>
                    <img alt="Cover" src={netflixCover} className="w-screen"></img>
                   <form className=" w-6/12 flex py-4 px-2 items-center justify-center absolute -mt-[45%] ml-[18%]  bg-black rounded-md ">
                    <input type="text" placeholder="What do you want to watch today?" className="w-10/12 py-2 px-4 text-md  rounded-l-md outline-none"/>
                    <button className="px-4 py-2 text-white text-md bg-red-600 rounded-r-md">Search</button>
                   </form>
            </div>
        </>
    )
}


export default DoSearchPage