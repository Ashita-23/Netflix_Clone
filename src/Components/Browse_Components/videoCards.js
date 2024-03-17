// import {POSTER_API} from "../../utils/apiOptions"

const NowPlayingCards =(NowData)=>{
    console.log(NowData)
    // if (NowData===null) return
    return(
        <div className="p-2">
        <h1 className="text-2xl font-semibold p-2" >Now Playing </h1>
         <div className="flex overflow-x-scroll p">
         {/* {NowData?.map((data)=><img src={POSTER_API+data?.poster_path} alt="poster" className="w-[150px] mx-2"></img>)} */}

         </div>
        </div>
    )
}

export default NowPlayingCards