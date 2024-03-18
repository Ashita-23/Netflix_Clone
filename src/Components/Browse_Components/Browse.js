// import  useNowPlayingApi  from "../../customHooks/useNowPlayingApi"
import { useEffect, useState } from "react"
// import netflixCover from "../../Assets/LoginImages/netflixCover.jpeg"
import { TOP_RATED, options , POPULER_API, UP_COMING ,NOW_PLAYING_API } from "../../utils/apiOptions"
import {videoCardsTitle} from "../../utils/hardCodedData"
import NowPlayingCards from "./videoCards"

const Browse = ()=>{


    const [nowPlaying,setNowPlaying] = useState()
    const [nowPopuler,setNowPopuler] = useState()
    const [nowTOP_RATED ,setNowTOP_RATED ] = useState()
    const [nowUP_COMING ,setUP_COMING ] = useState()


    useEffect(()=>{
        getNOW_PLAYING()
        getPopuler ()
        getTOP_RATED ()
        getUp_Coming ()
    },[])

    const getNOW_PLAYING = async ()=>{
        const Data = await fetch(NOW_PLAYING_API , options)
        const JSON = await Data.json()

        setNowPlaying(JSON) }


        const getPopuler = async ()=>{
            const Data = await fetch(POPULER_API, options)
            const JSON = await Data.json()
           
            setNowPopuler(JSON)
       
    }

    const getTOP_RATED = async ()=>{
        const Data = await fetch(TOP_RATED, options)
        const JSON = await Data.json()
      
        setNowTOP_RATED(JSON)
   
}

const getUp_Coming = async ()=>{
    const Data = await fetch(UP_COMING, options)
    const JSON = await Data.json()
    
    setUP_COMING(JSON)

}

    return(
<div className="relative w-[100%]">
    {/* <img alt="Cover" src={netflixCover} className="w-screen"></img> */}
    <iframe className=" w-screen aspect-video  " src="https://www.youtube.com/embed/xCVBU07uGf4?si=IKSTJwvth33OXRpI?autoplay&mute=1" 
    title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>
    <div className=" w-5/12 p-2 absolute -mt-[25%] ml-6 text-white">
        <p className="text-3xl font-semibold">{nowPlaying?.results[0]?.original_title}</p>
        <p className="text-md">{nowPlaying?.results[0]?.overview}</p>
    </div>
    <div className="border bg-black">
    <div className="p-2 -mt-[14%]">
               <NowPlayingCards  NowData={nowPlaying?.results} titleText={videoCardsTitle[0]} key={nowPlaying?.results.id}></NowPlayingCards></div>
               <NowPlayingCards  NowData={nowPopuler?.results} titleText={videoCardsTitle[1]} key={nowPlaying?.results.id} ></NowPlayingCards>
               <NowPlayingCards  NowData={nowTOP_RATED?.results} titleText={videoCardsTitle[2]} key={nowPlaying?.results.id}></NowPlayingCards>
               <NowPlayingCards  NowData={nowUP_COMING?.results} titleText={videoCardsTitle[3]} key={nowPlaying?.results.id}></NowPlayingCards>

    </div>
</div>
    )
}

export default Browse