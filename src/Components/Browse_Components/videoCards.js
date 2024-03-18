import {POSTER_API} from "../../utils/apiOptions"

const NowPlayingCards =({NowData,titleText})=>{
    
    return(
        <div className="p-2"  >
       <h1 className="text-2xl font-semibold p-2 text-white" key={titleText.key} >{titleText.titleText} </h1>
         <div className="flex overflow-x-scroll p">
         {NowData?.map((data)=>{return(<img src={POSTER_API+data?.poster_path} alt="poster" className="w-[150px] mx-2" key={NowData.vote_count} ></img>)})}

         </div>
        </div>
    )
}

export default NowPlayingCards